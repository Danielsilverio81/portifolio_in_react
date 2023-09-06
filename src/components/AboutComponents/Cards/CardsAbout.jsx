import propTypes from 'prop-types';

const hoverLinkCard = `hover:scale-110 hover:text-blue-500 dark:hover:text-black 
  hover:[box-shadow:_4px_4px_4px_black] dark:hover:[box-shadow:_4px_4px_4px_white]`;

const cardContainerStyle = `w-32 md:w-56 p-1 text-linkColor mb-4 md:mb-32 
relative dark:bg-teal-200 rounded-md transition-colors ${hoverLinkCard} border-2 border-black`;

const iconsCardsStyle = `w-fit bg-amber-300 p-2 border-2 border-linkColor dark:border-gray-800
rounded-md mx-auto relative top-2`;

const textCardStyle = "text-center text-sm p-1 mt-3";

CardsAbout.propTypes = {
    icon: propTypes.object,
    text: propTypes.string
}

export default function CardsAbout({icon, text}) {
  return (
    <>
        <div
          className={`
        ${cardContainerStyle}
        `}
        >
          <div className={`${iconsCardsStyle}`}>
            {icon}
          </div>
          <p className={`${textCardStyle}`}>
          {text}
          </p>
        </div>
    </>
  )
}
