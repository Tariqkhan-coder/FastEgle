import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "../../../components/TechIcon";
import { useEffect, useRef } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const originalStyle = useRef({
    overflow: "",
    position: "",
    width: "",
    height: "",
  });

  useEffect(() => {
    if (isOpen) {
      originalStyle.current = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        width: document.body.style.width,
        height: document.body.style.height,
      };

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    }

    return () => {
      document.body.style.overflow = originalStyle.current.overflow;
      document.body.style.position = originalStyle.current.position;
      document.body.style.width = originalStyle.current.width;
      document.body.style.height = originalStyle.current.height;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm z-[999999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-dark-blue rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border-blue">
              <h3 className="text-white text-xl font-medium">{title}</h3>
              <button
                onClick={onClose}
                className="text-white hover:text-accent transition-colors"
                aria-label="Close modal"
              >
                <TechIcon name="x" className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full opacity-0 transition-opacity duration-700"
                frameBorder="0"
                loading="lazy"
                onLoad={(e) => e.target.classList.remove("opacity-0")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
