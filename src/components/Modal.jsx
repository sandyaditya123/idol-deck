import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isOpen,
  onClose,
  group,
  name,
  role,
  description,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const preventDefault = (e) => {
      e.preventDefault();
    };

    const preventDefaultForScrollKeys = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventDefaultForScrollKeys);

    return () => {
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventDefaultForScrollKeys);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[3px]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
