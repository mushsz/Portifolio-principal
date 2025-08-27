import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/projetos">Projetos</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Navbar;
