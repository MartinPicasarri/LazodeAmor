import React, { Element } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <Element name="Home" className="home-section">
      <h2>AGUA DE KEFIR</h2>

      <h3>¿QUE ES?</h3>
      <div className="info">
        <img src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1748633857/lazodeamor-que-es_johfns.png" alt="imagen-que-es" />
        <p>Es un alimento probiótico que se obtiene a partir del cultivo de bacterias y levaduras. Los que usamos actualmente son unos pequeños nódulos llamados tíbicos.
          Su origen se remonta a la antigua región del Cáucaso y se ha consumido tradicionalmente en diferentes regiones de Europa y Asia.
          Es un agua levemente gasificada, es muy refrescante y ¡MUY RICA!</p>
      </div>

      <h3 className='uso-titulo'>¿COMO Y CUANDO TOMARLO?</h3>
      <div className="uso">
        <p>Se puede tomar en cualquier momento del día, se puede tomar sólo o agregar jugo de frutas. Es recomendable empezar tomando de a 100mm por día e ir incrementando de a poco</p>
        <img src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1748635421/Captura_de_pantalla_2025-05-30_170326_z8awkn.png" alt="imagen-tomar" />
      </div>

      <h3>¿BENEFICIOS?</h3>
      <div className="info">
        <img src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1748636253/lazodeamor-beneficios_klf2sx.jpg" alt="imagen-beneficios" />
        <p>Consumir agua de kefir es beneficioso para la salud intestinal, esta nos fortalece el sistema inmunologico y mejora la salud en general</p>
      </div>

    </Element>
  );
};

export default Home;