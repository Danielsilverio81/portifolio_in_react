import gifCode from "../assets/images/Desk - Animation.gif";
import Presentation from "../components/Home/Presentation";

export default function Home() {
  return (
    <section className="
    container flex flex-col flex-wrap md:flex-row md:justify-between 
    md:items-center 2xl:justify-around"
    >
      <Presentation />
     
      <div className={`
      mr-24 mt-5 flex justify-center items-center mb-5 mx-auto p-8 w-3/5 md:w-2/5 md:mr-10 md:mt-20
      2xl:max-w-2xl 2xl:mr-28 bg-bgCardImage rounded-xl animate-rightShow
      dark:bg-navigationColor
      `}
      ><img className="
       w-full max-w-md rounded-lg "
        src={gifCode} alt="gif developer" />
      </div>
    </section>
  )
}
