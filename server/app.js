const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./dbconnaction/connection");
const { router } = require("./router/route");
const app = express();

//configering dotenv

dotenv.config({ path: "./.env" });

// Connect to the database
connection();

//requireing and using corse
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// using express.json for reding json data
app.use(express.json());

const port = process.env.PORT || 5000;

//using router
app.use(router);

app.listen(port, () => {
  console.log(`app listning on port no : ${port}`);
});
