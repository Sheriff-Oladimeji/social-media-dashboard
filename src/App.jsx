import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Overview from "./components/Overview"
import Header from "./components/Header"
const App = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto  font-Inter">
      <Header/>
      <Dashboard />
      <Overview/>
    </div>
    )
    
}

export default App