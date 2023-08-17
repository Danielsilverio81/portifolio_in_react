import { GiHamburgerMenu } from "react-icons/gi"; 
import { AiFillContacts } from "react-icons/ai";  
import { BsFillRocketTakeoffFill } from "react-icons/bs"; 
import { BsFillPersonFill } from "react-icons/bs"; 
import { AiTwotoneHome } from "react-icons/ai"; 
import { NavLink } from "react-router-dom"
import { useState } from "react";
import MenuToogle from "./MenuToogle";

export default function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = () => {
    !menuIsOpen ? setMenuIsOpen(true) : setMenuIsOpen(false)
  }

  return (
    <header className="
    bg-navigationColor flex h-fit w-full md:h-20"
    >
       <button 
       onClick={handleMenu}
      className="
      flex h-fit ml-5 my-5 justify-center md:hidden
      active:bg-emerald-400"
    >
        <GiHamburgerMenu />
    </button>

        <div className={`hidden p-4 md:flex flex-col w-full md:items-center md:flex-row md:justify-between`}>
          <div className="mt-2 mb-2 mr-20 md:ml-16 md:mr-2">
              <NavLink to={'/'}><AiTwotoneHome size={30} className="text-linkColor" /></NavLink>
          </div>
          <nav>
                  <ul className="
                   flex flex-col text-sm md:text-lg text-linkColor md:flex-row md:mr-16 md:gap-11">
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer" to={'/about'}><BsFillPersonFill />Sobre</NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer fill-linkColor" to={'/projects'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
                    </li>
                    <li>
                      <NavLink className="flex items-center gap-1 pb-2 cursor-pointer fill-linkColor" to={'/contacts'}><AiFillContacts />Contatos</NavLink>
                    </li>
                  </ul>
          </nav>
        </div>
        <div className={`${!menuIsOpen ? 'opacity-0 top-[-190px]': 'opacity-100 top-[53px]'}
        absolute bg-slate-800 w-full p-4 transition-all delay-75 ease-in duration-500`}>
          <MenuToogle/>
        </div>
    </header>
  )
}
