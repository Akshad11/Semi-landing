const router = require("express").Router();
const { sendContact } = require("../controllers/contact.controller");
const { contactValidation } = require("../middlewares/validate.middleware");

router.post("/", contactValidation, sendContact);

module.exports = router;
