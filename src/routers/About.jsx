
import CallForAbout from "../components/About/CallForAbout";
import ContainerCardsTechnology from "../components/About/ContainerCardsTechnology";
import ContainerSoftSkills from "../components/About/ContainerSoftSkills";
import ScrollAnimate from "../components/ScrollAnimate";

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
      
    </section>
  );
}
