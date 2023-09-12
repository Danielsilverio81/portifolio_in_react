import { AiFillContacts, AiTwotoneHome } from "react-icons/ai";
import { BsFillRocketTakeoffFill, BsFillPersonFill  } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

const hoverLink = 'hover:scale-110 hover:text-teal-200';
const linkStyle = 'flex items-center gap-1 pb-2 cursor-pointer'
const homeStyle = 'mt-2 mb-2 md:ml-16 md:mr-2 text-primaryColor dark:text-slate-300'
const activeLinkStyle = 'text-teal-200'; 

export default function NavContent() {
  const location = useLocation();

  return (
    <>
     <div className={`
     ${homeStyle}
     `}>
          <NavLink
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
              className={`
              ${linkStyle} ${hoverLink} ${location.pathname === '/sobre' ? activeLinkStyle : ''} 
              `} 
               to={'/sobre'}><BsFillPersonFill />Sobre</NavLink>
            </li>
            <li>
              <NavLink
              className={`
              ${linkStyle} ${hoverLink} ${location.pathname === '/projetos' ? activeLinkStyle : ''} 
              `} to={'/projetos'}><BsFillRocketTakeoffFill /> Projetos</NavLink>
            </li>
            <li>
              <NavLink 
              className={`
              ${linkStyle} ${hoverLink} ${location.pathname === '/contatos' ? activeLinkStyle : ''} 
              `} to={'/contatos'}><AiFillContacts />Contatos</NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}