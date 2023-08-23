import gifCode from "../../assets/images/Desk - Animation.gif";

export default function GifAnimate() {
  return (
    <div className={`
    mr-24 mt-5 flex justify-center items-center mb-5 mx-auto p-8 w-3/5 md:w-2/5 md:mr-10 md:mt-20
    2xl:max-w-2xl 2xl:mr-28 bg-bgCardImage rounded-xl 
    dark:bg-navigationColor
    `}
    ><img className="
     w-full max-w-md rounded-lg "
      src={gifCode} alt="gif developer" />
    </div>
  )
}
