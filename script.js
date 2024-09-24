// - - - VARIÁVEIS - - -

const cards = document.querySelectorAll(".card");
const filtro = document.querySelectorAll("li");
const voltar = document.getElementById("voltar");
const logo = document.getElementById("logo");
const visuCards = document.querySelectorAll(".visualizacao");
const links = document.querySelectorAll("a");
const noticias = document.querySelectorAll(".container-noticia");
let visuIphone = 4;
let visuBO6 = 1;
let visuFallout = 6;
let visuIA = 10;
let visuPS5 = 7;
let visuSatisfactory = 3;

// - - - EVENTOS - - -

exibirVisualizacoes();

// Verifica os filtros para mostrar somente os cards que possuem o value relacionado, usando como parâmetro o innerHTML da lista
filtro.forEach((cat) => {
    cat.addEventListener("click", () => {
        let categoria = cat.innerHTML;
        switch (categoria) {
            case "Tecnologia":
                mostrarTecnologia();
                break;
            case "Jogos":
                mostrarJogos();
                break;
            case "Séries":
                mostrarSeries();
                break;
            default:
                mostrarTudo();
                break;
        }
    });
});


// Verifica os cards pra quando clicar, fazer o incremento de visualização e abrir a notícia passando o Value do card como parâmetro
links.forEach((link) => {
    link.addEventListener("click", () => {
        let noticia = link.getAttribute("Value");

        switch (noticia) {
            case "iphone":
                visuIphone++;
                exibirNoticia(noticia);
                break;
            case "bo6":
                visuBO6++;
                exibirNoticia(noticia);
                break;
            case "fallout":
                visuFallout++;
                exibirNoticia(noticia);
                break;
            case "ia":
                visuIA++;
                exibirNoticia(noticia);
                break;
            case "ps5":
                visuPS5++;
                exibirNoticia(noticia);
                break;
            case "satisfactory":
                visuSatisfactory++;
                exibirNoticia(noticia);
                break;
            default:
                break;
        }

        exibirVisualizacoes();
    });
});

voltar.addEventListener("click", () => {
    exibirCards();
});

logo.addEventListener("click", () => {
    exibirCards();
});

// - - - FUNÇÕES - - -

// Funções para filtrar
function mostrarTudo() {
    cards.forEach((card) => {
        card.classList.remove("ocultar");
    });
}

function mostrarTecnologia() {
    mostrarTudo();

    cards.forEach((card) => {
        if (card.getAttribute("Value") !== "Tecnologia") {
            card.classList.add("ocultar");
        }
    });
}

function mostrarJogos() {
    mostrarTudo();

    cards.forEach((card) => {
        if (card.getAttribute("Value") !== "Jogos") {
            card.classList.add("ocultar");
        }
    });
}

function mostrarSeries() {
    mostrarTudo();

    cards.forEach((card) => {
        if (card.getAttribute("Value") !== "Series") {
            card.classList.add("ocultar");
        }
    });
}

// Função para atualizar as visualizações na tela
function exibirVisualizacoes() {
    visuCards.forEach((card) => {
        let nome = card.getAttribute("Value");
        switch (nome) {
            case "iphone":
                card.innerHTML = visuIphone;
                break;
            case "bo6":
                card.innerHTML = visuBO6;
                break;
            case "fallout":
                card.innerHTML = visuFallout;
                break;
            case "ia":
                card.innerHTML = visuIA;
                break;
            case "ps5":
                card.innerHTML = visuPS5;
                break;
            case "satisfactory":
                card.innerHTML = visuSatisfactory;
                break;
            default:
                break;
        }
    });
}

// Funções para mostrar a notícia clicada

// Faz a troca entre a Nav-bar e o botão de retornar ao início
function toggleNavBar() {
    filtro.forEach((filtro) => {
        filtro.classList.toggle("ocultar");
    });

    voltar.classList.toggle("ocultar");
}

// Exibe os cards na tela e oculta a notícia aberta
function exibirCards() {
    ocultarCards();

    noticias.forEach((noticia) => {
        noticia.classList.add("ocultar");
    });

    toggleNavBar();
}

// Adiciona a classe ocultar para esconder os cards da tela
function ocultarCards() {
    cards.forEach((card) => {
        card.classList.toggle("ocultar");
    });
}

// Oculta os cards e mostra a notícia referente ao value passado
function exibirNoticia(nomeNoticia) {
    ocultarCards();

    noticias.forEach((noticia) => {
        if (nomeNoticia == noticia.getAttribute("Value")) {
            noticia.classList.remove("ocultar");
        }
    });

    toggleNavBar();
}
