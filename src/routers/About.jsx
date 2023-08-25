import { AiOutlineArrowDown } from "react-icons/ai"; 
import { TbCertificate } from "react-icons/tb"; 
import photo from "./../assets/images/DanielPerfil.png";

const hoverLinkCard = 'hover:scale-110 hover:text-black hover:rotate-1 hover:[box-shadow:_4px_4px_4px_#4D3F8F]';
const cardStyle = `w-40 h-48 text-linkColor mb-32 grid place-content-center bg-bgCardImage
dark:bg-teal-200 rounded-md transition-colors ${hoverLinkCard} border border-black`
export default function About() {
  return (
    <section className="container flex sm:flex-wrap items-center justify-center">
      <div className="
       w-full min-h-screen
      ">
      <div className="
       flex sm:flex-col md:flex-row items-center justify-center
      ">
        <div className="
          w-1/4 h-auto xl:mt-16 md:w-64 md:ml-24
        ">
          <img className="w-full" src={photo} alt="" />
        </div>
          <p className="
          font-bold text-[40px] text-fontColor dark:text-lightBg w-[598px] 
          ml-5 mt-8 md:mt-36 xl:mt-56
          ">
            A vontade e criatividade que faltava para realizar o seu projeto.
          </p>
      </div>
      <div className="flex items-center justify-center mt-10 mb-16">
        <span className="text-xl font-bold mr-4 text-fontColor  dark:text-lightBg">
          Sobre mim
        </span>
        <div className="
        w-fit h-auto rounded-full p-1 animate-bounce bg-bgCardImage dark:bg-teal-400
        text-white dark:text-slate-950
        ">
          <AiOutlineArrowDown size={30} />
        </div>
      </div>
      </div>
      <div className="
      grid grid-rows-1 grid-cols-3 gap-3 place-content-center
      ">
        <div className={`
        ${cardStyle}
        `}>
          <div className="
          w-fit bg-amber-300 p-5 border-2 border-linkColor dark:border-gray-800 rounded-md mx-auto
          ">
            <TbCertificate size={50} />
          </div>
          <p className="
          text-center p-1
          ">
            Mais de <strong className="text-blue-800">00</strong> Horas de aulas praticas
          </p>
        </div>
        <div className={`
        ${cardStyle}
        `}>
          <div className="
          w-fit bg-amber-300 p-5 border-2 border-linkColor dark:border-gray-800 rounded-md mx-auto
          ">
            <TbCertificate size={50} />
          </div>
          <p className="
          text-center p-1
          ">
            Mais de <strong className="text-blue-800">00</strong> Horas de aulas praticas
          </p>
        </div>
        <div></div>
      </div>
      <section>
        <h2 className="">Minhas Habilidades</h2>
      </section>
    </section>
  );
}
