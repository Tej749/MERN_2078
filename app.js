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

// create (C)
app.post("/blog", upload.single("image"), async (req, res) => {
  const { faculty, course, mentor } = req.body; // text for data

  const filename = req.file.filename; // multipart / form-data

  console.log(req.body);
  console.log(filename);
  console.log(req.file);

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

// GET Operation
app.get("/blog", async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({
    msg: "Blog fetch successfully",
    data: blogs,
  });
});

// single get api
app.get("/blog/:id", async (req, res) => {
  // const id = req.params.id
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.status(200).json({
    msg: "Single Blog fetch successfully",
    data: blog,
  });
});

app.use(express.static("./storage"));

app.listen(process.env.PORT, () => {
  console.log("Your nodejs project has been started....");
});
