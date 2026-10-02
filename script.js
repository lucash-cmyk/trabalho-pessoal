// ========================================
// CONTADOR
// ========================================

const dataInicio = new Date(2024, 4, 1, 0, 0, 0);

function atualizarContador() {

    const agora = new Date();

    let anos =
        agora.getFullYear() -
        dataInicio.getFullYear();

    let aniversario =
        new Date(dataInicio);

    aniversario.setFullYear(
        dataInicio.getFullYear() + anos
    );

    if (aniversario > agora) {

        anos--;

        aniversario =
            new Date(dataInicio);

        aniversario.setFullYear(
            dataInicio.getFullYear() + anos
        );
    }

    let meses =
        (agora.getFullYear() -
            aniversario.getFullYear()) * 12
        +
        (agora.getMonth() -
            aniversario.getMonth());

    let dataMes =
        new Date(aniversario);

    dataMes.setMonth(
        aniversario.getMonth() + meses
    );

    if (dataMes > agora) {

        meses--;

        dataMes =
            new Date(aniversario);

        dataMes.setMonth(
            aniversario.getMonth() + meses
        );
    }

    const diferenca =
        agora.getTime() -
        dataMes.getTime();

    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferenca /
                (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferenca /
                (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );

    const semanas =
        Math.floor(dias / 7);


    document.getElementById("years").textContent =
        anos;

    document.getElementById("months").textContent =
        meses;

    document.getElementById("weeks").textContent =
        semanas;

    document.getElementById("days").textContent =
        dias;

    document.getElementById("hours").textContent =
        horas;

    document.getElementById("minutes").textContent =
        minutos;

    document.getElementById("seconds").textContent =
        segundos;
}


atualizarContador();

setInterval(
    atualizarContador,
    1000
);


// ========================================
// FOTOS
// ========================================

const fotos = [

    {
        imagem: "imagens/foto-1.jpeg",
        texto: "O começo de muitos momentos ❤️"
    },

    {
        imagem: "imagens/foto-2.jpeg",
        texto: "Nós dois, do nosso jeitinho"
    },

    {
        imagem: "imagens/foto-13.jpeg",
        texto: "Nosso momento especial ❤️"
    },

    /* Foto 3 temporariamente removida da galeria
    {
        imagem: "imagens/foto-3.jpeg",
        texto: "Um dos nossos sorrisos"
    },
    */

    {
        imagem: "imagens/foto-4.jpeg",
        texto: "Onde eu só queria estar: com você"
    },

    {
        imagem: "imagens/foto-5.jpeg",
        texto: "Mais um pedacinho da nossa história"
    },

    {
        imagem: "imagens/foto-6.jpeg",
        texto: "Você faz tudo ficar melhor"
    },

    {
        imagem: "imagens/foto-7.jpeg",
        texto: "Momentos que eu quero guardar"
    },

    {
        imagem: "imagens/foto-8.jpeg",
        texto: "Até os dias simples são especiais"
    },

    {
        imagem: "imagens/foto-9.jpeg",
        texto: "Que sorte a minha ter você"
    },

    {
        imagem: "imagens/foto-10.jpeg",
        texto: "Nosso amor em cada detalhe"
    },

    {
        imagem: "imagens/foto-11.jpeg",
        texto: "Mais uma memória para nossa coleção"
    },

    {
        imagem: "imagens/foto-12.jpeg",
        texto: "E que venham muitos outros momentos ❤️"
    }

];


let fotoAtual = 0;


const imagemGaleria =
    document.getElementById("galleryImage");

const textoGaleria =
    document.getElementById("photoCaption");

const pontos =
    document.getElementById("dots");


// ========================================
// CRIAR OS PONTOS
// ========================================

fotos.forEach(
    function (foto, indice) {

        const ponto =
            document.createElement("button");

        ponto.classList.add("dot");

        ponto.setAttribute(
            "type",
            "button"
        );

        ponto.setAttribute(
            "aria-label",
            "Ir para foto " +
            (indice + 1)
        );


        if (indice === 0) {

            ponto.classList.add(
                "active"
            );
        }


        ponto.addEventListener(
            "click",
            function () {

                mostrarFoto(indice);

                reiniciarSlideshow();
            }
        );


        pontos.appendChild(ponto);
    }
);


// ========================================
// MOSTRAR FOTO
// ========================================

function mostrarFoto(indice) {

    if (indice >= fotos.length) {

        fotoAtual = 0;

    } else if (indice < 0) {

        fotoAtual =
            fotos.length - 1;

    } else {

        fotoAtual =
            indice;
    }


    imagemGaleria.style.opacity =
        "0";


    setTimeout(
        function () {

            imagemGaleria.src =
                fotos[fotoAtual].imagem;

            textoGaleria.textContent =
                fotos[fotoAtual].texto;

            imagemGaleria.style.opacity =
                "1";

            atualizarPontos();

        },
        200
    );
}


// ========================================
// ATUALIZAR PONTOS
// ========================================

function atualizarPontos() {

    const todosOsPontos =
        document.querySelectorAll(".dot");


    todosOsPontos.forEach(
        function (ponto, indice) {

            ponto.classList.remove(
                "active"
            );


            if (indice === fotoAtual) {

                ponto.classList.add(
                    "active"
                );
            }

        }
    );
}


// ========================================
// BOTÃO ANTERIOR
// ========================================

document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        function () {

            mostrarFoto(
                fotoAtual - 1
            );

            reiniciarSlideshow();
        }
    );


// ========================================
// BOTÃO PRÓXIMA
// ========================================

document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        function () {

            mostrarFoto(
                fotoAtual + 1
            );

            reiniciarSlideshow();
        }
    );


// ========================================
// SLIDESHOW AUTOMÁTICO
// ========================================

let slideshow;


function reiniciarSlideshow() {

    clearInterval(slideshow);


    slideshow =
        setInterval(
            function () {

                mostrarFoto(
                    fotoAtual + 1
                );

            },
            4500
        );
}


reiniciarSlideshow();


// ========================================
// ANIMAÇÃO AO DESCER
// ========================================

const elementos =
    document.querySelectorAll(
        ".reveal"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "visible"
                        );
                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


elementos.forEach(
    function (elemento) {

        observador.observe(
            elemento
        );
    }
);