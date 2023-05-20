let getID = (req, res) => {
    if (req.session.loggedin === true){
        res
        .status(200)
        .send({data : req.session.id})
    } else {
        res
        .status(400)
        .send({error : "invalid request"})
    }
};

let getEmail = (req, res) => {
    if (req.session.loggedin === true){
        res
        .status(200)
        .send({data : req.session.email})
    } else {
        res
        .status(400)
        .send({error : "invalid request"})
    }
};


let getUsername = (req, res) => {
    if (req.session.loggedin === true){
        res
        .status(200)
        .send({data : req.session.username})
    } else {
        res
        .status(400)
        .send({error : "invalid request"})
    }
};


let getAccessToken = (req, res) => {
    if (req.session.loggedin === true){
        res
        .status(200)
        .send({data : req.session.getAccessToken})
    } else {
        res
        .status(400)
        .send({error : "invalid request"})
    }
};


let getLoggedin = (req, res) => {
    if (req.session.loggedin === true){
        res
        .status(data)
        .send({payload : req.session.loggedin})
    } else {
        res
        .status(400)
        .send({error : "invalid request"})
    }
};

module.exports = {getID, getEmail, getUsername, getAccessToken, getLoggedin}