import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts, getPostsPorCategoria } from '../data/blog-posts';

function Blog() {
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');

  // useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Blog - Matheus Krigger | Desenvolvedor Front-end';
  }, []);
  
  // Obter categorias únicas
  const categorias = ['Todos', ...new Set(blogPosts.map(post => post.categoria))];
  
  // Filtrar posts baseado na categoria selecionada
  const postsFiltrados = categoriaFiltro === 'Todos' 
    ? blogPosts 
    : getPostsPorCategoria(categoriaFiltro);

  return (
    <div>
      <Navbar />
      
      <section className="blog-section" style={{ marginTop: '90px' }}>
        <h2>Blog</h2>
        
        {/* Filtros por categoria */}
        <div className="blog-filters" style={{ 
          marginBottom: '40px', 
          display: 'flex', 
          gap: '15px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setCategoriaFiltro(categoria)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: categoriaFiltro === categoria ? 'var(--primary-color)' : '#E0E0E0',
                color: categoriaFiltro === categoria ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {postsFiltrados.map((post) => (
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
                        backgroundColor: '#F3F3F3',
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

        {/* Mensagem quando não há posts na categoria */}
        {postsFiltrados.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#666'
          }}>
            <p>Nenhum post encontrado na categoria "{categoriaFiltro}".</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
