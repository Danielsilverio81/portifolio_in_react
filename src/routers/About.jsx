import CallForAbout from "../components/About/CallForAbout";
import ContainerCardsTechnology from "../components/About/ContainerCardsTechnology";
import ContainerTable from "../components/About/ContainerTable";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <CallForAbout />
      <ContainerCardsTechnology />
        <ContainerTable />
    </section>
  );
}
