require("dotenv").config();
const mongoose = require("mongoose");

const connectdb = () => {
  //   console.log("MONGO DB CONNECTED");
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectdb;
