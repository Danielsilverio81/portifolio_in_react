import { useState } from "react";
import propTypes from "prop-types";

HoverElementsImage.propTypes = {
  text: propTypes.string,
  img: propTypes.string,
  link: propTypes.string,
  repository: propTypes.string,
  defaultImage: propTypes.string,
};

export default function HoverElementsImage({
  text,
  img,
  repository,
  link,
  defaultImage,
}) {
  const [hoverEvent, setHoverEvent] = useState(false);

  const handleMouseEnter = () => {
    setHoverEvent(true);
  };

  const handleMouseLeave = () => {
    setHoverEvent(false);
  };
  return (
    <>
      <div
        className="
    w-full flex items-center justify-center mt-8
    "
      >
        <div
          className="
          w-fit md:w-[480px] md:h-[440px] flex flex-col gap-4 border border-red-400 rounded-md p-2 bg-gray-700
        "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="border-b-2">{text}</p>
          <a
            className="hover:text-teal-300 cursor-pointer transition
         duration-500 ease-in-out w-fit"
            target="_blank"
            rel="noreferrer"
            aria-label={text}
            href={link}
          >
            Deploy
          </a>
          <a
            className="hover:text-blue-400 cursor-pointer transition 
        duration-500 ease-in-out w-fit"
            target="_blank"
            rel="noreferrer"
            aria-label={text}
            href={repository}
          >
            Repositório
          </a>
          <div
            className="
    w-full md:w-[460px] md:h-[285px] rounded-md mx-auto my-2
    "
          >
            <img
              className={`
            ${
              hoverEvent ? "hidden" : "inline"
            } w-[320px] md:w-[460px] md:h-[285px] object-cover rounded-md
            `}
              src={defaultImage}
              alt={text}
              loading="lazy"
            />
            {hoverEvent && (
              <img
                className="
              w-[320px]  md:w-[460px] md:h-[285px] object-cover rounded-md
    "
                src={img}
                alt={text}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
