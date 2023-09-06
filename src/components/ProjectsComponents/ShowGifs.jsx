import { useState } from "react"
import propTypes from "prop-types"

HoverElementsImage.propTypes = {
    text: propTypes.string,
    img: propTypes.string,
    link: propTypes.string,
    repository: propTypes.string
}

export default function HoverElementsImage({text, img, repository, link}) {
    const [hoverEvent, setHoverEvent] = useState(false)

    const handleMouseEnter = () => {
        setHoverEvent(true)
    }

    const handleMouseLeave = () => {
        setHoverEvent(false)
    }
  return (
    <>
    <div className="
    w-full flex flex-cols justify-center items-center mt-8
    ">
        <div
        className="
        w-64 h-36 flex flex-col gap-4 border border-red-400 rounded-md p-2 transition duration-700 ease-in-out
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ><p className="border-b-2">{text}</p>
        <a className="hover:text-teal-300 cursor-pointer transition
         duration-500 ease-in-out w-fit" 
        target="_blank" rel="noreferrer" aria-label={text} href={link}>Deploy</a>
        <a className="hover:text-blue-400 cursor-pointer transition 
        duration-500 ease-in-out w-fit" 
        target="_blank" rel="noreferrer" aria-label={text} href={repository}>Repositório</a>
        </div>
    </div>
    <div 
    className="
    w-[340px] h-auto rounded-md mx-auto my-2
    "
    >{hoverEvent && 
    <img 
    className="
    w-full h-full rounded-md
    "
    src={img} alt={text} /> }
    </div>
    </>
  )
}
