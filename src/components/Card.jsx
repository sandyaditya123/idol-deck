import { useState } from "react";
import defaultImage1 from "../assets/default-image.jpg";

const DEFAULT_IMAGE = defaultImage1;

export default function Card({ image, name, role, onClick }) {
  const [img, setImg] = useState(image || DEFAULT_IMAGE);

  return (
    <div
      onClick={onClick}
      className="group w-75 overflow-hidden rounded-xl bg-white pb-3 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:cursor-pointer hover:shadow-md/30"
    >
      <img
        className="rounded-t-xl"
        src={img}
        alt={name}
        onError={() => setImg(DEFAULT_IMAGE)}
      />
      <h1 className="mt-3 text-lg/relaxed font-semibold transition-colors duration-300 group-hover:text-pink-600">
        {name}
      </h1>
      <p className="font-medium text-gray-600 transition-colors duration-300 group-hover:text-rose-400">
        {role}
      </p>
    </div>
  );
}
