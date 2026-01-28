const express = require("express");
const {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require("../controller/contactController")
const router = express.Router();


//  we can also perform the chaining for the same route like this
// router.route("/").get(getContacts).post(createContact)

router.route("/").get(getContacts)

router.route("/").post(createContact)

router.route("/:id").get(getContactById)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)



module.exports = router;