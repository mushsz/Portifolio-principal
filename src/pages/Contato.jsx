import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  // useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Contato - Matheus Krigger | Desenvolvedor Front-end';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '90px', maxWidth: '600px', margin: '90px auto 0' }}>
        <h1 style={{ fontSize: '34px', fontWeight: '700', marginBottom: '40px', color: 'var(--text-dark)' }}>
          Contato
        </h1>
        <p style={{ fontSize: '16px', marginBottom: '40px', color: 'var(--text-dark)' }}>
          Entre em contato comigo através do formulário abaixo:
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="nome" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-dark)' }}>
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-dark)' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          
          <div>
            <label htmlFor="mensagem" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-dark)' }}>
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>
          
          <button 
            type="submit" 
            className="download-btn"
            style={{ alignSelf: 'flex-start', marginTop: '20px' }}
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
