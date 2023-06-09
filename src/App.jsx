
import Dashboard from "./components/Dashboard"
import Overview from "./components/Overview"
import Header from "./components/Header"
const App = () => {
  return (
    <section className="w-[100%] dark:bg-VeryDarkBlueBG scroll-smooth">
      <div className="w-[100%] bg-LightGrayishBlueCardBG dark:bg-VeryDarkBlueBG">
        <Header />
      </div>

      <Dashboard />

      <Overview />
    </section>
  );
    
}

export default App