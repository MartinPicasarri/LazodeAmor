import './App.css'
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <>
      
      <div>
        <Navbar />
        <Home />
        <Products />
        <Contact />
      </div>

    </>
  )
}

export default App;
