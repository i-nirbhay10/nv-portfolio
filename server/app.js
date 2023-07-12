const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./dbconnaction/connection");
const { router } = require("./router/route");
const app = express();

//configering dotenv

dotenv.config({ path: "./.env" });

// Connect to the database
connection();

// using express.json for reding json data
app.use(express.json());

const port = process.env.PORT;

//using router
app.use(router);

app.listen(port, () => {
  console.log(`app listning on port no : ${port}`);
});
