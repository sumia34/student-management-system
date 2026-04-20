const express = require("express");
const path = require("path");
const connectDB=require("./config/db.js")
connectDB();
const app = express();
//set ejs as a template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({entended:true}))
app.use(express.json());
app.get('/file',(req,res)=>{
  res.render("index")
})

const userRoutes = require("./routes/routes");

app.use("/users", userRoutes);

app.listen(5000, () => {
console.log("Server running");
});