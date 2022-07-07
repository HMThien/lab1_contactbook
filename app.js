const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contact.route");
const ApiError = require("./routes/api-error");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req, res) => {
    res.json({message:"Wellome - Chào mừng"});
});
module.exports = app;

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Không tìm thấy"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "server lỗi",
    });
});

module.exports = app;