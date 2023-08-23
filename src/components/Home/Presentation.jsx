import { AiFillGithub,  AiFillLinkedin } from "react-icons/ai"; 
import BtnDownload from "./BtnDownload";

const contactsLink = `w-8 h-8 md:w-10 md:h-10 bg-bgCardImage cursor-pointer 
rounded-full flex items-center justify-center mt-2 ml-6`

export default function Presentation() {
  return (
    <div className="
    ml-10 mt-10 md:ml-10 md:mt-20 2xl:ml-32 2xl:mt-28 md:w-96 
  text-fontColor [text-shadow:_2px_1px_1px_#4D3F8F] w-fit
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
     <BtnDownload />
     
     <section className="flex gap-x-5">
       <div className={`${contactsLink}`}>
         <a href="" target="_blank">
           <AiFillLinkedin size={29} />
         </a>
       </div>
       <div className={`${contactsLink}`}>
         <a href="" target="_blank">
           <AiFillGithub size={30} />
         </a>
       </div>
     </section>
   </div>
  )
}


