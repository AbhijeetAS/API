const express=require("express");

const app=express();

const port=process.env.port || 5000;
app.use(express.json());

//connect the file the database
require("./con/connection")

//connect with mosel file of database
const Customer = require("./schema/schemas");

app.get("/",(req,resp)=>
{
      resp.send("hello from the home");
})

//for create the method
app.post("/simple",async(req,resp)=>
{
    try{
        const user=new Customer(req.body);
        const personCreate=await user.save();
        resp.status(201).send(personCreate);
    }
    catch(err)
    {
        resp.status(400).send(err);
    }
});

//for finding the product
app.get("/simple",async(req,resp)=>
{
   try{
    const personData=await Customer.find();
    resp.send(personData);
   }
   catch(err)
   {
    resp.send(err);
   }
})

//find the acourding to their name
app.get("/simple/:name",async(req,resp)=>
{
    try{
        const _name=req.params.name;
        const personData =await Customer.find({name:_name});
        resp.send(personData);
        
    }
    catch(err)
    {
        resp.send(err);
    }
});



app.listen(port,()=>
{
    console.log(`hello from the port number ${port}`)
})