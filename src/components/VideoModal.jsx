import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  //for downloaded video
  const isMyVid = (url) => {
    return url.endsWith('.mp4');
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="aspect-video">
            {isMyVid(videoUrl) ? (
              <video
                src={videoUrl}
                title={title}
                className="w-full h-full"
                controls 
                autoPlay 
                loop 
                muted 
              >
                Your browser does not support the video tag.
              </video>
            ) : (       
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;