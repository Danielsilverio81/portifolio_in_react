import propTypes from 'prop-types';

CardsTechnology.propTypes = {
    imageIcon: propTypes.string,
    textCard: propTypes.string
}

const styleContainerCard = `w-32 h-40 md:w-32 md:h-48 m-1 bg-cardsTechnology dark:bg-teal-300 
rounded-md border-2 border-transparent hover:border-2 hover:border-blue-500 mx-auto
hover:bg-orange-400 dark:hover:bg-orange-300 transition-colors duration-300`;
const styleContainerImg = `w-fit h-fit mt-5 flex items-center justify-center p-2 bg-navigationColor 
mx-auto rounded-md`;
const styleTextCard = `text-xs md:text-lg text-center p-2 mx-auto font-bold text-bgCardImage`;

export default function CardsTechnology({ imageIcon, textCard }) {
  return (
    <>
      <div className={`${styleContainerCard}`}>
        <div className={`${styleContainerImg}`}>
            <img className="
            w-16 md:w-20 md:h-20 object-cover
            "
            src={imageIcon} alt={textCard} />
        </div>
        <h3 className={`${styleTextCard}`}>{textCard}</h3>
      </div>
    </>
  );
}
