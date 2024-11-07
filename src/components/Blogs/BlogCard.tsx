// BlogCard.tsx
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

interface BlogCardProps {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
  onEdit: () => void;
  onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  imageUrl,
  description,
  date,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="blog-item p-4 bg-white shadow-md mb-6 rounded-lg">
      <h4 className="font-bold text-xl">{title}</h4>
      <img
        src={imageUrl}
        alt={title}
        className="mt-2 w-full h-64 object-cover"
      />
      <p className="mt-2">{description}</p>
      <p className="text-gray-500 mt-2">{date}</p>

      <div className="flex w-full items-center gap-3 justify-end mt-4">
        <button
          onClick={onEdit}
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md shadow-lg"
        >
          <FaPen size={14} />
        </button>
        <button
          onClick={onDelete}
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-3 rounded-md shadow-lg"
        >
          <FaTrash size={14} />
        </button>
        <button className="text-blue-600 hover:underline">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
