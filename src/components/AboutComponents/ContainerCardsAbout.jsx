import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import CardsAbout from "./Cards/CardsAbout";

export default function ContainerCardsAbout() {
  return (
    <div
    className="
     w-full grid auto-rows-auto grid-cols-2 sm:grid-cols-3 gap-5 mb-2 mx-auto
"
  >
    <CardsAbout
      icon={<TbCertificate size={30} />}
      text={"Mais de 00 Horas de aulas praticas"}
    />
    <CardsAbout
      icon={<FaGraduationCap size={30} />}
      text={"Formado em Analise e Desenvolvimento de Sistemas"}
    />
     <CardsAbout
      icon={<FaLaptopCode size={30} />}
      text={"A 1 ano Desenvolvo projetos próprios e de estudo"}
    />
  </div>
  )
}
