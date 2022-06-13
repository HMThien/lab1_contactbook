const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contact.route");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req, res) => {
    res.json({message:"Wellome - Chào mừng"});
});
module.exports = app;

app.use("/api/contacts", contactsRouter);
module.exports = app;