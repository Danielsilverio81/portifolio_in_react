import { AiOutlineArrowDown } from "react-icons/ai"; 
import { TbCertificate } from "react-icons/tb"; 
import photo from "./../assets/images/DanielPerfil.png";

const hoverLinkCard = 'hover:scale-110 hover:text-teal-900 hover:rotate-1 hover:[box-shadow:_4px_4px_4px_#4D3F8F]';

export default function About() {
  return (
    <section className="containerv flex sm:flex-col items-center justify-center">
      <div className="
      flex flex-wrap items-center justify-center w-full min-h-screen
      ">
      <div className="
        w-1/4 mt-10 md:mt-0 xl:mt-16 md:w-64 md:h-64 md:ml-24
      ">
        <img className="w-full" src={photo} alt="" />
      </div>
        <p className="
        font-bold text-[40px] text-fontColor dark:text-lightBg w-[598px] ml-5 md:mt-36 xl:mt-56
        ">
          A vontade e criatividade que faltava para realizar o seu projeto.
        </p>
      <div className="flex  mb-16">
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
      grid grid-rows-1 grid-cols-3 gap-3 w-2/4
      ">
        <div className={`
        w-32 h-48 text-linkColor mb-32 grid place-content-center bg-bgCardImage
         dark:bg-teal-200 rounded-md ${hoverLinkCard}
        `}>
          <div className="
          w-fit p-4 border-2 border-linkColor dark:border-gray-800 rounded-md mx-auto
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
        <div></div>
      </div>
      <section>
        <h2 className="">Minhas Habilidades</h2>
      </section>
    </section>
  );
}
