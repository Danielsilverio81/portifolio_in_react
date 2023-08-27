import { FiX } from "react-icons/fi"; 
import { AiOutlineMenu, AiFillContacts, AiTwotoneHome } from "react-icons/ai"; 
import { BsFillRocketTakeoffFill, BsFillPersonFill  } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuToogle from "./MenuToogle";
import Button from "./Button";
import ChoiceThemeBtn from "../ChoiceThemeBtn";

let active;
const hoverLink = 'hover:scale-110 hover:text-teal-200';
const linkStyle = 'flex items-center gap-1 pb-2 cursor-pointer';

export default function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = () => {
    if (!menuIsOpen) {
      active = true
      setMenuIsOpen(true)
    } else {
      active = false
      setMenuIsOpen(false)
    }
  }

  return (
    <header className="
    bg-navigationColor flex justify-between h-fit w-full md:h-20 duration-500
     dark:bg-bgCardImage border-2 border-navigationColor dark:border-2 dark:border-slate-600"
    >
      <div className={`
      hidden p-4 md:flex flex-col w-full md:items-center md:flex-row md:justify-between
      `}>
        <div className="
        mt-2 mb-2 mr-20 md:ml-16 md:mr-2 text-linkColor dark:text-slate-300
        ">
          <NavLink to={'/'}><AiTwotoneHome size={30} className={`
           ${hoverLink}
          `}/></NavLink>
        </div>
        <nav>
          <ul className="
                   flex flex-col text-sm md:text-lg text-linkColor dark:text-slate-300 md:flex-row md:mr-16 md:gap-11">
            <li>
              <NavLink className={`
              ${linkStyle} ${hoverLink}
              `} 
               to={'/about'}><BsFillPersonFill />Sobre</NavLink>
            </li>
            <li>
              <NavLink className={`
              ${linkStyle} ${hoverLink}
              `} to={'/projects'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
            </li>
            <li>
              <NavLink className={`
              ${linkStyle} ${hoverLink}
              `} to={'/contacts'}><AiFillContacts />Contatos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Button onclick={handleMenu} active={active}>
        {!menuIsOpen ? (
          <>
          <AiOutlineMenu />
          </>
        ): (
          <>
          <FiX />
          </>
        )}
      </Button>
      <div className={`${!menuIsOpen ? 'opacity-0 top-[-190px]' : 'opacity-100 top-[56px]'} md:hidden
        absolute bg-slate-800 w-full p-4 transition-all delay-75 ease-in duration-500`}>
        <MenuToogle />
      </div>
        <ChoiceThemeBtn/>
    </header>
  )
}
