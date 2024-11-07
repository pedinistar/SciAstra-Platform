import React from "react";

interface Course {
  id: number;
  name: string;
  pictureURL: string;
  description: string;
  duration: string;
  price: number;
}

const CourseCard: React.FC<Course> = ({
  name,
  pictureURL,
  description,
  duration,
  price,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg max-w-xs bg-white flex flex-col justify-between">
      <img src={pictureURL} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm mb-4">
          <span className="text-gray-600">Duration: {duration}</span>
          <span className="text-lg font-bold text-[#FF2712]">
            ${price.toFixed(2)}
          </span>
        </div>
        <button className="w-full py-2 mt-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
