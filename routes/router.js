const express = require("express");
const branch = require("../models/branch");
const details = require("../models/detailsschema");
const dombivli = require("../models/dombivli");
const kalyan = require("../models/kalyan");
const Sliderschema = require("../models/Sliderschema");
const thane = require("../models/thane");

const routes = express.Router()

routes.get("/", async (req, res) => {
    const slides = await Sliderschema.find()
    const br_name = await branch.find()



    res.render("index", {
        slides: slides,
        br_name: br_name,



    });
});

routes.get("/details/:id", async (req, res) => {
    // 64228bfaba302ca2aaa2835b
    
  const detailsPage = await details.find()
  const course = await Sliderschema.findById(req.params.id)
//  console.log(course)
    res.render("details", {
        detailsPage:detailsPage,
        course:[course
        
        
        
        
        
        
        
        
        
        
        ]
    });
});


routes.get("/kalyan_branch", async (req, res) => {
    const kyn_branch = await kalyan.find()
    res.render("kalyan_branch", {
        kyn_branch:kyn_branch
    });
});
routes.get("/dombivli_branch", async (req, res) => {
    const dombivli_branch = await dombivli.find()
    res.render("dombivli_branch", {
        dombivli_branch:dombivli_branch
    });
});

routes.get("/thane_branch", async (req, res) => {
    const thane_branch = await thane.find()
    res.render("thane_branch", {
        thane_branch:thane_branch
    });
});

routes.get("/features", async (req, res) => {
    const slides = await Sliderschema.find()
     res.render("features", {
        slides: slides,
       
    });
});

routes.get("/wamessage",async(req,res)=>{
    
   res.redirect('https://smartbytecomputer.com/')
})





module.exports = routes;


