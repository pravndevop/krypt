import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
