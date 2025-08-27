// 📝 ARQUIVO CENTRAL DE POSTS DO BLOG
// Adicione todos os seus posts reais aqui!

export const blogPosts = [
  // 🚀 POST SOBRE SEU PROJETO REAL - Landing Page DNC
  {
    id: 1,
    titulo: 'Desenvolvendo a Landing Page da Escola DNC: desafios e soluções',
    resumo: 'Um mergulho profundo no desenvolvimento da landing page responsiva para a Escola DNC, incluindo integração com API, carrossel de depoimentos e otimização para conversão.',
    conteudo: "Desenvolver a landing page da Escola DNC foi uma experiência incrível que me permitiu aplicar diversos conceitos de desenvolvimento front-end. O projeto incluía seção de vídeo, carrossel de depoimentos dinâmico, formulário de inscrição integrado com API e design moderno com animações.\n\n**Principais desafios enfrentados:**\n- Integração com API para captura de leads\n- Implementação de carrossel responsivo\n- Otimização de performance para carregamento rápido\n- Design adaptativo para diferentes dispositivos\n\n**Tecnologias utilizadas:** HTML, CSS, JavaScript, API Integration\n\n**Resultados:** Landing page funcional que captura leads e apresenta a proposta educacional da instituição de forma eficaz.",
    data: '30 May 2024',
    categoria: 'Projetos',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    destaque: true
  },

  // 🚀 POST SOBRE SEU SEGUNDO PROJETO REAL - The Dev News
  {
    id: 2,
    titulo: 'Criando um blog interativo com JavaScript puro: The Dev News',
    resumo: 'Como desenvolvi um blog de tecnologia completo usando apenas HTML, CSS e JavaScript vanilla, incluindo sistema de busca, modal de preview e compartilhamento.',
    conteudo: "O projeto \"The Dev News\" foi desenvolvido para criar uma experiência de leitura moderna e interativa para desenvolvedores. O desafio era construir um blog funcional usando apenas tecnologias fundamentais do front-end.\n\n**Funcionalidades implementadas:**\n- Sistema de busca em tempo real\n- Modal de preview de posts\n- Efeitos de hover interativos\n- Botões de compartilhamento\n- Contador de visualizações simulado\n- Design responsivo\n\n**Aprendizados técnicos:**\n- Manipulação avançada do DOM\n- Gerenciamento de estado com JavaScript puro\n- Implementação de modais e overlays\n- Otimização de performance\n\n**Tecnologias:** HTML, CSS, JavaScript, Responsive Design",
    data: '10 Dec 2024',
    categoria: 'Projetos',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    destaque: true
  },

  // 📚 POST TÉCNICO - React Hooks
  {
    id: 3,
    titulo: 'React Hooks: guia prático para iniciantes',
    resumo: 'Um guia completo sobre React Hooks, desde useState até useEffect, com exemplos práticos e casos de uso reais.',
    conteudo: "React Hooks revolucionaram a forma como escrevemos componentes funcionais. Neste post, vou compartilhar minha experiência e os conceitos fundamentais que todo desenvolvedor React deve conhecer.\n\n**Hooks essenciais:**\n- **useState:** Gerenciamento de estado local\n- **useEffect:** Efeitos colaterais e ciclo de vida\n- **useRef:** Referências a elementos DOM\n- **useContext:** Compartilhamento de estado global\n\n**Exemplos práticos:**\n```javascript\n// Exemplo de useState\nconst [count, setCount] = useState(0);\n\n// Exemplo de useEffect\nuseEffect(() => {\n  document.title = `Contador: ${count}`;\n}, [count]);\n```\n\n**Boas práticas:**\n- Sempre use hooks no topo do componente\n- Evite loops e condicionais com hooks\n- Use dependências corretas no useEffect",
    data: '05 Mar 2024',
    categoria: 'Tecnologia',
    tags: ['React', 'JavaScript', 'Front-end'],
    destaque: false
  },

  // 🎨 POST SOBRE DESIGN
  {
    id: 4,
    titulo: 'CSS Grid vs Flexbox: quando usar cada um?',
    resumo: 'Comparação prática entre CSS Grid e Flexbox, com exemplos de quando e como usar cada layout system.',
    conteudo: "CSS Grid e Flexbox são duas ferramentas poderosas para layout, mas cada uma tem seu propósito específico. Vou compartilhar quando usar cada uma baseado em projetos reais.\n\n**CSS Grid - Use quando:**\n- Layout em duas dimensões (linhas e colunas)\n- Estrutura de página completa\n- Alinhamento preciso de elementos\n- Layouts complexos e responsivos\n\n**Flexbox - Use quando:**\n- Layout em uma dimensão (linha ou coluna)\n- Alinhamento de itens em container\n- Distribuição de espaço\n- Componentes menores\n\n**Exemplo prático:**\n```css\n/* Grid para layout principal */\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 20px;\n}\n\n/* Flexbox para navegação */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```\n\n**Dica:** Combine ambos para layouts complexos!",
    data: '01 Mar 2024',
    categoria: 'Design',
    tags: ['CSS', 'Layout', 'Responsive Design'],
    destaque: false
  },

  // 💼 POST SOBRE CARREIRA
  {
    id: 5,
    titulo: 'Minha jornada como desenvolvedor front-end',
    resumo: 'Reflexões sobre minha trajetória no desenvolvimento web, desafios superados e aprendizados valiosos.',
    conteudo: "Minha jornada no desenvolvimento front-end começou com curiosidade e hoje se transformou em paixão. Quero compartilhar os altos e baixos, aprendizados e momentos que moldaram minha carreira.\n\n**Início da jornada:**\n- Primeiro contato com HTML e CSS\n- Descoberta do JavaScript e suas possibilidades\n- Primeiros projetos pessoais e experimentos\n\n**Desafios enfrentados:**\n- Aprender React e ecossistema moderno\n- Entender conceitos de responsividade\n- Desenvolver projetos reais com deadlines\n\n**Aprendizados valiosos:**\n- A prática é fundamental para o aprendizado\n- Projetos reais ensinam mais que tutoriais\n- Comunidade é essencial para crescimento\n- Manter-se atualizado é um processo contínuo\n\n**Dicas para iniciantes:**\n- Comece com fundamentos sólidos\n- Construa projetos pessoais\n- Participe da comunidade\n- Nunca pare de aprender\n\n**Próximos passos:**\n- Aprofundar em TypeScript\n- Explorar ferramentas de build\n- Contribuir para projetos open source",
    data: '25 Fev 2024',
    categoria: 'Carreira',
    tags: ['Desenvolvimento', 'Carreira', 'Aprendizado'],
    destaque: true
  },

  // 🛠️ POST SOBRE FERRAMENTAS
  {
    id: 6,
    titulo: 'Vite vs Create React App: qual escolher em 2024?',
    resumo: 'Comparação detalhada entre Vite e Create React App, incluindo performance, configuração e casos de uso.',
    conteudo: "A escolha da ferramenta de build pode impactar significativamente a experiência de desenvolvimento. Vou comparar Vite e Create React App baseado em experiência prática.\n\n**Vite - Vantagens:**\n- ⚡ HMR extremamente rápido\n- 🚀 Build otimizado\n- 📦 Suporte nativo a ES modules\n- 🔧 Configuração simples\n- 🎯 Suporte a múltiplos frameworks\n\n**Create React App - Vantagens:**\n- 📚 Documentação extensa\n- 🔒 Estabilidade comprovada\n- 👥 Comunidade grande\n- 🛠️ Zero configuração\n\n**Performance comparativa:**\n- **Tempo de inicialização:** Vite é 10x mais rápido\n- **HMR:** Vite atualiza instantaneamente\n- **Build:** Vite gera bundles menores\n\n**Recomendação:**\nPara novos projetos em 2024, Vite é a escolha mais inteligente. Oferece melhor performance e experiência de desenvolvimento.\n\n**Migração:**\nSe você tem projetos em CRA, considere migrar gradualmente para Vite.",
    data: '20 Fev 2024',
    categoria: 'Ferramentas',
    tags: ['Vite', 'React', 'Build Tools'],
    destaque: false
  }
];

// Funções utilitárias para gerenciar posts
export const getPostsRecentes = (quantidade = 3) => {
  return blogPosts.slice(0, quantidade);
};

export const getPostsPorCategoria = (categoria) => {
  return blogPosts.filter(post => post.categoria === categoria);
};

export const getPostsDestaque = () => {
  return blogPosts.filter(post => post.destaque);
};

export const getPostPorId = (id) => {
  return blogPosts.find(post => post.id === id);
};
