const quizForm = document.querySelector(".form-for-quiz")
const submitAnswerBtn = document.querySelector("#submit_button")
const showOutput = document.querySelector(".output-info-font")

const arrayOfCorrectAnswers = ["90°", "right angled","one right angle","Equilateral triangle","100°"];


function calculateScore(){
    let index = 0;
    let score = 0;

    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value === arrayOfCorrectAnswers[index]){
            score = score + 1
        }
        index = index + 1
    }
    console.log(index)
    console.log(score)
    showOutput.innerText = "You have scored "+score
}

submitAnswerBtn.addEventListener('click', calculateScore)


