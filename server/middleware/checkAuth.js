exports.isLoggedIn=function(req,res,next){
    if(req.user){
        next();
    }else{
        res.status(404).render('firstauth.ejs');
    }
}