require("dotenv").config();
const express = require("express");
const connectDatabase = require("./database");
const Blog = require("./model/blogModel");

const { storage, multer } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());

storage;

connectDatabase();
// Read (R)
app.get("/", (req, res) => {
  // call back function
  res.send("Welcome to Home Page....");
});

app.get("/blog", (req, res) => {
  res.status(200).json({
    msg: "This is Blog Page today we face lots of challenges maintaing error code Shiristi...",
  });
});

// create (C)
app.post("/blog", upload.single("image"), async (req, res) => {
  const { faculty, course, mentor } = req.body; // text for data

  const filename = req.file.filename; // multipart / form-data

  console.log(req.body);

  if (!faculty || !course || !mentor) {
    return res.status(400).json({
      msg: "Sorry..!! Please enter complete datas....",
    });
  }
  await Blog.create({
    faculty: faculty,
    course: course,
    mentor: mentor,
    image: filename,
  });

  res.status(200).json({
    msg: "Post API hit successfully....",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Your nodejs project has been started....");
});
