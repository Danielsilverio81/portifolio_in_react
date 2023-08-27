import GifAnimate from "../components/Home/GifAnimateHome";
import Presentation from "../components/Home/PresentationHome";

export default function Home() {
  return (
    <section className="
    w-full h-full flex sm:flex-col flex-wrap md:flex-row md:justify-between 
    md:items-center 2xl:justify-around"
    >
      <Presentation />
      <GifAnimate />
    </section>
  )
}
