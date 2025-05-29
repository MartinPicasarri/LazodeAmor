import { Element } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <Element name="Home" className="home-section"> {/* Asigna el 'name' */}
      {/* Contenido de tu componente Home */}
      <h1>Bienvenido al Inicio</h1>
      <p>Este es el contenido de la página de inicio.</p>
    </Element>
  );
};

export default Home;