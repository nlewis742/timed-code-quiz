const startButton = document.getElementById('start-btn');
const headerContent = document.getElementById('header-content');
const questionContentElement = document.getElementById('question-content');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainEl = document.querySelector("#main");

var timerEl = document.getElementById('countdown');


// With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an element by its ID. Generally, you should opt for the selector that most clearly gets the job done.


//timer
function countdown() {
    var timeLeft = 90;
console.log(timeLeft);

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if (timeLeft === 0) {
           
            endQuiz();
        } if (currentQuestionIndex+1 === questionArray.length) {

            endQuiz();
            
        }
    }, 1000)
}