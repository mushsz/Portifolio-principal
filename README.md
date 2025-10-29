# 🚀 Portfólio Profissional - Matheus Krigger

Landing page profissional desenvolvida em React + Vite, apresentando habilidades, projetos e experiência como desenvolvedor Front-end formado pela Escola DNC.

## 👨‍💻 Sobre o Desenvolvedor

**Matheus Krigger** - Desenvolvedor Full-Stack & Estudante de TI

- ✅ **Formado em Front-end** pela Escola DNC (150h) - 2025
- 🎓 **Tecnólogo em TI - Software** (Formando 2025)
- 🌍 **Inglês Técnico** fluente
- 💻 **Especialista** em React, JavaScript, TypeScript, ASP.NET e .NET

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** - Biblioteca para interface de usuário
- **JavaScript** - Linguagem de programação
- **TypeScript** - Superset tipado do JavaScript
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com variáveis CSS
- **Vite** - Build tool e servidor de desenvolvimento

<<<<<<< HEAD
### Backend
- **ASP.NET** - Framework web da Microsoft
- **.NET** - Plataforma de desenvolvimento
- **C** - Linguagem de programação

### Ferramentas
- **Git** - Controle de versão
- **VS Code** - Editor de código
- **Figma** - Design e prototipação
- **NPM** - Gerenciador de pacotes

## 🎨 Design e Características

### Paleta de Cores Profissional
- **Azul Profissional**: `#2563eb` (Primary)
- **Cinza Sofisticado**: `#1e293b` (Secondary)
- **Cyan Moderno**: `#06b6d4` (Accent)
- **Gradientes Suaves**: Combinações harmoniosas

### Layout e Estrutura
- **Design em Tela Cheia**: Aproveitamento total do espaço
- **Navbar Fixa**: Com backdrop blur e efeitos modernos
- **Hero Section Impactante**: Layout duplo com estatísticas
- **Cards Elevados**: Sombras e bordas arredondadas
- **Animações Suaves**: Transições profissionais
- **Mobile-First**: Totalmente responsivo

### Seções Principais
1. **Hero Section** - Apresentação com estatísticas e stack de tecnologias
2. **Habilidades** - Tecnologias organizadas por categoria
3. **Formação Acadêmica** - DNC Front-end + TI Software
4. **Projetos** - Cards interativos com hover effects
5. **Call-to-Action** - Contato direto e download do CV
=======
##  Design e Template

