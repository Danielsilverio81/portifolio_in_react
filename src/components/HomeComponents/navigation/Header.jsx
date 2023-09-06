import { FiX } from "react-icons/fi"; 
import { AiOutlineMenu, AiFillContacts, AiTwotoneHome } from "react-icons/ai"; 
import { BsFillRocketTakeoffFill, BsFillPersonFill  } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuToggle from "./MenuToggle";
import Button from "./ButtonToggle";
import ChoiceThemeBtn from "../ChoiceThemeBtn";

const hoverLink = 'hover:scale-110 hover:text-teal-200';
const linkStyle = 'flex items-center gap-1 pb-2 cursor-pointer';

export default function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [activeToggle, setActiveToggle] = useState(false)

  useEffect(() => {
    if (menuIsOpen) {
      setMenuIsOpen(true)
      setActiveToggle(true)
    } else {
      setMenuIsOpen(false)
      setActiveToggle(false)
    }
  }, [menuIsOpen, activeToggle])

  return (
    <header className="
    bg-navigationColor flex justify-between w-full h-14 duration-500
     dark:bg-bgCardImage border-2 border-navigationColor dark:border-2 dark:border-slate-600"
    >
      <div className={`
      hidden p-4 sm:flex flex-col w-full sm:items-center sm:flex-row sm:justify-between
      `}>
        <div className="
        mt-2 mb-2 mr-20 md:ml-16 md:mr-2 text-primaryColor dark:text-slate-300
        ">
          <NavLink to={'/'}><AiTwotoneHome size={30} className={`
           ${hoverLink}
          `}/></NavLink>
        </div>
        <nav>
          <ul className="
                   flex flex-col text-sm md:text-lg text-primaryColor dark:text-slate-300 sm:flex-row md:mr-16 sm:gap-11">
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
      <Button onclick={() => setMenuIsOpen(!menuIsOpen)} active={activeToggle}>
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
        <MenuToggle />
      </div>
        <ChoiceThemeBtn/>
    </header>
  )
}
