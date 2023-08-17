import { AiFillContacts } from "react-icons/ai";  
import { BsFillRocketTakeoffFill } from "react-icons/bs"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { AiTwotoneHome } from "react-icons/ai"; 
import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <div className="
    h-20 md:w-full flex items-center justify-between bg-navigationColor"
    >
        <div className="mt-6 ml-16 h-12 w-12">
            <NavLink to={'/'}><AiTwotoneHome size={40} className="text-linkColor" /></NavLink>
        </div>
        <nav>
                <ul className="
                 flex md:gap-11 mt-8 mr-16 text-lg text-linkColor">
                  <li>
                    <NavLink className="flex items-center" to={'/about'}><BsFillPersonFill />Sobre</NavLink>
                  </li>
                  <li>
                    <NavLink className="flex items-center fill-linkColor" to={'/projects'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
                  </li>
                  <li>
                    <NavLink className="flex items-center fill-linkColor" to={'/contacts'}><AiFillContacts />Contatos</NavLink>
                  </li>
                </ul> 
        </nav>
    </div>
  )
}
