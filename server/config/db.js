const moongoose=require('mongoose');
moongoose.set('strictQuery',false);

const connectDb=async()=>{
    try{
        const conn=await moongoose.connect(process.env.MONGODB_URI
        )
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.error(err)
        
    }
}
    
module.exports=connectDb;