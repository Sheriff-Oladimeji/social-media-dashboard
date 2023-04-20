import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Overview from "./components/Overview"
const App = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto  font-Inter">
      <Dashboard />
      <Overview/>
    </div>
    )
    
}

export default App