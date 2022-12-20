const express = require("express");
const { register, login } = require("./controller/authController");
const userController=require("./controller/userController")
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.get("/users", userController);
app.post("/register",register);
app.post("/login",login);
module.exports = app;
