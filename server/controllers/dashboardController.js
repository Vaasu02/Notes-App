const Note=require('../models/Notes');
const moongoose=require('mongoose');


exports.dashboard=async(req,res)=>{
    const locals={
        title:"DashBoard",
        description:"Free NodeJS Notes App"
    
    }

    res.render('dashboard/index',{
        username:req.user.firstName,
        locals,
        layout:"../views/layouts/dashboard"
    });
}