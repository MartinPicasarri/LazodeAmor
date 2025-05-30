import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; 

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClassName = `navbar ${isTransparent ? 'transparent' : ''}`;

  return (
    <nav id="mainNavbar" className={navbarClassName}>
      <img src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1748536239/lazodeamorlogo_gi343d.png" alt="Logo" />
      <ul>
        <li>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            to="Products"
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
            to="Contact"
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