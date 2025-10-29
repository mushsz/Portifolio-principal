import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projetos } from '../data/projetos';

function Projetos() {
  const [projetosFiltrados, setProjetosFiltrados] = useState(projetos);
  const [filtroTecnologia, setFiltroTecnologia] = useState('todas');
  const [filtroAno, setFiltroAno] = useState('todos');

  // useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Projetos - Matheus Krigger | Desenvolvedor Front-end';
  }, []);

  // useEffect para filtrar projetos baseado nos filtros ativos
  useEffect(() => {
    let projetosFiltrados = projetos;

    if (filtroTecnologia !== 'todas') {
      projetosFiltrados = projetosFiltrados.filter(projeto =>
        projeto.tecnologias?.some(tech =>
          tech.toLowerCase().includes(filtroTecnologia.toLowerCase())
        )
      );
    }

    if (filtroAno !== 'todos') {
      projetosFiltrados = projetosFiltrados.filter(projeto => projeto.ano === filtroAno);
    }

    setProjetosFiltrados(projetosFiltrados);
  }, [filtroTecnologia, filtroAno]);

  // Extrair tecnologias únicas para o filtro
  const tecnologiasUnicas = [...new Set(projetos.flatMap(p => p.tecnologias || []))];
  const anosUnicos = [...new Set(projetos.map(p => p.ano))];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '90px', maxWidth: '1000px', margin: '90px auto 0', padding: '0 20px' }}>
        <h1 style={{ fontSize: '34px', fontWeight: '700', marginBottom: '40px', color: 'var(--text-dark)' }}>
          Projetos
        </h1>

        {/* Filtros */}
        <div style={{ marginBottom: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'var(--text-dark)' }}>
              Tecnologia:
            </label>
            <select
              value={filtroTecnologia}
              onChange={(e) => setFiltroTecnologia(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="todas">Todas</option>
              {tecnologiasUnicas.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: 'var(--text-dark)' }}>
              Ano:
            </label>
            <select
              value={filtroAno}
              onChange={(e) => setFiltroAno(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="todos">Todos</option>
              {anosUnicos.map(ano => (
                <option key={ano} value={ano}>{ano}</option>
              ))}
            </select>
          </div>

          <div style={{ marginLeft: 'auto', fontSize: '14px', color: '#666' }}>
            {projetosFiltrados.length} projeto{projetosFiltrados.length !== 1 ? 's' : ''} encontrado{projetosFiltrados.length !== 1 ? 's' : ''}
          </div>
        </div>

        <section className="projects-section">
        {projetosFiltrados.map((proj, index) => (
          <div key={index} className="project-card">
            <img 
              src={proj.imagem} 
              alt={proj.titulo} 
              className="project-image"
            />
            <div className="project-content">
              <h3>{proj.titulo}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
                <span style={{ 
                  backgroundColor: '#142850', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '16px', 
                  fontSize: '18px', 
                  fontWeight: '900' 
                }}>
                  {proj.ano}
                </span>
                <span style={{ color: '#8695A4', fontSize: '20px' }}>
                  {proj.tecnologias?.join(', ')}
                </span>
              </div>
              <p>{proj.descricao}</p>
              
              {/* Links para projetos reais */}
              {(proj.linkDemo || proj.linkGitHub) && (
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                  {proj.linkDemo && (
                    <Link 
                      to={proj.linkDemo}
                      style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '16px'
                      }}
                    >
                      🔗 Ver Demo
                    </Link>
                  )}
                  {proj.linkGitHub && (
                    <a 
                      href={proj.linkGitHub} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '16px'
                      }}
                    >
                      📁 Ver Código
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Projetos;
