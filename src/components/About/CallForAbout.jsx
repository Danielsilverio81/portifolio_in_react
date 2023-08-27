import { AiOutlineArrowDown } from "react-icons/ai";
import photo from "../../assets/images/myPhoto.png";

export default function CallForAbout() {
  return (
    <div
      className="
   w-full min-h-screen mx-auto
  "
    >
      <div
        className="
      bg-heroAbout dark:heroAbout w-[90%] mx-auto h-fit flex flex-col md:flex-row 
      items-center justify-center pb-16 rounded-b-3xl
  "
      >
        <div
          className="
      w-1/4 h-auto bg-teal-300 pr-5 pt-3 xl:mt-16 md:w-64 md:ml-28 rounded-r-3xl border-2 border-black
    "
        >
          <img className="w-full h-full" src={photo} alt="" />
        </div>
        <p
          className="
      font-bold text-[40px] text-fontColor dark:text-lightBg w-[500px] 
      ml-5 mt-8 md:mt-32 xl:mt-56 [text-shadow:_1px_1px_2px_black]
      "
        >
          A vontade e criatividade que faltava para realizar o seu projeto.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <span
          className="
      text-xl font-bold mr-4 text-fontColor  dark:text-lightBg
      "
        >
          Sobre mim
        </span>
        <div
          className="
    w-fit h-auto rounded-full p-1 animate-bounce bg-bgCardImage dark:bg-teal-400
    text-white dark:text-slate-950
    "
        >
          <AiOutlineArrowDown size={30} />
        </div>
      </div>
    </div>
  );
}
