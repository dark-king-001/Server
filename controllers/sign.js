let sign_in = (req,res,next) => {
    const object = {
        siteName : "Sign in"
    }
    res.render('Sign_in.ejs',{object})
}
let sign_up = (req,res,next) => {
    const object = {
        siteName : "Sign up"
    }
    res.render('Sign_up.ejs',{object})
}

module.exports = {sign_in, sign_up}