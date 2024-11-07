import BlogCard from "./BlogCard";
// import blogData from "../../data/blogs.json";
import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleEdit = () => {
    console.log("Edit Code");
  };

  const handleDelete = () => {
    console.log("Delete Code");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            imageUrl={blog.imageUrl}
            description={blog.description}
            date={blog.date}
            onEdit={handleEdit} // Pass a function for edit
            onDelete={handleDelete} // Pass a function for delete
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