- **Template do Figma**: Baseado em design moderno e limpo para portfólio de desenvolvedor
- **Link do Figma**: [Template de Portfólio] (https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03--Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=0-1&p=f) Baseado no template 03!
- **Deploy/Preview**: [Portfólio Matheus Krigger] (https://portifolio-matheus-krigger.netlify.app)
>>>>>>> 83f07aaa2e78bd71a05fbde8cb8a65824c3bf03c

##  Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Footer.jsx      # Rodapé com links sociais
├── pages/              # Páginas da aplicação
│   └── Home.jsx        # Landing page principal
├── data/               # Dados estáticos
│   └── projetos.js     # Informações dos projetos
├── assets/             # Imagens e recursos
│   ├── projeto1.png    # Imagem do projeto 1
│   └── projeto2.png    # Imagem do projeto 2
└── index.css           # Estilos globais e variáveis CSS
```

<<<<<<< HEAD
=======
##  Funcionalidades Implementadas

### useState - Gerenciamento de Estado

1. **Página Sobre (`src/pages/Sobre.jsx`)**:
   - `mostrarMais`: Controla a exibição de conteúdo expandido
   - `habilidadesFiltradas`: Armazena habilidades filtradas por categoria
   - `filtroAtivo`: Controla qual filtro de categoria está ativo

2. **Página Projetos (`src/pages/Projetos.jsx`)**:
   - `projetosFiltrados`: Lista de projetos após aplicação dos filtros
   - `filtroTecnologia`: Filtro por tecnologia utilizada
   - `filtroAno`: Filtro por ano de desenvolvimento

3. **Página Blog (`src/pages/Blog.jsx`)**:
   - `categoriaFiltro`: Filtro de posts por categoria

4. **Página Contato (`src/pages/Contato.jsx`)**:
   - `formData`: Estado do formulário de contato (nome, email, mensagem)

### useEffect - Efeitos Colaterais

1. **Definição de Título da Página** (todas as páginas):
   ```javascript
   useEffect(() => {
     document.title = 'Nome da Página - Matheus Krigger | Desenvolvedor Front-end';
   }, []);
   ```

2. **Filtro de Habilidades** (`src/pages/Sobre.jsx`):
   ```javascript
   useEffect(() => {
     if (filtroAtivo === 'todas') {
       setHabilidadesFiltradas(habilidades);
     } else {
       setHabilidadesFiltradas(habilidades.filter(h => h.categoria === filtroAtivo));
     }
   }, [filtroAtivo]);
   ```

3. **Filtro de Projetos** (`src/pages/Projetos.jsx`):
   ```javascript
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
   ```

## 🔗 Links e Contatos

- **GitHub**: [github.com/mushsz] (https://github.com/mushsz)
- **LinkedIn**: [linkedin.com/in/matheus-krigger-brum] (https://www.linkedin.com/in/matheus-krigger-brum/)
- **Instagram**: [@mbkrigger] (https://www.instagram.com/mbkrigger/)
- **E-mail**: matheus.krigger@gmail.com

>>>>>>> 83f07aaa2e78bd71a05fbde8cb8a65824c3bf03c
## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/mushsz/portfolio-matheus-krigger.git
   cd portfolio-matheus-krigger
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5174
   ```

##  Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter ESLint

## 🎯 Funcionalidades Implementadas

### Design Responsivo
- **Breakpoints**: 1200px, 1024px, 768px, 480px
- **Grid Adaptativo**: Layout que se ajusta a qualquer tela
- **Tipografia Responsiva**: Tamanhos que escalam com o dispositivo
- **Touch-Friendly**: Botões e elementos otimizados para mobile

### Interatividade
- **Hover Effects**: Transformações sutis em todos os elementos
- **Animações de Entrada**: FadeInUp e FadeInRight
- **Transições Suaves**: Cubic-bezier para movimentos naturais
- **Cards Interativos**: Overlay com botões de ação

### Performance
- **CSS Otimizado**: Variáveis e classes reutilizáveis
- **Imagens Responsivas**: Object-fit e lazy loading
- **Código Limpo**: Estrutura organizada e comentada
- **Build Otimizado**: Vite para máxima performance

## 🔗 Links e Contatos

- **📧 E-mail**: [matheuskriggerbrum7@gmail.com](mailto:matheuskriggerbrum7@gmail.com)
- **💼 LinkedIn**: [linkedin.com/in/matheus-krigger-brum](https://www.linkedin.com/in/matheus-krigger-brum/)
- **🐙 GitHub**: [github.com/mushsz](https://github.com/mushsz)
- **📱 Instagram**: [@mbkrigger](https://www.instagram.com/mbkrigger/)

## 🎨 Características do Design

<<<<<<< HEAD
### Profissionalismo
- **Cores Corporativas**: Paleta que transmite confiança
- **Tipografia Moderna**: Inter para melhor legibilidade
- **Espaçamentos Harmoniosos**: Grid system consistente
- **Hierarquia Visual**: Elementos bem organizados

### Usabilidade
- **Navegação Intuitiva**: Links claros e funcionais
- **Call-to-Actions**: Botões destacados e persuasivos
- **Contato Direto**: Email com mailto: para ação imediata
- **Informações Claras**: Conteúdo bem estruturado

### Acessibilidade
- **Contraste Adequado**: Cores que facilitam a leitura
- **Navegação por Teclado**: Suporte completo
- **Alt Text**: Imagens com descrições apropriadas
- **Semântica HTML**: Estrutura bem marcada

## 📈 Próximos Passos

- [ ] Adicionar mais projetos ao portfólio
- [ ] Implementar modo escuro
- [ ] Adicionar seção de depoimentos
- [ ] Integrar com CMS para blog
- [ ] Otimizar SEO e meta tags

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ por Matheus Krigger**

*Desenvolvedor Front-end formado pela Escola DNC | Especialista em React, JavaScript e TypeScript*
=======
- Design responsivo para todos os dispositivos
- Interface moderna e limpa
- Navegação intuitiva
- Filtros interativos para projetos e blog
- Formulário de contato funcional
- Links para redes sociais e projetos
>>>>>>> 83f07aaa2e78bd71a05fbde8cb8a65824c3bf03c
