import { AiFillGithub,  AiFillLinkedin, AiOutlineDownload } from "react-icons/ai"; 
import gifCode from "../assets/images/Desk - Animation.gif";

const contactsLink = 'w-5 h-5'

export default function Home() {
  return (
    <section className="
    w-full flex flex-col flex-wrap md:flex-row md:justify-between 
    md:items-center 2xl:justify-around"
    >
      <div className="
       ml-10 mt-10 md:ml-10 md:mt-20 2xl:ml-32 2xl:mt-28 md:w-96 
     text-fontColor [text-shadow:_2px_1px_1px_#4D3F8F]
     dark:text-lightBg
     "
      >
        <p className="
            mt-3 md:text-4xl font-bold"
        ><span className="
           text-3xl md:text-6xl"
        >O</span>lá sou
        </p>
        <h1><strong className="
        text-3xl md:text-7xl"
        >Daniel Silverio</strong></h1>

        <h2 className="
            text-2xl md:text-4xl mb-3 font-bold text-titleColor dark:text-emerald-400 
            [text-shadow:_2px_1px_1px_#415A77] animate-leftShow"
        >Frontend Developer.</h2>
        <p className="
        mb-2 md:text-2xl font-bold
        "
        >O dev que você estava Buscando</p>
        <a href="/src/pdf/Currículo Básico profissional neutro azul e branco (1).pdf" download>
          <button className="
          w-fit p-2 h-auto bg-bgCardImage text-zinc-100 animate-pulse rounded-2xl flex
          items-center justify-center gap-1
          ">Download Currículo <AiOutlineDownload size={20} /> </button>
        </a>
        <section className="flex gap-x-5">
          <div className={`${contactsLink}`}>
            <a href="" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
          <div className={`${contactsLinks}`}>
            <a href="" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </section>
      </div>
      <div className={`
      flex justify-center items-center mb-5 mx-auto p-8 w-3/5 md:w-2/5 md:mr-10 md:mt-20
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
