Directory Structure
.
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
installed node modules
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
same can be found on pachage.json