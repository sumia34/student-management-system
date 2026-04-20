const express = require("express");
const router = express.Router();
const Student=require("../models/user.js");
const { BiSearch } = require("react-icons/bi");
//create student
router.post("/register",async(req,res)=>{
    try{
    const student=new Student (req.body);
    await student.save() ;
     res.redirect("/users/dashboard");
     console.log("success")
}catch(err){
    res.send(err);}
})
router.get("/register", async(req, res) => {
    res.render("index");
});
// router.post("/login",async(req,res)=>{
//     const exist=await Student.findOne({email:req.body.email})
//     if (exist){
//         res.send("login sucessful")
//     }else{
//         res.send("user not found")
//     }
        
// })
router.get('/dashboard',async(req,res)=>{
    const dashboard=await Student.find();
    res.render("dashboard",{dashboard})
});

router.get("/delete/:id",async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/users/dashboard")
})
router.get("/update/:id",async(req,res)=>{
    const student= await Student.findById(req.params.id)
    res.render("index",{student});

});
router.get("/search",async(req,res)=>{
    const search=req.query.name;
    let students;
    if (search){
students=await Student.find({name:{$regex:search,$options:"i"}}).limit(5)
    }else{
        students=await Student.find();
    }
        res.json(students);
    })
    router.get("/search-result", async(req,res)=>{

const search = req.query.name;

const students = await Student.find({
name:{$regex:search,$options:"i"}
});

res.render("dashboard",{dashboard:students})

});
module.exports = router;