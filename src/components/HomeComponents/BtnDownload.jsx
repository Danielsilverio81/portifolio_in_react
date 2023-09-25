import { AiOutlineDownload } from "react-icons/ai";

export default function BtnDownload() {
  return (
    <div className="w-48 mt-5 mb-5">
    <a href="/pdf/curriculo.pdf" download>
      <button className="
      h-auto p-1 bg-darkBgColor text-zinc-100 rounded-l-lg flex
      items-center justify-center gap-1 border border-black
      ">Download Currículo 
      <div className="border-l-2 border-blue-800 animate-pulse">
        <AiOutlineDownload size={20} />
      </div> </button>
    </a>
  </div>
  )
}
