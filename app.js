require("dotenv").config();
const express = require("express");
const connectDatabase = require("./database");
const Blog = require("./model/blogModel");
const app = express();
app.use(express.json());

connectDatabase();

app.get("/", (req, res) => {
  // call back function
  res.send("Welcome to Home Page....");
});

app.get("/blog", (req, res) => {
  res.status(200).json({
    msg: "This is Blog Page today we face lots of challenges maintaing error code Shiristi...",
  });
});

app.post("/blog", (req, res) => {
  console.log(req.body)
  res.status(200).json({
    msg: "Post API hit successfully....",
  });
});







app.listen(process.env.PORT, () => {
  console.log("Your nodejs project has been started....");
});
