import React from 'react'
import propTypes from 'prop-types'
import { GiHamburgerMenu } from "react-icons/gi";

Botton.propTypes = {
    onclick: propTypes.func,
    active: propTypes.bool,
    children: propTypes.object
}
export default function Botton({onclick, active, children}) {
  return (
    <>
     <button 
       onClick={onclick}
      className={`
      flex h-fit ml-5 my-5 justify-center md:hidden
      ${active ? 'bg-red-300' : 'bg-zinc-400'}`}
      
    >
        {children}
    </button>
    </>
  )
}
