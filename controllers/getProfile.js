let getID = (req, res) => {
    if (req.session.loggedin === true){
        return res.json({value : req.session.id})
    } else {
        return res.json({error : "invalid request"})
    }
};

let getEmail = (req, res) => {
    console.log(req.session)
    if (req.session.loggedin === true){
        return res.json({value : req.session.email})
    } else {
        return res.json({error : "invalid request"})
    }
};


let getUsername = (req, res) => {
    if (req.session.loggedin === true){
        return res.json({value : req.session.username})
    } else {
        return res.json({error : "invalid request"})
    }
};


let getAccessToken = (req, res) => {
    if (req.session.loggedin === true){
        return res.json({value : req.session.getAccessToken})
    } else {
        return res.json({error : "invalid request"})
    }
};


let getLoggedin = (req, res) => {
    if (req.session.loggedin === true){
        return res.json({value : req.session.loggedin})
    } else {
        return res.json({error : "invalid request"})
    }
};

module.exports = {getID, getEmail, getUsername, getAccessToken, getLoggedin}