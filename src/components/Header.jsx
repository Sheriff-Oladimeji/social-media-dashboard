import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
library.add(faS, faToggleOff, faToggleOn)
const Header = () => {
     const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const btnValue = darkMode?<FontAwesomeIcon icon="fa-solid fa-toggle-off"  className="text-5xl text-lightToggle"/> :<FontAwesomeIcon icon="fa-solid fa-toggle-on"  className="text-5xl text-lightToggle" /> 

  return (
    <header className="flex flex-col md:flex-row justify-between w-[90%] md:w-[70%] mx-auto  font-Inter">
          <div  className="mb-2 md:mb-0 border-b border-VeryDarkBlueText  pb-6">
              <h1 className="text-3xl text-VeryDarkBlueText font-bold font-Inter">Social Media Dashboard</h1>
        <p className="text-[16px] text-DarkGrayishBlueText font-semibold">Total Followers: 23,004</p>
          </div>
          <div  className="flex justify-between md:justify-start items-center ">
              <p>Dark mode</p>
        <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer outline-none border-none">{ btnValue}</button>
          </div>
    </header>
  )
}

export default Header