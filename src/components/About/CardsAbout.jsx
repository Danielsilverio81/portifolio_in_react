import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const hoverLinkCard = `hover:scale-110 hover:text-teal-300 dark:hover:text-black 
  hover:[box-shadow:_4px_4px_4px_#4D3F8F]`;

const cardContainerStyle = `w-40 h-48 p-1 text-linkColor mb-32 relative bg-bgCardImage
dark:bg-teal-200 rounded-md transition-colors ${hoverLinkCard} border-2 border-black`;

const iconsCardsStyle = `w-fit bg-amber-300 p-5 border-2 border-linkColor dark:border-gray-800
rounded-md mx-auto relative top-2`;

const textCardStyle = "text-center text-sm p-1 mt-2";



export default function CardsAbout() {
  return (
    <>
    <div
        className="
      grid auto-rows-auto grid-cols-3 gap-6
      mx-auto
      "
      >
        <div
          className={`
        ${cardContainerStyle}
        `}
        >
          <div className={`${iconsCardsStyle}`}>
            <TbCertificate size={50} />
          </div>
          <p className={`${textCardStyle}`}>
            Mais de <strong className="text-blue-800"> 00 </strong>
            Horas de aulas praticas
          </p>
        </div>
        <div
          className={`
        ${cardContainerStyle}
        `}
        >
          <div className={`${iconsCardsStyle}`}>
            <FaGraduationCap size={50} />
          </div>
          <p className={`${textCardStyle}`}>
            Formado em Analise e Desenvolvimento de Sistemas
          </p>
        </div>
        <div
          className={`
        ${cardContainerStyle}
        `}
        >
          <div className={`${iconsCardsStyle}`}>
            <FaLaptopCode size={50} />
          </div>
          <p className={`${textCardStyle}`}>
            a 1 ano Desenvolvo projetos próprios e de estudo
          </p>
        </div>
      </div>
    </>
  )
}
