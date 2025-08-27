// 📁 ARQUIVO CENTRAL DE PROJETOS
// Adicione todos os seus projetos reais aqui!

import projeto1Image from '../assets/projeto1.png';
import projeto2Image from '../assets/projeto2.png';

export const projetos = [
  // 🚀 SEU PROJETO REAL - Landing Page DNC
  {
    titulo: 'Landing Page Escola DNC',
    descricao: 'Landing page responsiva desenvolvida para a Escola DNC, apresentando o curso gratuito de Introdução à Tecnologia. Inclui seção de vídeo, carrossel de depoimentos, formulário de inscrição integrado com API e design moderno com animações. Projeto desenvolvido para capturar leads e apresentar a proposta educacional da instituição.',
    imagem: projeto1Image,
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    linkDemo: 'https://teste-novo-site-matheus.netlify.app',
    linkGitHub: 'https://github.com/mushsz/projeto-landing-page',
    ano: '2024'
  },
  
  // 🚀 SEU SEGUNDO PROJETO REAL - The Dev News Blog
  {
    titulo: 'The Dev News - Blog',
    descricao: 'Blog de tecnologia desenvolvido com HTML, CSS e JavaScript. Inclui seção de posts populares, posts recentes, funcionalidade de busca, efeitos de hover, modal de preview de posts e sistema de compartilhamento. Projeto focado em criar uma experiência de leitura moderna e interativa para desenvolvedores.',
    imagem: projeto2Image,
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    linkDemo: 'https://seu-blog-demo.com',
    linkGitHub: 'https://github.com/seu-usuario/the-dev-news',
    ano: '2024'
  },
  


];

// 🎯 FUNÇÃO PARA PEGAR PROJETOS RECENTES (para a página inicial)
export const getProjetosRecentes = (quantidade = 3) => {
  return projetos.slice(0, quantidade);
};

// 📊 FUNÇÃO PARA PEGAR PROJETOS POR TECNOLOGIA
export const getProjetosPorTecnologia = (tecnologia) => {
  return projetos.filter(projeto => 
    projeto.tecnologias?.some(tech => 
      tech.toLowerCase().includes(tecnologia.toLowerCase())
    )
  );
};

// 📅 FUNÇÃO PARA PEGAR PROJETOS POR ANO
export const getProjetosPorAno = (ano) => {
  return projetos.filter(projeto => projeto.ano === ano);
};
