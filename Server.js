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

// establishing connection to database
const username = "piyushkumarat051"
const password = "oqfz1wZ7PH1FzZuo"
const dbname = "yupp"
mongoose.set('strictQuery', true);
try {
  mongoose.connect(`mongodb+srv://piyushkumarat051:oqfz1wZ7PH1FzZuo@yupp.7kzvm9x.mongodb.net/?retryWrites=true&w=majority`, {
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
app.use(cors())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Home frontend Route
app.get('/',(req,res) => {
  if (req.session.loggedin !== true){
    res.redirect('/signin');
  } else {
    res.redirect('/home')
  }
})
const route_home = require('./routes/home')
app.use('/',jsonParser,route_home)

// Signin and Sign up frontend
const route_sign = require('./routes/sign')
app.use('/',jsonParser,route_sign)

// bookmark load and save backend
const route_bookmark = require('./routes/bookmark')
app.use('/',jsonParser,route_bookmark)

// openai backend route
const route_openai = require('./routes/openai')
app.use('/',jsonParser,route_openai)

// authentication backend
const route_auth = require('./routes/authentication')
app.use('/',urlencodedParser,route_auth)

// activating server and start routing
const server_Port = process.env.PORT
const base_url = 'http://localhost:' + server_Port

// starting RESTful API
app.listen(server_Port, () => {
  console.log(`Server running at: ${base_url}/`);
});