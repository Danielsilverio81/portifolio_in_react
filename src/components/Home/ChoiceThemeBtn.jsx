
import sun from "../../assets/images/sol.png";
import moon from "../../assets/images/lua.png";
import { useState, useEffect } from "react";

const switchTheme = document.getElementById('switchTheme')

export default function ChoiceThemeBtn() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeStored = localStorage.getItem("darkMode");
    if (darkModeStored === "true") {setDarkMode(true)}
  }, []);

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
      <div className="
      bg-slate-500 mr-4 mt-4 w-12 h-6 rounded-3xl border border-gray-500
      flex items-center gap-x-3 relative cursor-pointer animate-rightShow
      "
      >
        <img className="w-4 h-4" src={sun} alt="" />
        <img className="w-4 h-4" src={moon} alt="" />
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
