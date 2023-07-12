const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const URI = process.env.DATABASE;

const connection = async () => {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connection connecting sucsessfull");
  } catch (error) {
    console.log(error);
    console.log("error in db connection");
  }
};

module.exports = { connection };

// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB Atlas');
//   } catch (error) {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   }
// };
