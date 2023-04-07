require("dotenv").config();
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const db=process.env.DB;
mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connected")).catch((error)=>console.log(error.message));
