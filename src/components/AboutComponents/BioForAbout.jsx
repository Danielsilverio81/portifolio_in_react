import { AiOutlineArrowDown } from "react-icons/ai";
import photo from "/images/myPhoto.png";
import ContainerCardsAbout from "./ContainerCardsAbout";
const textStyle = `w-[80%] text-md text-fontColor dark:text-secondaryColor ml-4`;
const titleStyles = `font-bold text-fontColor dark:text-secondaryColor`;

const getAge = () => new Date().getFullYear() - 1995;

export default function CallForAbout() {
  return (
    <div
      className="
      w-full mx-auto min-h-screen mb-10 md:mb-0
      "
    >
      <div className="flex items-center justify-center mt-16 mb-3 md:my-3">
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
      items-start justify-center pb-4
  "
      >
        <div
          className="
      w-48 h-auto mx-2 bg-teal-300 pr-5 pt-2 md:w-3/4 md:ml-28 rounded-r-3xl
      border-2 border-black animate-leftShow
    "
        >
          <img className="w-full h-full" src={photo} alt="my photo" />
        </div>
        <div>
          <p
            className="
                mt-2 sm:text-[18px] md:text-2xl text-fontColor dark:text-secondaryColor md:w-[500px] 
                sm:w-80 ml-4 [text-shadow:_1px_1px_2px_black]
                "
          >
            A vontade e criatividade que faltava para realizar o seu projeto.
          </p>
          <h2 className={`ml-4 my-3 text-xl ${titleStyles}`}>Bio:</h2>
          <p className={textStyle}>
            Desenvolvedor Front end, apaixonado por tecnologia e sempre pensando
            no entretenimento e usabilidade, buscando criar soluções simples,
            sofisticadas e com foco no usuário final. Procurando sempre novos
            conhecimentos e aprimorar as habilidades que ja possuo.
          </p>
          <div className={`mt-1 ${textStyle}`}>
            <h3 className={`text-md ${titleStyles}`}>Informações pessoais:</h3>
            <p>Endereço: Matozinhos (Belo Horizonte) Minas Gerais</p>
            <p>Idade: {getAge()} anos</p>
            <p>+ de 9 certificados na Area...</p>
          </div>
        </div>
      </div>
      <ContainerCardsAbout />
    </div>
  );
}
