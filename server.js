const express=require('express');
const dotenv=require('dotenv');
const app=express();
const port=process.env.PORT || 3000;
app.use("/api/contacts",require("./routes/contactRoutes"));
app.listen(port,()=>{
    console.log('Server is running on port ${port}');
});