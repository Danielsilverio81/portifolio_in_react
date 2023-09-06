import propTypes from 'prop-types'

Button.propTypes = {
    onclick: propTypes.func,
    active: propTypes.bool,
    children: propTypes.object
}
export default function Button({onclick, active, children}) {
  return (
    <>
     <button 
       onClick={onclick}
      className={`
      flex h-fit ml-5 my-5 justify-center sm:hidden
      ${active ? 'bg-red-300' : 'bg-zinc-400'}`}
      
    >
        {children}
    </button>
    </>
  )
}
