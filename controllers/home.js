let getResponse = (req,res,next) => {
    // req.session.accessToken = token
    const object = {
        siteName : "Home",
        id : req.session.id,
        email : req.session.email,
        name : req.session.username,
    }        
    res.render('home.ejs',{object})
}
let postResponse = (req,res,next) => {
    res.send('post home request is invalid')
}

module.exports = {getResponse, postResponse}