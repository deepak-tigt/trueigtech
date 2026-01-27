const db = require("../config/db")

// to get all contacts
const getAllContacts = async ()=>{
    const result = await db.query("SELECT * FROM contacts ORDER BY id DESC")
    return result.rows;
}

// to create a new contact 
// here we are using the object destructuring when receiving the data
const createContact = async ({name,email,phone})=>{
    const result = await db.query("INSERT INTO contacts(name,email,phone) VALUES($1,$2,$3) RETURNING *",[name,email,phone])
    return result.rows[0]
}

// to get contact by id 
const getContactById = async (id)=>{
    const result = await db.query("SELECT * FROM contacts WHERE id = $1",[id])
    return result.rows[0];
}

// to update the contact by id 
const updateContactById = async(id,{name,email,phone})=>{
    const result = await db.query("UPDATE CONTACTS SET name = $1,email = $2,phone = $3 where id = $4 RETURNING *"[name,email,phone,id])
    return result.rows[0]
}

// to delete the contact by id 
const deleteContact = async(id)=>{
    await db.query("DELETE FROM contacts WHERE id = $1",[id])
}

module.exports = {
    getAllContacts,
    createContact,
    getContactById,
    updateContactById,
    deleteContact
}