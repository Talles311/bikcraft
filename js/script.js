
// ativar links do menu 

const links = document.querySelectorAll(".header-menu li a");
// console.log(link); ---> aqui podemos usar o console.log apenas para verificar se está tudo correndo bem, se funcionam! 
               
// nome da função e suas variaveis:  ativarLink 
function ativarLink(link) {
       const url = location.href;  
       const href = link.href; 
       if (url.includes(href)) {
            link.classList.add("ativo");
     }
    }

// Ativar uma função para cada um dos links  

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); 

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);  
    elemento.checked = true;
    console.log(elemento);
  }
 
 parametros.forEach(ativarProduto);

 // perguntas frequentes 

const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
     const pergunta = event.currentTarget;
     const controls = pergunta.getAttribute("aria-controls");
     const resposta = document.getElementById(controls);
  
     resposta.classList.toggle("ativa");
     const ativa = resposta.classList.contains("ativa");
     pergunta.setAttribute("aria-expanded", ativa);   

}

function eventosPerguntas(pergunta) {
            pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas 

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
      const img = event.currentTarget;  
      galeriaContainer.prepend(img); 
}

function eventosGaleria(img) {   //função trocarimagem
   img.addEventListener("click", trocarImagem);      

}

// começar adicionando um evento de clique 
 galeria.forEach(eventosGaleria);



