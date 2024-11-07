import CourseCard from "./CourseCard";
// import coursesData from "../../data/courses.json";
import { useEffect, useState } from "react";

type Course = {
  _id: string;
  name: string;
  pictureURL: string;
  description: string;
  duration: string;
  price: number;
};

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            name={course.name}
            pictureURL={course.pictureURL}
            description={course.description}
            duration={course.duration}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
