import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from "react"
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <nav className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
              <h2>Social Media Dashboard</h2>
              <p>Total Followers: 23,004</p>
          </div>
          <div className="flex justify-between md:space-x-3 items-center">
              <p>Dak mode</p>
        <button onClick={() => setDarkMode(!darkMode)} className="font-Inter w-[100px]">{darkMode ? <FontAwesomeIcon icon="fa-solid fa-toggle-off" className="text-6xl" /> :<FontAwesomeIcon icon="fa-light fa-toggle-on" />}</button>
          </div>
    </nav>
  )
}

export default Navbar
