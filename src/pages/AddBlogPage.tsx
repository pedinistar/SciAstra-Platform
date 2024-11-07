import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook to navigate to different routes

const AddBlogPage = () => {
  // State to handle form data
  const [newBlog, setNewBlog] = useState({
    title: "",
    imageUrl: "",
    description: "",
    date: "",
  });

  const navigate = useNavigate(); // Hook to navigate after form submission

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        // alert("Blog added successfully");
        setNewBlog({ title: "", imageUrl: "", description: "", date: "" });
        navigate("/blogs"); // Redirect to the main blog page after adding
      } else {
        // alert("Failed to add blog");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      // alert("Failed to add blog");
    }
  };

  return (
    <section className="add-blog w-full min-h-[84.1vh] px-10 py-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Add a New Blog</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl p-4 bg-white shadow-md rounded-lg mt-5"
      >
        <h3 className="text-2xl font-semibold mb-4">New Blog Form</h3>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newBlog.imageUrl}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          value={newBlog.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={newBlog.date}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2 px-5 mt-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg font-semibold transition duration-200"
        >
          Add Blog
        </button>
      </form>
    </section>
  );
};

export default AddBlogPage;
