const express = require("express");
const { Contact } = require("../schema/dbscheema");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!email || !message) {
      res.status(422).json({ message: "plz enter input fields" });
    }

    const userdata = await new Contact({ name, email, message });

    if (userdata) {
      await userdata.save();
      res.status(200).json({ message: "message submit successfull" });
    } else {
      res.status(422).json({ message: "some thing is wrong plz try again" });
    }
  } catch (error) {
    console.log(error);
    console.log("error in contect route");
  }
});

module.exports = { router };

// contactRoutes:
