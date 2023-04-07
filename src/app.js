require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("../db/conn");
const routes = require("../routes/router");
const hbs=require("hbs");
const app = express();
const sliders=require("../models/Sliderschema");
const t_mols=require("../models/detailsschema");
const branchs=require("../models/branch");
const kalyans=require("../models/kalyan");
const dombivlis=require("../models/dombivli");
const thanes=require("../models/thane");







// setting the path
const staticpath=path.join(__dirname,"../public");
const templetepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");

//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));

app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use('/static',express.static("public"));
app.use("/",routes);
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views",templetepath);
hbs.registerPartials(partialpath);

// router set

//  sliders.create({
//         title:'robotics',
//         subTitle:'Some quick example text to build on the card title and make the bulk of the cards content.',
//         imgURl:'',
//         description:'Robotics is a branch of engineering that involves the conception, design, manufacture and operation of robots. The objective of the robotics field is to create intelligent machines that can assist humans in a variety of ways.',
//         aboutcourse:'What Is Robotics? Robotics is the intersection of science, engineering and technology that produces machines, called robots, that replicate or substitute for human actions. Pop culture has always been fascinated with robots — examples include R2-D2, the Terminator and WALL-E',
//         syllabus:'python,numpy,ml,ai',
//         org_price:'80000',
//         offer_price:'40000'
       
//  });





const port = process.env.PORT|| 4003;





app.listen(port,(req,res)=>{
    console.log(`connect on port, ${port}`);
})