
// Função para adicionar a animação de entrada
window.onload = function() {
    // Seleciona o header, a section e o footer
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const footer = document.querySelector('footer');
    
    // Adiciona a animação ao header, section e footer
    setTimeout(() => {
        // Animação para o header
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
        
        // Animação para a section
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
        
        // Animação para o footer
        footer.style.opacity = 1;
        footer.style.transform = 'translateY(0)';
    }, 1000);  // Aguarda 100ms para começar a animação (para garantir que a página esteja carregada)
};
