import { AiOutlineArrowDown } from "react-icons/ai";
import photo from "../../assets/images/myPhoto.png";
import ContainerCardsAbout from "./ContainerCardsAbout";

export default function CallForAbout() {
  return (
    <div
      className="
      w-full md:min-h-screen mb-10 md:mb-0 mx-auto
      "
    >
      <div className="flex items-center justify-center my-10">
        <span
          className="
      text-xl font-bold mr-4 text-fontColor  dark:text-secondaryColor
      "
        >
          Sobre mim
        </span>
        <div
          className="
    w-fit h-auto rounded-full p-1 animate-bounce bg-darkBgColor dark:bg-teal-400
  text-white dark:text-slate-950
    "
        >
          <AiOutlineArrowDown size={30} />
        </div>
      </div>
      <div
        className="
       w-full h-fit mx-auto flex flex-col md:flex-row 
      items-start justify-center pb-10
  "
      >
        <div
          className="
      w-48 h-auto bg-teal-300 pr-5 pt-2 md:w-3/4 md:ml-28 rounded-r-3xl
      border border-black
    "
        >
          <img className="w-full h-full" src={photo} alt="" />
        </div>
        <div>
          <p
            className="
                sm:text-[18px] md:text-2xl text-fontColor dark:text-secondaryColor md:w-[500px] 
                sm:w-80 ml-4 xl:mt-56 [text-shadow:_1px_1px_2px_black]
                "
          >
            A vontade e criatividade que faltava para realizar o seu projeto.
          </p>
          <h2
            className="
          ml-6 my-3 text-xl text-fontColor dark:text-secondaryColor
          "
          >
            Bio:
          </h2>
          <p className="
          text-md text-fontColor dark:text-secondaryColor ml-4
          ">
            Desenvolvedor Front end, apaixonado por tecnologia e sempre pensando
            no entretenimento e usabilidade, buscando criar soluções
            simples, sofisticadas e com foco no usuário final. Procurando sempre novos
            conhecimentos e aprimorar as habilidades que ja possuo.
          </p>
        </div>
      </div>
        <ContainerCardsAbout />
    </div>
  );
}
