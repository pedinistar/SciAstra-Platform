import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-500 w-full text-white px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">SciAstra</h1>
      <div className="links flex gap-5">
        <Link
          to="/blogs"
          className="text-lg font-medium hover:text-gray-300 transition-all duration-200"
        >
          Blogs
        </Link>
        <Link
          to="/"
          className="text-lg font-medium hover:text-gray-300 transition-all duration-200"
        >
          Courses
        </Link>
      </div>
    </header>
  );
};

export default Header;
