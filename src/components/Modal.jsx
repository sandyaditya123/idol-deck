import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  group,
  name,
  role,
  description,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white px-4 pt-4 pb-6 text-center shadow-md/30"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="mb-1 text-3xl font-semibold">{group}</h1>
        <h2 className="mb-1.5 text-xl font-medium">
          {name} | {role}
        </h2>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 rounded-full bg-slate-900 px-8 leading-loose font-medium text-white uppercase transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-slate-900/90"
        >
          Close
        </button>
      </div>
    </div>
  );
}
