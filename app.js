const express = require("express");
const app = express();
const errorMiddleware = require("./backend/middlewares/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
const user = require("./backend/routes/userRoute");
const food = require("./backend/routes/foodRoute");

app.use("/api/v1/user", user);
app.use("/api/v1", food);

//Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
