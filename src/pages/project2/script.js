// The Dev News - Blog JavaScript
// Funcionalidades para melhorar a experiência do usuário

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Dev News - Blog carregado com sucesso!');
    
    // Adicionar funcionalidade de hover nos posts
    addPostHoverEffects();
    
    // Adicionar funcionalidade de clique nos posts
    addPostClickHandlers();
    
    // Adicionar funcionalidade de busca (simulada)
    addSearchFunctionality();
    
    // Adicionar funcionalidade de compartilhamento
    addShareFunctionality();
});

// Função para adicionar efeitos de hover nos posts
function addPostHoverEffects() {
    const posts = document.querySelectorAll('.post, .postprincipal1, .postprincipal2, .postprincipal3, .postprincipal4');
    
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0px 15px 20px rgba(0,0,0,0.2)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0px 10px 10px rgba(0,0,0,0.1)';
        });
    });
}

// Função para adicionar handlers de clique nos posts
function addPostClickHandlers() {
    const posts = document.querySelectorAll('.post, .postprincipal1, .postprincipal2, .postprincipal3, .postprincipal4');
    
    posts.forEach(post => {
        post.addEventListener('click', function() {
            // Simular abertura de post (você pode expandir isso)
            const title = this.querySelector('h2, h4');
            if (title) {
                console.log(`Post clicado: ${title.textContent}`);
                // Aqui você pode adicionar lógica para abrir o post completo
                showPostPreview(title.textContent);
            }
        });
    });
}

// Função para mostrar preview do post
function showPostPreview(title) {
    // Criar um modal simples para mostrar o post
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 500px;
            text-align: center;
        ">
            <h2>${title}</h2>
            <p style="margin: 20px 0; color: #666;">
                Este é um preview do post "${title}". 
                Em uma implementação completa, aqui seria mostrado o conteúdo completo do artigo.
            </p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #02A28F;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
            ">Fechar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Função para adicionar funcionalidade de busca
function addSearchFunctionality() {
    // Criar barra de busca
    const searchBar = document.createElement('div');
    searchBar.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 100;
    `;
    
    searchBar.innerHTML = `
        <input type="text" placeholder="Buscar posts..." style="
            padding: 8px 12px;
            border: 2px solid #02A28F;
            border-radius: 20px;
            outline: none;
            font-size: 14px;
        ">
    `;
    
    document.body.appendChild(searchBar);
    
    // Adicionar funcionalidade de busca
    const searchInput = searchBar.querySelector('input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const posts = document.querySelectorAll('.post, .postprincipal1, .postprincipal2, .postprincipal3, .postprincipal4');
        
        posts.forEach(post => {
            const title = post.querySelector('h2, h4');
            if (title) {
                const titleText = title.textContent.toLowerCase();
                if (titleText.includes(searchTerm) || searchTerm === '') {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            }
        });
    });
}

// Função para adicionar funcionalidade de compartilhamento
function addShareFunctionality() {
    const posts = document.querySelectorAll('.postprincipal1, .postprincipal2, .postprincipal3, .postprincipal4');
    
    posts.forEach(post => {
        const shareButton = document.createElement('button');
        shareButton.textContent = '📤 Compartilhar';
        shareButton.style.cssText = `
            background: #02A28F;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            margin-top: 10px;
        `;
        
        shareButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const title = post.querySelector('h2');
            if (title) {
                sharePost(title.textContent);
            }
        });
        
        post.appendChild(shareButton);
    });
}

// Função para compartilhar post
function sharePost(title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Confira este post interessante: ${title}`,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que não suportam Web Share API
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`Confira este post: ${title}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
}

// Função para adicionar contador de visualizações (simulado)
function addViewCounter() {
    const posts = document.querySelectorAll('.postprincipal1, .postprincipal2, .postprincipal3, .postprincipal4');
    
    posts.forEach(post => {
        const viewCounter = document.createElement('span');
        const randomViews = Math.floor(Math.random() * 1000) + 100;
        viewCounter.textContent = `👁️ ${randomViews} visualizações`;
        viewCounter.style.cssText = `
            color: #666;
            font-size: 12px;
            margin-top: 5px;
            display: block;
        `;
        
        post.appendChild(viewCounter);
    });
}

// Inicializar contador de visualizações
setTimeout(addViewCounter, 1000);
