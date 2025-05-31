import './App.css'
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      
      <div>
        <Navbar />
        <Home />
        <Products />
        <Contact />
        <Footer/>
      </div>

    </>
  )
}

export default App;
