import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Overview from "./components/Overview"
import Header from "./components/Header"
const App = () => {
  return (
    <section>
   
      <div className="w-[100%] bg-LightGrayishBlueCardBG">
         <Header/>
    
      </div>
      
        <Dashboard />
    
      <Overview/>
 
      </section>
    )
    
}

export default App