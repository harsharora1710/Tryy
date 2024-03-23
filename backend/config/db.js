const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://user:ITARORA12112045@cluster0.hjskvc4.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;




