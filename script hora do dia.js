function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    minutos = minutos < 10 ? '0' + minutos : minutos;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'Manhã.jpg';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML = `Agora são ${hora}:${minutos} da manhã`;
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'Tarde.jpg';
        document.body.style.background = '#b9846f';
        msg.innerHTML = `Agora são ${hora}:${minutos} da tarde`;
    } else {
        // Boa noite!
        img.src = 'Noite.jpg';
        document.body.style.background = '#515154';
        msg.innerHTML = `Agora são ${hora}:${minutos} da noite`;
    }
}

// Chama a função carregar ao carregar a página
window.onload = function () {
    carregar(); // Chama a função para mostrar a hora assim que a página carrega
    document.body.classList.add('loaded'); // Adiciona a classe que faz a animação só acontecer uma vez
};
