import { BiArrowToTop } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // This effect listens to scroll events and updates the 'visible' state accordingly.
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={scrollToTop} className={`fixed w-8 h-auto right-4 bottom-8 z-10`}>
        <div
          className={`${
            visible ? "opacity-1" : "opacity-0"
          } bg-darkBgColor text-white border border-red-400 p-1 rounded-full animate-bounce`}
        >
          <BiArrowToTop size={20} />
        </div>
      </button>
    </>
  );
}
