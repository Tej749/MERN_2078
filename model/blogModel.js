const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  faculty: {
    type: String,
    unique: true,
  },
  course: {
    type: String,
  },
  mentor: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
