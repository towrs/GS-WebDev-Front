const questions = [
    {
        questions: "O que fazer durante uma enchente?",
        answers: [
            { id: 1, text:"Permanecer em um local seguro", correct:true},
            { id: 2, text:"Nadar na correnteza", correct:false},
            { id: 3, text:"Ficar olhando", correct:false},
            { id: 4, text:"Ficar perto da rede elética", correct:false},
        ]
    },
    {
        questions: "Por que é importante não entupir os bueiros com lixo?",
        answers: [
            { id: 1, text:"Para evitar o mau cheiro", correct:false},
            { id: 2, text:"Para a água da chuva escoar corretamente e evitar alagamentos", correct:true},
            { id: 3, text:"Para evitar poluição do ar", correct:false},
            { id: 4, text:"Para economizar energia elétrica", correct:false},
        ]
    },
    {
        questions: "Que tipo de sistema ajuda a controlar o excesso de água da chuva nas cidades?",
        answers: [
            { id: 1, text:"Usinas nucleares", correct:false},
            { id: 2, text:"Semáforos inteligentes", correct:false},
            { id: 3, text:"Redes de esgoto", correct:false},
            { id: 4, text:"Sistemas de drenagem pluvial", correct:true},
        ]
    },
    {
        questions: "Qual destas atitudes ajuda a prevenir enchentes?",
        answers: [
            { id: 1, text:" Jogar lixo na rua", correct:false},
            { id: 2, text:"Concretar todo o quintal", correct:false},
            { id: 3, text:"Plantar árvores e manter áreas verdes", correct:true},
            { id: 4, text:"Construir casas em encostas", correct:false},
        ]
    },
    {
        questions: "O que devemos fazer ao receber um aviso de risco de enchente da Defesa Civil?",
        answers: [
            { id: 1, text:"Ignorar e continuar a rotina normalmente", correct:false},
            { id: 2, text:"Esperar a água chegar para decidir o que fazer", correct:false},
            { id: 3, text:"Seguir as orientações, procurar abrigo seguro e ajudar vizinhos que precisam", correct:true},
            { id: 4, text:"Usar eletrodomésticos rapidamente antes que a energia acabe", correct:false},
        ]
    },
    {
        questions: "Qual das opções abaixo é uma causa comum de enchentes nas cidades?",
        answers: [
            { id: 1, text:"Plantio de árvores", correct:false},
            { id: 2, text:"Asfalto e concreto que impedem a absorção da água pelo solo", correct:true},
            { id: 3, text:"Construção de parques", correct:false},
            { id: 4, text:"Ventos fortes", correct:false},
        ]
    },
    {
        questions: "Em caso de risco de deslizamento de terra, qual é o procedimento correto?",
        answers: [
            { id: 1, text:"Permanecer em casa até a chuva passar", correct:false},
            { id: 2, text:"Esperar um aviso final antes de agir", correct:false},
            { id: 3, text:" Se esconder em áreas baixas", correct:false},
            { id: 4, text:"Sair imediatamente e buscar abrigo em local seguro", correct:true},
        ]
    },
    {
        questions: "Quais são os riscos à saúde após uma enchente?",
        answers: [
            { id: 1, text:"Doenças como leptospirose, hepatite e diarreia devido à água contaminada", correct:true},
            { id: 2, text:"Cansaço físico apenas", correct:false},
            { id: 3, text:"Apenas risco de gripe", correct:false},
            { id: 4, text:"Nenhum, a água é limpa", correct:false},
        ]
    },
    {
        questions: "Se você estiver em casa e começar a chover forte, o que é prudente fazer?",
        answers: [
            { id: 1, text:"Acompanhar os avisos da Defesa Civil e observar sinais de alagamento ou deslizamento", correct:true},
            { id: 2, text:"Dormir tranquilo sem se preocupar", correct:false},
            { id: 3, text:"Abrir todas as portas para a água sair", correct:false},
            { id: 4, text:"Ignorar, pois a chuva logo passa", correct:false},
        ]
    },
    {
        questions: "Por que é importante a participação da comunidade na prevenção de enchentes?",
        answers: [
            { id: 1, text:"Porque é obrigação apenas da prefeitura", correct:false},
            { id: 2, text:"Porque quanto mais lixo, mais água acumula", correct:false},
            { id: 3, text:" Porque juntos podemos adotar práticas como não jogar lixo nas ruas, limpar terrenos e cobrar melhorias", correct:true},
            { id: 4, text:"Não é importante, só os bombeiros resolvem", correct:false},
        ]
    },
]

const questionElement = document.getElementById("perguntas");
const answerButtons = document.getElementById("resposta-btn");
const nextButton = document.getElementById("proximo-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState(){
    nextButton.style.display = "none";]
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button");
    })
}

startQuiz();