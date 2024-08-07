const express=require('express');
const router=express.Router();
router.route("/").get((req,res)=>{
    res.status(200).json({message:'Get all contacts ${req.params.id}'});
});
router.route("/").post((req,res)=>{
    res.status(200).json({message:"all contacts"});
});
router.route("/:id").put((req,res)=>{
    res.status(200).json({message:'Update all contacts ${req.params.id}' });
});

module.exports=router;