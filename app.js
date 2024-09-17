const express = require("express");
const cors = require("cors");

const app = express();
const conractsRouter = require("./app/routes/contact.route")

app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.json({ message: "welcome to contact book application." });
});

app.use("/api/contacts",conractsRouter);

module.exports = app;