const mongoose=require("mongoose");

const validator=require("validator");


//here we create the structure for the document

const user=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    age:{
        type:Number,
        required:true
     }
    

    
})

//we will create the model

const Customer=new mongoose.model('Customer',user);
module.exports=Customer;