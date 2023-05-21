// package loading and basic setting
const express   = require('express');
const session   = require('express-session');
const mongoose  = require("mongoose");
const bodyParser= require('body-parser');
const path      = require('path');
const cors      = require('cors')
require("dotenv").config();

// setting up
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'public')));

mongoose.set('strictQuery', true);
try {
  mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("connected to db");

} catch (error) {
  handleError(error);
}
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

// app.use
app.use(cors({
  origin: process.env.FRONTEND, // Replace with your React frontend domain
  credentials: true
}));
// app.use(cors()) 
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.get('/', (req, res) => {
  res.send("backend home")
});

// // openai backend route
// const route_openai = require('./routes/openai')
// app.use('/',jsonParser,route_openai)

// authentication backend
const route_auth = require('./routes/authentication')
app.use('/auth',urlencodedParser,route_auth)

// activating server and start routing
const server_Port = process.env.PORT
const base_url = 'http://localhost:' + server_Port

// starting RESTful API
app.listen(server_Port, () => {
  console.log(`Server running at: ${base_url}/`);
});