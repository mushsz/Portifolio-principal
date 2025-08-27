import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projetos } from '../data/projetos';

function Projetos() {
  return (
    <div>
      <Navbar />
      <section className="projects-section" style={{ marginTop: '90px' }}>
        <h2>Projetos</h2>
        {projetos.map((proj, index) => (
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
                    <a 
                      href={proj.linkDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '16px'
                      }}
                    >
                      🔗 Ver Demo
                    </a>
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
      <Footer />
    </div>
  );
}

export default Projetos;
