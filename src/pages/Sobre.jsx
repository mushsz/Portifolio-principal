import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Sobre() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div>
      <Navbar />
      <section>
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por tecnologia e design funcional.
          {mostrarMais && (
            <span>
              {' '}
              Trabalho com manutenção de SaaS e estou sempre explorando novas
              tendências e ferramentas.
            </span>
          )}
        </p>
        <button onClick={() => setMostrarMais(!mostrarMais)}>
          {mostrarMais ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Sobre;
