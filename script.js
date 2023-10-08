let startGamebutton = document.querySelector('.start-quiz')
let questionsContainer = document.querySelector('.questions-container')
let answersContainer = document.querySelector('.answers-container')
let questionText = document.querySelector('.question')
let nextQuestionbutton = document.querySelector('.next-question')


startGamebutton.addEventListener("click",startGame)
nextQuestionbutton.addEventListener("click", displayNextquestion)

let currentQuestionindex = 0;
let totalCorrect = 0

    
function startGame(){
    startGamebutton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    displayNextquestion()
}

function displayNextquestion(){
    resetState()

if(questions.length === currentQuestionindex) {
    return finishGame()
}   
   
    


    questionText.textContent = questions[currentQuestionindex].question
    questions[currentQuestionindex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button","answer")
        newAnswer.textContent = answer.text
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAnswer)
        newAnswer.addEventListener("click",selectAnswer)

    })   
}

function resetState(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextQuestionbutton.classList.add("hide")

}




function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalCorrect++
    }else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach( button =>{
        if(button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    nextQuestionbutton.classList.remove("hide")
    currentQuestionindex++
   
}

function finishGame(){
    const totalQuestion = questions.length
    const peformance = Math.floor(totalCorrect * 100 / totalQuestion)

    let mensagem = ''

switch(true){
    case(peformance >= 90):
    mensagem = "EXCELENTE"
    break
    case(peformance >= 70):
    mensagem = "MUITO BOM"
    break
    case(peformance >= 50):
    mensagem = "BOM"
    break
    default:
    mensagem = "MUITO RUIM"
    
}

questionsContainer.innerHTML = 
`
<p>

    VOCÊ ACERTOU ${totalCorrect} DE ${totalQuestion} QUESTÕES 
    <span>RESULTADO: ${mensagem}</span> 
    <button onclick=window.location.reload() class='button'>
        REFAZER TESTE
    </button>

</p>

`
   
}










const questions = [
    {
        question:"qual a capital do brasil",
        answers:[
            {text:"RIO DE JANEIRO",correct:false},
            {text:"SÃO PAULO",correct:false},
            {text:"BRASILIA",correct:true},
            {text:"FORTALEZA",correct:false}
        ]
    },  
    {
        question:"QUEM FOI STEVE JOBS",
        answers:[
            {text:"PRESIDENTE",correct:false},
            {text:"ESCRITOR",correct:false},
            {text:"PROGRAMADOR",correct:true},
            {text:"CIENTISTA",correct:false}
        ]
    },  
    {
        question:"QUAL NOME DA MARCA DE CARRO DE ALON MUSK?",
        answers:[
            {text:"FERRARY",correct:false},
            {text:"TOYOTA",correct:false},
            {text:"TESLA",correct:true},
            {text:"HILDAW",correct:false}
        ]
    },
    {
        question:"QUEM É O PRESIDENTE DO (STF)?",
        answers:[
            {text:"LUIS BARROSO",correct:true},
            {text:"GILMAR MENDES",correct:false},
            {text:"ALEXANDRE MORAIS",correct:false},
            {text:"DIAS TOFFOLI",correct:false}
        ]
    },
    {
        question:"QUEM É O MINISTRO DA EDUCAÇÃO?",
        answers:[
            {text:"BRUNO PACHECO",correct:false},
            {text:"CAMILO SANTANA",correct:true},
            {text:"CLAUDIO BASTO",correct:false},
            {text:"ROBERTO PEZÃO",correct:false}
        ]
    },
    {
        question:"QUAL CARTOR(A) TEM MAIS GRAMMY?",
        answers:[
            {text:"MICHAEL JACKSON",correct:false},
            {text:"MATONA",correct:false},
            {text:"PRINCE",correct:false},
            {text:"BEYOCÉ",correct:true}
        ]
    },
    {
        question:"EM QUE ANO O HOMEN PISOU NA LUA",
        answers:[
            {text:"1963",correct:false},
            {text:"1973",correct:false},
            {text:"1953",correct:false},
            {text:"1969",correct:true}
        ]
    },
    {
        question:"QUANTOS ANOS TEM A CONSTITUIÇÃO DO BRASIL",
        answers:[
            {text:"45 ANOS",correct:false},
            {text:"35 ANOS",correct:true},
            {text:"65 ANOS",correct:false},
            {text:"25 ANOS",correct:false}
        ]
    },
    {
        question:"O PRIMEIRO PRESIDENTE DO BRASIL FOI",
        answers:[
            {text:"JANIO QUADROS",correct:false},
            {text:"AMILTON CRUZ",correct:false},
            {text:"SARNEI",correct:false},
            {text:"DEODORO FONSECA",correct:true}
        ]
    },
    {
        question:"QUANTOS ESTADOS O BRASIL TEM",
        answers:[
            {text:"36",correct:false},
            {text:"46",correct:false},
            {text:"33",correct:false},
            {text:"26",correct:true}
        ]
    },
    {
        question:"QUAL A CAPITAL DO SERGIPE",
        answers:[
            {text:"ARACAJU",correct:true},
            {text:"PARANA",correct:false},
            {text:"PERNABUCO",correct:false},
            {text:"RECIFE",correct:false}
        ]
    },
    {
        question:"QUAl MURALHAS JOSUÉ DERRUBOU",
        answers:[
            {text:"CHINA",correct:false},
            {text:"EGITO",correct:false},
            {text:"BERLIM",correct:false},
            {text:"JERICÓ",correct:true}
        ]
    },
    {
        question:"QUEM FOI RESSUSCITADO POR JESUS",
        answers:[
            {text:"ABRÃO",correct:false},
            {text:"IZAQUE",correct:false},
            {text:"MALAQUIAS",correct:false},
            {text:"LÁZARO",correct:true}
        ]
    },

       
]

   

