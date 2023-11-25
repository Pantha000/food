const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
const user = require("./routes/userRoute");
const food = require("./routes/foodRoute");

app.use("/api/v1/user", user);
app.use("/api/v1", food);

//Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
