import { useState, useEffect } from "react";
import {CgToggleOff, CgToggleOn} from "react-icons/cg"
const Header = () => {
     const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  

  return (
    <header className="flex flex-col md:flex-row md:justify-between w-[90%] md:w-[80%] mx-auto md:items-center font-Inter py-4">
          <div  className="mb-2 md:mb-0 border-b border-VeryDarkBlueText  pb-6 md:border-none items-center">
              <h1 className="text-3xl text-VeryDarkBlueText font-bold font-Inter dark:text-White md:text-3xl md:w-full">Social Media Dashboard</h1>
        <p className="text-[16px] text-DarkGrayishBlueText font-semibold">Total Followers: 23,004</p>
          </div>
          <div  className="flex justify-between  md:justify-end items-center md:space-x-2 w-full">
        <p className="dark:text-DesaturatedBlueText font-semibold">Dark mode</p>
        <button onClick={() => setDarkMode(!darkMode)} className={`cursor-pointer outline-none border-none bg-none ${darkMode?"text-Toggle":"text-lightToggle"}`}>{darkMode?<CgToggleOff size={40} />:<CgToggleOn size={40}/>}</button>
          </div>
    </header>
  )
}

export default Header