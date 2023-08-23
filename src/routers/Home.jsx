import GifAnimate from "../components/Home/GifAnimate";
import Presentation from "../components/Home/Presentation";

export default function Home() {
  return (
    <section className="
    container flex flex-col flex-wrap md:flex-row md:justify-between 
    md:items-center 2xl:justify-around"
    >
      <Presentation />
      <GifAnimate />
    </section>
  )
}
