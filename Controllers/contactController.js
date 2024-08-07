const getContact = (req,res)=>{
    res.status(200).json({message:'Get contact for ${req.params.id}' });
};
const updateContact = (req,res)=>{
    res.status(200).json({message:'update contact for ${req.params.id}' });
};
module.exports = {getContact, createContact};