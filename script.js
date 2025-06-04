document.addEventListener('DOMContentLoaded', function () {
    function abrirWhatsApp(mensagem) {
        const numeroWhatsApp = '5571999816613';
        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
        window.location.href = urlWhatsApp;
    }

    // Botão principal
    const botaoPrincipal = document.getElementById('compre');
    if (botaoPrincipal) {
        botaoPrincipal.addEventListener('click', function (e) {
            e.preventDefault();
            abrirWhatsApp('Olá, eu gostaria de saber mais sobre o Suporte para Livros ReadEase');
        });
    }

    // Seleciona todos os botões que tenham classe começando com 'botaocompra'
    const botoesCompra = document.querySelectorAll('[class^="botaocompra"]');

    botoesCompra.forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();

            const card = botao.closest('.item-produto');
            const tituloProduto = card ? card.querySelector('h4') : null;
            const nomeProduto = tituloProduto ? tituloProduto.textContent.trim() : 'um produto da ReadEase';

            abrirWhatsApp(`Olá, eu gostaria de saber mais sobre ${nomeProduto}`);
        });
    });
});
// Menu Toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

