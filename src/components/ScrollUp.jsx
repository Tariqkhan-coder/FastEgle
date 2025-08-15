import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollUp() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-400 text-white p-3 rounded-xl shadow-lg hover:bg-orange-500 transition-colors duration-300 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}