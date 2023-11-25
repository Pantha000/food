const app = require("./app");
const dotenv = require("dotenv");
const conncetDatabase = require("./config/database");
const Cloudinary = require("cloudinary");

//DOT ENV
dotenv.config({ path: "backend/config/config.env" });

//Database Connection
conncetDatabase();

//Cloudinary
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Server Run
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection Error
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  process.exit(1);
});

//Uncaught Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  process.exit(1);
});
