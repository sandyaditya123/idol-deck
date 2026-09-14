import { useState } from "react";
import defaultImage1 from "../assets/default-image.jpg";

const DEFAULT_IMAGE = defaultImage1;

export default function Card({ image, name, role }) {
  const [img, setImg] = useState(image || DEFAULT_IMAGE);

  return (
    <div className="w-75 rounded-xl bg-white pb-4 text-center shadow-md/45">
      <img
        className="rounded-t-xl"
        src={img}
        alt={name}
        onError={() => setImg(DEFAULT_IMAGE)}
      />
      <h1 className="mt-2.5 text-lg/relaxed font-semibold">{name}</h1>
      <p className="font-medium text-gray-600">{role}</p>
    </div>
  );
}
