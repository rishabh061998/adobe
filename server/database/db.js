import mongoose from "mongoose"


const Connection=async(username,password)=>{


    const URL=`mongodb://${username}:${password}@ac-ag9zyqw-shard-00-00.vgxjsn5.mongodb.net:27017,ac-ag9zyqw-shard-00-01.vgxjsn5.mongodb.net:27017,ac-ag9zyqw-shard-00-02.vgxjsn5.mongodb.net:27017/ADOBE-ASSIGNMENT?ssl=true&replicaSet=atlas-qn3mbq-shard-0&authSource=admin&retryWrites=true&w=majority`
try{
  await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
  console.log("database connected successfully")
}
catch(error){
    console.log("error while connecting database")
}
}


export default Connection;