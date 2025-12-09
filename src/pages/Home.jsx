
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { getProjetosRecentes } from '../data/projetos';

function Home() {
 
  useEffect(() => {
    document.title = 'Matheus Krigger | Desenvolvedor Front-end | Escola DNC';
  }, []);

  const projetosRecentes = getProjetosRecentes(3);

  return (
    <div>
      <nav>
        <div className="container">
          <a href="/" className="nav-logo">Matheus Krigger</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/sobre">Sobre</a>
            <a href="/projetos">Projetos</a>
            <a href="mailto:matheuskriggerbrum7@gmail.com">Contato</a>
          </div>
        </div>
      </nav>
      
      {}
      <section className="hero-section">
        <div className="container-wide">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>👋 Olá, eu sou</span>
              </div>
              <h1>
                <span className="hero-name">Matheus Krigger</span>
                <span className="hero-title">Desenvolvedor Full-Stack</span>
              </h1>
              <p className="hero-description">
                Desenvolvedor Full-Stack com mais de 4 anos estudando programação, atualmente focado
                em Java e Cloud (computação em nuvem). Especializado em React, JavaScript e TypeScript,
                com conhecimentos em ASP.NET e .NET. Entrego soluções práticas e escaláveis — pronto para
                assumir responsabilidades e gerar impacto imediato no seu time.
              </p>
              <div className="hero-actions">
                <a href="#projetos" className="btn-secondary">
                  <span>Ver Projetos</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Anos de Estudo</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Tecnologias</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">EN</div>
                  <div className="stat-label">Inglês Técnico</div>
                </div>
              </div>
              <div className="tech-stack">
                <div className="tech-item">React</div>
                <div className="tech-item">TypeScript</div>
                <div className="tech-item">ASP.NET</div>
                <div className="tech-item">JavaScript</div>
                <div className="tech-item">Java</div>
                <div className="tech-item">Cloud (AWS/GCP)</div>
                <div className="tech-item">.NET</div>
                <div className="tech-item">C</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Tecnologias & Habilidades</h2>
            <p>Domínio técnico em desenvolvimento full-stack</p>
          </div>
          <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag primary">React</span>
              <span className="skill-tag primary">JavaScript</span>
              <span className="skill-tag primary">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Sass</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag primary">ASP.NET</span>
              <span className="skill-tag primary">.NET</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">API Development</span>
              <span className="skill-tag">Database Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Ferramentas & Idiomas</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag language">🇺🇸 Inglês Técnico</span>
              <span className="skill-tag">Cloud (AWS / GCP)</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          </div>
                </div>
      </section>

      {}
      <section className="education-section">
        <div className="container">
          <div className="section-header">
            <h2>Formação Acadêmica</h2>
            <p>Base sólida em tecnologia e desenvolvimento</p>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-info">
                <h3>Formação Front-end</h3>
                <p className="education-institution">Escola DNC</p>
                <p className="education-period">2025 - Concluído</p>
                <p className="education-description">
                  Curso completo de Front-end com 150h de conteúdo, 
                  cobrindo React, JavaScript, TypeScript, HTML5, CSS3, 
                  responsividade e boas práticas de desenvolvimento web.
                </p>
              </div>
              <div className="education-status">
                <span className="status-badge completed">✅ Concluído</span>
              </div>
            </div>
            
            <div className="education-card">
              <div className="education-info">
                <h3>Tecnólogo em TI - Software</h3>
                <p className="education-institution">Instituição de Ensino Superior</p>
                <p className="education-period">2022 - 2025 (Formando)</p>
                <p className="education-description">
                  Curso de 2 anos focado em desenvolvimento de software, 
                  programação, arquitetura de sistemas e boas práticas de desenvolvimento.
                </p>
              </div>
              <div className="education-status">
                <span className="status-badge">🎓 Formando</span>
              </div>
            </div>
            
            <div className="education-card">
              <div className="education-info">
                <h3>IA e Dados</h3>
                <p className="education-institution">Geração Caldeira + IBM SkillsBuild</p>
                <p className="education-period">2025 - Concluído</p>
                <p className="education-description">
                  Formação prática em Inteligência Artificial e análise de dados, cobrindo fundamentos
                  de machine learning, processamento de dados, e ferramentas do ecossistema IBM SkillsBuild.
                </p>
              </div>
              <div className="education-status">
                <span className="status-badge completed">✅ Concluído</span>
              </div>
            </div>
                </div>
        </div>
      </section>

      {}
      <section id="projetos" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <p>Alguns dos meus trabalhos mais recentes e impactantes</p>
          </div>
          <div className="projects-grid">
        {projetosRecentes.map((proj, index) => (
          <div key={index} className="project-card">
              <div className="project-image-container">
            <img 
              src={proj.imagem} 
              alt={proj.titulo} 
              className="project-image"
            />
                <div className="project-overlay">
                  <a 
                    href={proj.linkGitHub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>👁️ Ver Código</span>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{proj.titulo}</h3>
                <div className="project-meta">
                  <span className="project-year">{proj.ano}</span>
                  <div className="project-tech">
                    {proj.tecnologias?.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
              </div>
              <p>{proj.descricao}</p>
                <div className="project-actions">
                    <a 
                      href={proj.linkGitHub} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <span>📁 Código Fonte</span>
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para novos desafios!</h2>
            <p>
              Tenho mais de 4 anos estudando programação e atualmente aprofundo em Java e Cloud. 
              Trago experiência prática em front- e back-end e foco em entregar valor desde o primeiro dia.
              Estou disponível para iniciar rapidamente e contribuir para seus projetos com soluções bem planejadas,
              código limpo e compromisso com prazos.
            </p>
          <div className="cta-actions">
            <a href="mailto:matheuskriggerbrum7@gmail.com" className="cta-btn primary">
              💬 Entrar em Contato
            </a>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
