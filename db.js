const mongoose = require("mongoose");

async function mongodbConnection() {
  // Connection URI for MongoDB Atlas
  const uri = "mongodb+srv://pratham:U9VxGNAMqH0Tz7AI@cluster0.y8jgg3k.mongodb.net/chatjpk?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
}

module.exports = mongodbConnection;