import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/Blogs/BlogCard";

type Blog = {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs from the backend
  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      setBlogs(data); // Set the fetched blogs to state
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []); // Empty array means this runs only once when the component mounts

  // Delete Blog function
  const handleDelete = async (blogId) => {
    console.log("Attempting to delete blog with ID:", blogId); // Debug log
    try {
      const url = `http://localhost:5000/api/blogs/${blogId}`;
      console.log("DELETE URL:", url); // Debug log to verify URL
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
        alert("Blog deleted successfully");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to delete blog"}`);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  const handleEdit = (blogId: string) => {
    // Your edit logic
  };

  return (
    <section className="blog w-full min-h-fit px-10 py-5 flex flex-col items-center">
      <div className="headings text-center mb-10 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Our Latest Blogs</h1>
        <h3 className="text-[#FF2712] font-semibold text-lg mb-2">
          Stay updated with the latest from SciAstra
        </h3>
      </div>

      <Link to="/add-blog">
        <button className="w-fit py-2 px-5 mt-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg font-semibold transition duration-200">
          Add New Blog
        </button>
      </Link>

      <div className="blog w-full max-w-6xl mt-10">
        <div className="blogs-container">
          {blogs.length > 0 ? (
            blogs
              .slice()
              .reverse()
              .map((blog) => (
                <BlogCard
                  key={blog._id}
                  _id={blog._id}
                  title={blog.title}
                  imageUrl={blog.imageUrl}
                  description={blog.description}
                  date={blog.date}
                  onEdit={() => handleEdit(blog._id)}
                  onDelete={() => handleDelete(blog._id)}
                />
              ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
