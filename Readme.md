# Project VichaarShala
* this a project where i bring a chatting application with a modern interface to the world

## Command to setup and install all the dependencies
1. to clone the project
```sh
git clone https://github.com/dark-king-001/VichaarShala.git && cd VichaarShala
```
2. to install the dependencies
```sh
npm i && cd Frontend && npm i && cd ../
```
3. to run the backend
```sh
npm run dev
```
4. to run the Frontend
```sh
cd Frontend && npm run dev && cd ../
```
## to change the enviornment settings
* the current settings for backend are loaded into ```.env```
```.env
PORT=3000
MONGO=mongodb://127.0.0.1:27017/VichaarShala
API_SECRET=This_is_very_secret_string
```
* to use mongodb Atlas
```.env
PORT=3000
# MONGO= your mongodb url
API_SECRET=This_is_very_secret_string
```

* since the server is in development my link is also there but i authenticate the device on runtime so it won't work for other users
## Directory Structure

```sh
VichaarShala
├── controllers
│   ├── authentication.js
│   ├── bookmark.js
│   ├── home.js
│   ├── openai.js
│   └── sign.js
├── middleware
│   └── authJWT.js
├── models
│   ├── bookmark.js
│   └── user.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── index.css
│   │   ├── left.css
│   │   ├── main.css
│   │   └── right.css
│   └── js
├── Readme.md
├── routes
│   ├── authentication.js
│   ├── bookmark.js
│   ├── home.js
│   ├── openai.js
│   └── sign.js
├── Server.js
└── views
    ├── home.ejs
    ├── partials
    │   ├── head.ejs
    │   ├── left.ejs
    │   ├── main.ejs
    │   └── right.ejs
    ├── Sign_in.ejs
    └── Sign_up.ejs
/node_modules is ignored
```

## Backend Dependencies
```json
{
    "axios": "^1.2.2",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^9.0.0",
    "moment": "^2.29.4",
    "mongoose": "^6.9.2",
    "nodemon": "^2.0.20",
    "request": "^2.88.2"
}
```
* same can be found on package.json
## Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.10.0",
  "vite": "^4.3.1"
}
```
* same can be found on package.json
## Logic Tree 
(if anyone is interested open-source development)
* at start
```
website start
if authenticated
  to Frontend
else
  Signin
```

* at signin
```
if signin
  authenticated
  redirected to Frontend
  return signin
else if signup
  register
  all the processing
  redirect to signin
```

* authentication procedure 

```
for signin
  path: server.js -> routes/sign.js /signin -> controllers/sign.js /signin -> routes/authentication.js /login -> controllers/authentication.js /login
for signup
  path: server.js -> routes/sign.js /signup -> controllers/sign.js /signup -> routes/authentication.js /register -> controllers/authentication.js /register
```
NOTE : data is loaded using model 
```
models/user.js
```