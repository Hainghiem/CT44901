const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// Định nghĩa route cho contacts
app.use("/api/contacts", contactsRouter);

// Xử lý lỗi 404 cho các route không tồn tại
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error", // Sử dụng 'err' thay vì 'error'
    });
});

module.exports = app;
