import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProjetosRecentes } from '../data/projetos';
import { getPostsRecentes } from '../data/blog-posts';

function Home() {

  const projetosRecentes = getProjetosRecentes(3);
  

  const postsRecentes = getPostsRecentes(2);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Olá, eu sou o Matheus Krigger!</h1>
        <h2>Desenvolvedor Web Front-end</h2>
        <p>
          Sou um amante de tecnologia e programação, eterno aprendiz e transformando ideias em experiências digitais memoráveis.
        </p>
        <button className="download-btn">Download resumo</button>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Blog</h2>
        <div className="blog-grid">
          {postsRecentes.map((post) => (
            <article key={post.id} className="blog-card" style={{
              border: post.destaque ? '2px solid var(--primary-color)' : '1px solid #E0E0E0',
              position: 'relative'
            }}>
              {post.destaque && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '20px',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  DESTAQUE
                </div>
              )}
              
              <h3>{post.titulo}</h3>
              <p className="meta">
                {post.data} · {post.categoria}
                {post.tags && post.tags.length > 0 && (
                  <span style={{ color: '#8695A4' }}>
                    · {post.tags.slice(0, 2).join(', ')}
                    {post.tags.length > 2 && '...'}
                  </span>
                )}
              </p>
              <p>{post.resumo}</p>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div style={{ 
                  marginTop: '15px', 
                  display: 'flex', 
                  gap: '8px', 
                  flexWrap: 'wrap' 
                }}>
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: '#c5c5c5ff',
                        color: '#666',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projetos</h2>
        {projetosRecentes.map((proj, index) => (
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
              
              {/* Links projetos reais */}
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

export default Home;
