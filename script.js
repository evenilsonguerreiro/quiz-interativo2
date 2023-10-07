let start = document.querySelector('.start-question')
let questionGet = document.querySelector('.question-container')
let answersContainer = document.querySelector('.answers-container')
let questionText = document.querySelector('.question')

start.addEventListener('click', startGame)

let currentQuestionindex = 0

function startGame(){
    start.classList.add('hide')
    questionGet.classList.remove('hide')
    displayNextquestion()
}

function displayNextquestion(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild)
    }
    questionText.textContent = questions[currentQuestionindex].question
    questions[currentQuestionindex].answers.forEach(answer =>{
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('button',"answer")
        newAnswer.textContent = answer.text
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click',selectAnswer)
    })
    

}
function selectAnswer(event){
    const answerClicked = event.target
    if(answerClicked.dataset.correct){
        document.body.classList.add("correct")
    }else {
        document.body.classList.add("incorrect")
    }

}




const questions = [
    {
        question:"qual a capital do brasil",
        answers:[
            {text:"RIO DE JANEIRO",correct:"false"},
            {text:"SÃO PAULO",correct:"false"},
            {text:"BRASILIA",correct:"true"},
            {text:"FORTALEZA",correct:"false"}
        ]
    },    
]
   

