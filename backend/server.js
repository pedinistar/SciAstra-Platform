const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to handle JSON requests

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/sciastra_db", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Blog Schema
const blogSchema = new mongoose.Schema({
  _id: String,
  title: String,
  imageUrl: String,
  description: String,
  date: String,
});

// Course Schema
const courseSchema = new mongoose.Schema({
  _id: String,
  name: String,
  pictureURL: String,
  description: String,
  duration: String,
  price: Number,
});

const Blog = mongoose.model("Blog", blogSchema);
const Course = mongoose.model("Course", courseSchema);

// Routes
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/blogs", async (req, res) => {
  const { title, imageUrl, description, date } = req.body;

  const newBlog = new Blog({
    _id: new mongoose.Types.ObjectId().toString(),
    title,
    imageUrl,
    description,
    date,
  });

  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Error saving blog:", err);
    res.status(500).send("Error saving the blog");
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
