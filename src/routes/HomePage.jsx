import GifAnimate from "../components/HomeComponents/GifAnimateHome";
import Presentation from "../components/HomeComponents/PresentationHome";


export default function Home() {
  return (
    <section
    
     className={`
     w-full md:h-[calc(100vh-56px)] flex sm:flex-col flex-wrap flex-row md:justify-between 
     md:bg-[url('/images/backgroundDetail.png')]
     md:items-center 2xl:justify-around bg-no-repeat bg-cover bg-right-top bg-none
     `}
    >
      <Presentation />
      <GifAnimate />
    </section>
  )
}
