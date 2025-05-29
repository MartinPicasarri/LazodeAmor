import { Link } from 'react-scroll';
import './Navbar.css'; // Importa tus estilos del navbar

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Puedes agregar clases para tus estilos */}
      <ul>
        <li>
          <Link
            activeClass="active"
            to="Home" // El 'name' del Element en tu componente Home
            spy={true}
            smooth={true}
            offset={-70} // Ajusta si tienes un header fijo
            duration={500}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            to="Products" // El 'name' del Element en tu componente Productos
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PRODUCTOS
          </Link>
        </li>
        <li>
          <Link
            to="Contact" // El 'name' del Element en tu componente Contacto
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;