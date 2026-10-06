import { useState } from "react";
import defaultImage1 from "../assets/default-image.jpg";
import { Heart } from "lucide-react";

const DEFAULT_IMAGE = defaultImage1;

export default function Card({ image, name, role, onClick }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setIsLiked(!isLiked);
  }

  return (
    <div
      onClick={onClick}
      className="group relative w-75 overflow-hidden rounded-xl bg-white pb-3 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:shadow-md/30"
    >
      <div className="overflow-hidden">
        <img
          className="transition-transform duration-300 group-hover:scale-110"
          src={image || DEFAULT_IMAGE}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGE;
          }}
        />
      </div>

      <h1 className="mt-3 text-lg/relaxed font-semibold transition-colors duration-300 group-hover:text-pink-600">
        {name}
      </h1>
      <p className="font-medium text-gray-600 transition-colors duration-300 group-hover:text-rose-400">
        {role}
      </p>
      <button
        className="absolute bottom-4 left-4 rounded-full p-2 transition-transform duration-300 hover:scale-110 hover:cursor-pointer active:scale-90"
        onClick={handleClick}
        aria-label="Like"
      >
        <Heart
          className={`h-6 w-6 transition-colors ${isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
        />
      </button>
    </div>
  );
}
