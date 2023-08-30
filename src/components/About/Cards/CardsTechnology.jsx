import propTypes from 'prop-types';

CardsTechnology.propTypes = {
    imageIcon: propTypes.string,
    textCard: propTypes.string
}

const styleContainerCard = `w-32 h-46 m-1 bg-cardsTechnology dark:bg-teal-300 rounded-md border-2 border-transparent
 hover:border-2 hover:border-blue-500`;
const styleContainerImg = `w-fit h-fit mt-5 flex items-center justify-center p-2 bg-navigationColor 
mx-auto rounded-md`;
const styleTextCard = `text-center p-5 mx-auto font-bold text-bgCardImage`;

export default function CardsTechnology({ imageIcon, textCard }) {
  return (
    <>
      <div className={`${styleContainerCard}`}>
        <div className={`${styleContainerImg}`}>
            <img className="
            w-20 h-20 object-cover
            "
            src={imageIcon} alt="" />
        </div>
        <h3 className={`${styleTextCard}`}>{textCard}</h3>
      </div>
    </>
  );
}
