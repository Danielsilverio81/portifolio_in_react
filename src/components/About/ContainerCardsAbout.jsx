import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import CardsAbout from "./Cards/CardsAbout";

export default function ContainerCardsAbout() {
  return (
    <div
    className="
    grid auto-rows-auto grid-cols-3 gap-10 mx-auto
"
  >
    <CardsAbout
      icon={<TbCertificate size={50} />}
      text={"Mais de 00 Horas de aulas praticas"}
    />
    <CardsAbout
      icon={<FaGraduationCap size={50} />}
      text={"Formado em Analise e Desenvolvimento de Sistemas"}
    />
     <CardsAbout
      icon={<FaLaptopCode size={50} />}
      text={"A 1 ano Desenvolvo projetos próprios e de estudo"}
    />
  </div>
  )
}
