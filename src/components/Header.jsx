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
  const btnValue = darkMode?<FontAwesomeIcon icon="fa-solid fa-toggle-off" /> :<FontAwesomeIcon icon="fa-solid fa-toggle-on" /> 

  return (
      <header>
          <div>
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
          </div>
          <div>
              <p>Dark mode</p>
        <button onClick={() => setDarkMode(!darkMode)}>{ btnValue}</button>
          </div>
    </header>
  )
}

export default Header