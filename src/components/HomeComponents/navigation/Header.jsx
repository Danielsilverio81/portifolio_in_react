import { FiX } from "react-icons/fi"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import { useEffect, useState } from "react";
import MenuToggle from "./MenuToggle";
import Button from "./ButtonToggle";
import ChoiceThemeBtn from "../ChoiceThemeBtn";
import NavContent from "./NavContent";

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
        <NavContent />
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
      <div className={`${!menuIsOpen ? 'opacity-0 top-[-190px]' : 'opacity-100 top-[56px]'} sm:hidden
        absolute bg-slate-800 w-[96%] h-[47px] p-4 transition-all delay-100 ease-in-out duration-700 
        flex items-center gap-3 mx-1`}>
        <MenuToggle />
      </div>
        <ChoiceThemeBtn/>
    </header>
  )
}
