import { AiOutlineDownload } from "react-icons/ai";

export default function BtnDownload() {
  return (
    <div className="w-48 mt-5 mb-5">
    <a href="/src/pdf/Currículo Básico profissional neutro azul e branco (1).pdf" download>
      <button className="
      p-2 h-auto bg-darkBgColor text-zinc-100 animate-pulse rounded-2xl flex
      items-center justify-center gap-1
      ">Download Currículo <AiOutlineDownload size={20} /> </button>
    </a>
  </div>
  )
}
