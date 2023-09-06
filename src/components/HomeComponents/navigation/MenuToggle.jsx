import { NavLink } from "react-router-dom";
import { AiFillContacts } from "react-icons/ai";  
import { BsFillRocketTakeoffFill } from "react-icons/bs"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { AiTwotoneHome } from "react-icons/ai"; 


export default function MenuToggle() {
  return (
    <>
          <div className="mt-2 mb-2 mr-20 md:ml-16 md:mr-2">
              <NavLink to={'/'}><AiTwotoneHome size={25} className="text-secondaryColor" /></NavLink>
          </div>
          <nav>
                  <ul className="
                   flex flex-col text-sm md:text-lg text-secondaryColor md:flex-row md:mr-16 md:gap-11">
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer" to={'/about'}><BsFillPersonFill />Sobre</NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer" to={'/projects'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer" to={'/contacts'}><AiFillContacts />Contatos</NavLink>
                    </li>
                  </ul>
          </nav>
    </>
  )
}
