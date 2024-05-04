require('dotenv').config();

const express=require('express');
const expresslayouts=require('express-ejs-layouts');
const connectDB=require('./server/config/db');
const session=require('express-session');
const passport=require('passport');
const MongoStore=require('connect-mongo');

const app=express();
const port=process.env.PORT || 3000;



app.use(express.urlencoded({extended:true}));
app.use(express.json());




// static files
app.use(express.static('public'));

// templating engines
app.use(expresslayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use(session({
    secret:'appisxcvc',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    }),
    // cookie:{
    //     maxAge:1000*60*60*24

    // }

}));


app.use(passport.initialize());
app.use(passport.session());


connectDB();


// routes
app.use('/',require('./server/routes/auth'))
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))

app.get("*",(req,res)=>{
    res.status(404).render('404.ejs');
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});