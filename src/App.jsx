import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Sobre from './pages/Sobre.jsx';
import Projetos from "./pages/Projetos.jsx";
import Blog from "./pages/Blog.jsx";
import Contato from "./pages/Contato.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </Router>
  );
}

export default App;

