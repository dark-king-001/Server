let getResponse = (req,res,next) => {
    // req.session.accessToken = token
    const object = {
        siteName : "Home",
        id : req.session.id,
        email : req.session.email,
        name : req.session.username,
        groups : ["Links for entertainment"],
        data :  [
            {
                groupname : "Links for entertainment",
                name : "mangatx",
                link : "https://mangatx.com/"
            },
            {
                groupname : "Links for entertainment",
                name : "Early Manga",
                link : "https://earlym.org/"
            },
            {
                groupname : "Links for entertainment",
                name : "Fav Youtube Playlist",
                link : "Youtube Playlist"
            }
        ],
    }        
    res.render('home.ejs',{object})
}
let postResponse = (req,res,next) => {
    res.send('post home request is invalid')
}

module.exports = {getResponse, postResponse}