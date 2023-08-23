
import sun from "../../assets/images/sol.png";
import moon from "../../assets/images/lua.png";
import starrySky from "../../assets/images/ceu-estrelado.webp"
import blueSky from "../../assets/images/nuvem-branca-no-ceu-azul.webp"
import { useState, useEffect } from "react";

const switchTheme = document.getElementById('switchTheme')

export default function ChoiceThemeBtn() {
  const [darkMode, setDarkMode] = useState(() => {
    const darkModeStored = localStorage.getItem("darkMode");
    if(!darkModeStored) return false
    if(darkModeStored === "true") return true
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    switchTheme.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
    <label>
      <input type="checkbox"
      className="hidden"
      onChange={() => setDarkMode(!darkMode)} 
       />
      <div className={` mr-4 mt-4 w-12 h-6 rounded-3xl border border-gray-500
      flex items-center justify-between gap-x-3 relative cursor-pointer animate-rightShow
      bg-cover bg-no-repeat
      `}
      style={{backgroundImage: darkMode ? `url( ${starrySky})` : `url( ${blueSky})`}}
      >
        <img className="w-4 h-4" src={moon} alt="" />
        <img className="w-4 h-4" src={sun} alt="" />
          <button className={`
          bg-lightBg w-4 h-4 rounded-full pointer-events-none  absolute z-10
          ${darkMode ? 'translate-x-7': 'transform-none'} duration-700
            `}
          >
          </button>
      </div>
    </label>
    </div>
  )
}
