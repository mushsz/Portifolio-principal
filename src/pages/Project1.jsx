import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Project1() {
  const navigate = useNavigate();

  // useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Landing Page Escola DNC - Matheus Krigger | Projeto';
  }, []);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '0'
    }}>
      {/* Botão de Voltar */}
      <button
        onClick={handleVoltar}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#e55a5a';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'var(--primary-color)';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        ← Voltar
      </button>

      {/* Container do projeto */}
      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        paddingTop: '80px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <iframe
            src="/src/pages/project1/projeto-landing-page-main/index.html"
            style={{
              width: '100%',
              height: '100vh',
              minHeight: '800px',
              border: 'none',
              display: 'block'
            }}
            title="Landing Page Escola DNC"
          />
        </div>
      </div>
    </div>
  );
}

export default Project1;
