import { Link } from "react-router-dom";
import Courses from "../components/Courses/Courses";

const CoursePage = () => {
  return (
    <section className="course w-full min-h-fit px-10 py-10 flex flex-col items-center">
      <div className="headings text-center mb-10">
        <h3 className="text-[#FF2712] font-semibold text-lg mb-2">
          Pick Course As Per Your Area Of Interest
        </h3>
        <h1 className="text-4xl font-bold text-gray-800">Our Top Courses</h1>
      </div>
      <div className="courses w-full max-w-6xl">
        <Courses />
      </div>
      <Link
        to="/"
        className="w-fit py-2 px-5 mt-2 text-white bg-red-500 hover:bg-red-700 rounded-lg font-semibold transition duration-200"
      >
        View More
      </Link>
    </section>
  );
};

export default CoursePage;
