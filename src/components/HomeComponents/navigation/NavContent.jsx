import { useState } from "react";
import { AiFillContacts, AiTwotoneHome } from "react-icons/ai";
import { BsFillRocketTakeoffFill, BsFillPersonFill  } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const hoverLink = 'hover:scale-110 hover:text-teal-200';
const linkStyle = 'flex items-center gap-1 pb-2 cursor-pointer'
const activeLink = 'flex items-center gap-1 pb-2 cursor-pointer text-teal-400 scale-110'
const homeStyle = 'mt-2 mb-2 md:ml-16 md:mr-2 text-primaryColor dark:text-slate-300'

export default function NavContent() {
  const [aboutActive, setAboutActive] = useState(false)
  const [projectsActive, setProjectsActive] = useState(false)
  const [contactsActive, setContactsActive] = useState(false)
  const [homeActive, setHomeActive] = useState(false)

  const handleChangeAboutColor = () => {
    setAboutActive(true)
    setContactsActive(false)
    setProjectsActive(false)
    setHomeActive(false)
  }

  const handleChangeProjectsColor = () => {
    setProjectsActive(true)
    setAboutActive(false)
    setContactsActive(false)
    setHomeActive(false)
  }

  const handleChangeContactsColor = () => {
    setContactsActive(true)
    setAboutActive(false)
    setProjectsActive(false)
    setHomeActive(false)
  }

  const handleChangeDefaultColor = () => {
    setHomeActive(true)
    setContactsActive(false)
    setAboutActive(false)
    setProjectsActive(false)
  }
  return (
    <>
     <div className={`
     ${!homeActive ? homeStyle : homeStyle}
     `}>
          <NavLink
          onClick={handleChangeDefaultColor}
           to={'/'}><AiTwotoneHome size={30} className={`
           ${hoverLink}
          `}/></NavLink>
        </div>
    <nav>
          <ul className="
                   flex items-center text-sm md:text-lg text-primaryColor dark:text-slate-300
                    md:mr-16 gap-4 sm:gap-11">
            <li>
              <NavLink 
              onClick={handleChangeAboutColor}
              className={`
              ${!aboutActive ? linkStyle : activeLink} ${hoverLink}
              `} 
               to={'/about'}><BsFillPersonFill />Sobre</NavLink>
            </li>
            <li>
              <NavLink 
              onClick={handleChangeProjectsColor}
              className={`
              ${!projectsActive ? linkStyle : activeLink} ${hoverLink}
              `} to={'/projects'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
            </li>
            <li>
              <NavLink 
              onClick={handleChangeContactsColor}
              className={`
              ${!contactsActive ? linkStyle : activeLink} ${hoverLink}
              `} to={'/contacts'}><AiFillContacts />Contatos</NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}
