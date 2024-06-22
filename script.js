const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Brasil é conhecido por sua diversidade cultural, que é o resultado da mistura de influências de seus povos indígenas, colonizadores portugueses, imigrantes europeus, africanos e asiáticos. Qual é o nome do movimento artístico brasileiro do início do século XX que celebrou essa mistura de culturas e incentivou uma identidade nacional única?",
        alternativas: [
            {
                texto: "Modernismo",
                afirmacao: "Modernismo brasileiro revolucionou o panorama cultural ao desafiar tradições, valorizar o cotidiano e buscar a reconstrução da identidade nacional. "
            },
            {
                texto: "Realismo",
                afirmacao: "O Realismo não é o movimento artístico que celebrou a diversidade cultural no Brasil. O Realismo, que surgiu no século XIX, focava em retratar a realidade de forma objetiva, muitas vezes abordando questões sociais e políticas. O Modernismo, por outro lado, foi o movimento que realmente celebrou a mistura de culturas e incentivou uma identidade nacional única."
            }
        ]
    },
    {
        enunciado: "O Brasil tem uma rica tradição literária, com muitos escritores brasileiros recebendo reconhecimento internacional. Qual dos seguintes autores brasileiros ganhou o Prêmio Camões, o mais prestigioso prêmio literário da língua portuguesa?",
        alternativas: [
            {
                texto: "Clarice Lispector.",
                afirmacao: "Clarice Lispector contribuiu para a literatura brasileira inclui obras como Perto do Coração Selvagem, A Hora da Estrela e Laços de Família, mas não chegou a ganhar o Prêmio Camões."
            },
            {
                texto: "Jorge Amado.",
                afirmacao: " O Prêmio Camões, o mais prestigioso galardão literário da língua portuguesa, foi concedido a Jorge Amado em 1994. Sua contribuição para a literatura brasileira inclui obras como Capitães da Areia, Gabriela e Cravo e Canela."
            }
        ]
    },
    {
        enunciado: "O Brasil é famoso por suas novelas, que são seriados de televisão que desempenham um papel importante na cultura popular brasileira. Qual das seguintes novelas brasileiras se tornou um grande sucesso internacional, sendo transmitida em mais de 180 países?",
        alternativas: [
            {
                texto: "Avenida Brasil.",
                afirmacao: "Escrita por João Emanuel Carneiro em 2012, Avenida Brasil é a novela brasileira que se tornou um grande sucesso internacional, sendo transmitida em mais de 130 países. A trama envolvendo Carminha e Nina conquistou audiências ao redor do mundo e foi dublada em 19 idiomas."
            },
            {
                texto: "Vale Tudo.",
                afirmacao: "Escrita por Gilberto Braga, Aguinaldo Silva e Leonor Bassères, a trama denunciava a corrupção e a falta de ética no Brasil do final dos anos 1980, mas não se tornou um grande sucesso internacional."
            }
        ]
    },
    {
        enunciado: "O Brasil tem uma variedade de danças folclóricas regionais que refletem suas diversas culturas. No Nordeste do Brasil, uma dança popular é o forró. Qual dos seguintes instrumentos NÃO é tipicamente usado na música forró?",
        alternativas: [
            {
                texto: "Violino.",
                afirmacao: "O violino não é tipicamente usado na música forró. Ele pertence à família das cordas, mas não é um instrumento comumente associado a esse gênero folclórico."
            },
            {
                texto: "Acordeão.",
                afirmacao: "Acordeão (sanfona) é um dos principais instrumentos do forró. Ela produz o som característico desse estilo musical e é essencial para criar a atmosfera festiva e dançante."
            }
        ]
    },
    {
        enunciado: "O Brasil tem uma cena musical diversificada, com estilos que vão do samba e bossa nova ao rock e hip-hop. Qual dos seguintes artistas brasileiros é conhecido por seu papel fundamental no desenvolvimento do movimento musical Tropicália na década de 1960?",
        alternativas: [
            {
                texto: "Caetano Veloso.",
                afirmacao: "Caetano Veloso, juntamente com Gilberto Gil e outros artistas, liderou essa revolução estética e social, criando uma nova expressão cultural para o Brasil. As canções tropicais eram alegóricas e denunciavam a realidade do país, escapando da censura existente durante o período da Ditadura Militar."
            },
            {
                texto: " Ivete Sangalo.",
                afirmacao: "Ivete Sangalo não teve um papel fundamental no desenvolvimento do movimento musical Tropicália na década de 1960. O movimento Tropicália foi liderado por Caetano Veloso e Gilberto Gil, e sua proposta era libertária e revolucionária, buscando aproximar a música brasileira de aspectos da cultura popular, samba, pop, rock e psicodelia. Ivete Sangalo, embora seja uma cantora de destaque em outros gêneros musicais, não esteve associada ao movimento Tropicália."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Verificando...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();