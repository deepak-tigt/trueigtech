const asyncHandler = require("express-async-handler")
const contact = require("../model/contactModel")

// to get all contacts 
const getContacts = asyncHandler(async (req,res)=>{
    // db call to getAllContacts
    const contacts = await contact.getAllContacts();
    res.status(200).json(contacts);
});
 

// to create all contacts
const createContact = asyncHandler(async(req,res)=>{
    console.log("this is the request body",req.body);
    const {name,email,phone} = req.body;
    if(!name|| !email|| !phone){
        res.status(400);
        throw new Error("all fields required !")
    }
    const addContact = await contact.createContact({name,email,phone});
    res.status(201).json(addContact)
    
});


// to get the contact by its id 
const getContactById = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    if(!id){
        res.status(400)
        throw new Error("id is required !")
    }
    const contactById = await contact.getContactById(id);
    if(!contactById){
        res.status(404)
        throw new Error("invalid id!")
    }
    res.status(200).json(contactById)
});


// to update the contact by its id
const updateContact = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const {name,email,phone} = req.body;
    if(!id|| !name || !email || ! phone){
        throw new Error("all fields are required !")
    }
    const contactById = await contact.getContactById(id);
    if(!contactById){
        res.status(404)
        throw new Error("invalid id!")
    }
    const update = await contact.updateContactById(id,{name,email,phone})
    res.status(200).json(update)
});


// to delete the contact b its id
const deleteContact = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    if(!id){
        throw new Error("id is required")
    }
    const contactById = await contact.getContactById(id);
    if(!contactById){
        res.status(404)
        throw new Error("invalid id!")
    }
    await contact.deleteContact(id)
    res.status(200).json({message:"contact deleted successfully ..."})
});

module.exports = {
    getContacts, 
    createContact,
    getContactById,
    updateContact,
    deleteContact
}