import propTypes from "prop-types";

ContactsLinks.propTypes = {
  linkText: propTypes.string,
  text: propTypes.string,
  icon: propTypes.string,
  hover: propTypes.string
};

export default function ContactsLinks({ linkText, text, icon, hover }) {
  return (
    <div>
      <button
        className={`w-40 md:w-48 p-2 mt-6 md:ml-60 rounded-md bg-white dark:bg-primaryColor 
        text-black  border-2 border-black 
        ${hover}`}>
        <a href={linkText}
        className="flex items-center justify-center gap-2" 
        target="_blank" 
        aria-label={text} 
        rel="noreferrer">
          {text} {icon}
        </a>
      </button>
    </div>
  );
}
