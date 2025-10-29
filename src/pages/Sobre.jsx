import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Sobre() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const [habilidadesFiltradas, setHabilidadesFiltradas] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('todas');

  // useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Sobre - Matheus Krigger | Desenvolvedor Front-end';
  }, []);

  const habilidades = [
    { nome: 'HTML5', categoria: 'frontend', nivel: 'Avançado' },
    { nome: 'CSS3', categoria: 'frontend', nivel: 'Avançado' },
    { nome: 'JavaScript', categoria: 'frontend', nivel: 'Intermediário' },
    { nome: 'React', categoria: 'frontend', nivel: 'Intermediário' },
    { nome: '.NET', categoria: 'backend', nivel: 'Básico' },
    { nome: 'ASP.NET', categoria: 'backend', nivel: 'Básico' },
    { nome: 'C#', categoria: 'backend', nivel: 'Básico' },
    { nome: 'Node.js', categoria: 'backend', nivel: 'Básico' },
    { nome: 'Git', categoria: 'ferramentas', nivel: 'Intermediário' },
    { nome: 'Figma', categoria: 'design', nivel: 'Básico' },
    { nome: 'Vite', categoria: 'ferramentas', nivel: 'Intermediário' }
  ];

  // useEffect para filtrar habilidades baseado no filtro ativo
  useEffect(() => {
    if (filtroAtivo === 'todas') {
      setHabilidadesFiltradas(habilidades);
    } else {
      setHabilidadesFiltradas(habilidades.filter(h => h.categoria === filtroAtivo));
    }
  }, [filtroAtivo]);

  const experiencias = [
    {
      empresa: 'Landing Page Escola DNC',
      cargo: 'Desenvolvedor Front-end',
      periodo: '2024',
      descricao: 'Desenvolvimento de landing page responsiva para a Escola DNC, apresentando o curso gratuito de Introdução à Tecnologia. Inclui seção de vídeo, carrossel de depoimentos, formulário de inscrição integrado com API e design moderno com animações. Projeto desenvolvido para capturar leads e apresentar a proposta educacional da instituição.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'API Integration']
    },
    {
      empresa: 'The Dev News - Blog',
      cargo: 'Desenvolvedor Front-end',
      periodo: '2024',
      descricao: 'Blog de tecnologia desenvolvido com HTML, CSS e JavaScript. Inclui seção de posts populares, posts recentes, funcionalidade de busca, efeitos de hover, modal de preview de posts e sistema de compartilhamento. Projeto focado em criar uma experiência de leitura moderna e interativa para desenvolvedores.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '90px', maxWidth: '800px', margin: '90px auto 0', padding: '0 20px' }}>
        <h1 style={{ fontSize: '34px', fontWeight: '700', marginBottom: '40px', color: 'var(--text-dark)' }}>
          Sobre Mim
        </h1>
        

        <section style={{ marginBottom: '50px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', color: 'var(--text-dark)', fontWeight: '500' }}>
            Olá! Sou o <strong>Matheus Krigger</strong>, um desenvolvedor front-end apaixonado por criar 
            <strong> experiências digitais que realmente funcionam</strong> e geram resultados para empresas.
            {mostrarMais && (
              <span>
                {' '}Minha missão é transformar suas ideias em <strong>soluções web eficazes</strong> que 
                não apenas impressionam visualmente, mas também <strong>convertem visitantes em clientes</strong>.
              </span>
            )}
          </p>
          {mostrarMais && (
            <div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: 'var(--text-dark)' }}>
                Trabalho com <strong>HTML, CSS, JavaScript e React</strong> 
                para criar landing pages que convertem, interfaces intuitivas e aplicações web modernas. 
                Meu foco é sempre em <strong>resultados mensuráveis</strong> e <strong>experiência do usuário excepcional</strong>.
              </p>
              
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: 'var(--text-dark)' }}>
                <strong>Minha abordagem:</strong> Entendo que cada projeto é único. Por isso, não apenas crio código, 
                mas analiso seu negócio para desenvolver soluções que realmente atendem às suas necessidades. 
                <strong>Entrega no prazo, suporte contínuo e qualidade garantida</strong> são meus compromissos.
              </p>

              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: 'var(--text-dark)' }}>
                <strong>Especialidades:</strong> Design responsivo que funciona perfeitamente em todos os dispositivos, 
                otimização para SEO para que seu site apareça no Google, e desenvolvimento de interfaces que 
                <strong>facilitam a navegação e aumentam as conversões</strong>.
              </p>

              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: 'var(--text-dark)', fontWeight: '500' }}>
                <strong>Pronto para transformar sua presença digital?</strong> 
                Vamos conversar sobre como posso ajudar sua empresa a crescer online!
              </p>
            </div>
          )}
          <button 
            onClick={() => setMostrarMais(!mostrarMais)}
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {mostrarMais ? 'Mostrar menos' : 'Mostrar mais'}
          </button>
        </section>

        {/* Seção de Habilidades com Filtro */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-dark)' }}>
            Habilidades
          </h2>
          
          {/* Filtros de Categoria */}
          <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['todas', 'frontend', 'backend', 'ferramentas', 'design'].map(categoria => (
              <button
                key={categoria}
                onClick={() => setFiltroAtivo(categoria)}
                style={{
                  backgroundColor: filtroAtivo === categoria ? 'var(--primary-color)' : '#f5f5f5',
                  color: filtroAtivo === categoria ? 'white' : 'var(--text-dark)',
                  border: '1px solid #ddd',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  textTransform: 'capitalize'
                }}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid de Habilidades */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px' 
          }}>
            {habilidadesFiltradas.map((habilidade, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: 'var(--text-dark)' }}>
                  {habilidade.nome}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                  {habilidade.nivel}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Experiências */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-dark)' }}>
            Experiências
          </h2>
          {experiencias.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #e9ecef'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '5px', color: 'var(--text-dark)' }}>
                {exp.cargo} - {exp.empresa}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--primary-color)', marginBottom: '10px', fontWeight: '500' }}>
                {exp.periodo}
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--text-dark)', marginBottom: '15px' }}>
                {exp.descricao}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {exp.tecnologias.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
