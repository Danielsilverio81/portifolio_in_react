import { BsFillPersonFill } from "react-icons/bs"; 
import { AiTwotoneHome } from "react-icons/ai"; 
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="
    h-20 w-full flex items-center justify-between bg-navigationColor"
    >
        <div className="mt-6 ml-16 h-12 w-12">
            <AiTwotoneHome size={40} className="text-linkColor" />
        </div>
        <nav className="
            flex gap-11 mt-8 mr-16 text-lg text-linkColor">
                <Link className="flex items-center" to={'/about'}><BsFillPersonFill />Sobre</Link>
                <Link className="flex items-center" to={'/projects'}><BsFillPersonFill />Sobre</Link>
                <li>Contatos</li>
        </nav>
    </div>
  )
}
