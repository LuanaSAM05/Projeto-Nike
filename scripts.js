let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho"); // botão do carrinho

//document = html
//querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
   tenis.classList.add("troca-efeito")

   body.style.background = cor
   botaoCarrinho.style.background = cor // muda a cor do botão

   // contador de tempo
   setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
   }, 500);
   // 1000 milissegundos = 1 segundo
}