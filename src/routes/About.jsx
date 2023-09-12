
import CallForAbout from "../components/AboutComponents/BioForAbout";
import ContainerCardsTechnology from "../components/AboutComponents/ContainerCardsTechnology";
import ContainerSoftSkills from "../components/AboutComponents/ContainerSoftSkills";
import ScrollAnimate from "../components/ScrollAnimate";
import ScrollBtn from "../components/ScrollToTop";

export default function About() {

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <CallForAbout />
      <ScrollAnimate animateClass='animate-rightShow'>
      <ContainerCardsTechnology />
      </ScrollAnimate>
      <ScrollAnimate animateClass='animate-leftShow'>
      <ContainerSoftSkills />
      </ScrollAnimate>
      <ScrollBtn />
    </section>
  );
}
