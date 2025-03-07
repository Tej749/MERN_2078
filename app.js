const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  // call back function
  res.send("Welcome to Home Page....");
});

app.get("/blog", (req, res) => {
  res.status(200).json({
    msg: "This is Blog Page...",
  });
});

app.listen(3000, () => {
  console.log("Your nodejs project has been started....");
});
