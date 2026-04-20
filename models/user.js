const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
 name :  {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters']
  },
 age: { 
    type: Number, 
    required: true, 
    min: [16, 'Age must be greater than 16'], // Example validation
    max: [100, 'Too old']
  },
  course: { 
    type: String, 
    required: true, 
    trim: true
  }, 
 email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"]
  }
},{ timestamps: true });
  module.exports=mongoose.model('user',userSchema);
