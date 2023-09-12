import gifCode from "/images/Desk - Animation.gif";

export default function GifAnimate() {
  return (
    <div
      className={`
    mr-24 mt-5 flex justify-center items-center mb-5 mx-auto p-3 md:p-8 w-3/5 md:w-2/5 md:mr-10 md:mt-20
    2xl:max-w-2xl 2xl:mr-28 bg-darkBgColor rounded-xl 
    dark:bg-navigationColor
    `}
    >
      <img
        className="
     w-full h-auto object-cover rounded-lg "
        src={gifCode}
        alt="gif developer"
      />
    </div>
  );
}
