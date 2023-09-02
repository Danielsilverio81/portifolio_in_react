import GifAnimate from "../components/Home/GifAnimateHome";
import Presentation from "../components/Home/PresentationHome";


export default function Home() {
  return (
    <section
    
     className="
    w-full md:h-[calc(100vh-56px)] flex sm:flex-col flex-wrap md:flex-row md:justify-between md:bg-homeBgImage
    md:items-center 2xl:justify-around bg-no-repeat bg-cover bg-right-top bg-none"
    >
      <Presentation />
      <GifAnimate />
    </section>
  )
}
