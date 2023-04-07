const mongoose =require("mongoose")

const Sliderschema= mongoose.Schema({
    title:String,
    subTitle:String,
    imgURl:String,
    description:String,
    aboutcourse:String,
    syllabus:String,
    org_price:Number,
    offer_price:Number
})

module.exports=mongoose.model('sliders',Sliderschema)