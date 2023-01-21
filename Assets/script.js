// I need a button that starts a function filled with quiz questions
//  I need a timer that starts as soon as I start the game
//  I need a list of questions with multiple choice buttons. When a choice is selected it is stored and proceeds to the next question
// I need a function that subtracts time from the clock with every incorrect question answer
// when all questions are answered or the timer runs out the quiz is over
// I need a score board showing high score that is shown after the game is over with a prompt and submit button to add the players score in order (preclass APIs day 1)
// I am then presented with updated high scores and options to go back or clear high scores




const startButton = document.getElementById('start-btn');
const headerContent = document.getElementById('header-content');
const questionContentElement = document.getElementById('question-content');
const title = document.getElementById('title');
const userChoices = document.querySelector('.choices');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainEl = document.querySelector("#main");
var timer = 90;
var currentQuestionIndex = 0;

var timerEl = document.getElementById('countdown');

console.log(window);
console.log(document.head);
console.log(document.documentElement);

// With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an element by its ID. Generally, you should opt for the selector that most clearly gets the job done.


//timer
// function countdown() {
//     var timeLeft = 90;
// console.log(timeLeft);

//     var timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             timerEl.textContent = timeLeft + ' seconds remaining';
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             timerEl.textContent = timeLeft + ' second remaining';
//             timeLeft--;
//         } else if (timeLeft === 0) {
           
//             endQuiz();
//         } if (currentQuestionIndex+1 === questions.length) {

//             endQuiz();
            
//         }
//     }, 1000)
// }


// (function() {
//     var sec = 60;
//     function startTimer(){
//         console.log('timer suppose to go')
//         var timer = setInterval(function(){
//             sec--;
//             document.getElementById('timerDisplay').innerHTML='00:'+sec;
//             if (sec < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
//     document.getElementById('incorrect').addEventListener('click', function() {
//         sec -= 5;
//         document.getElementById('timerDisplay').innerHTML='00:'+sec;
//     });
//     startTimer();
// })();
// <div id="timerDisplay"></div>
// <button id="incorrect">Simulate Incorrect Answer</button>


// var endQuiz = function () {

// }


var questions = [
    {
        text: "What is the average air speed velocity of an unladen swallow?",
        choice1: "about 24 miles per hour",
        choice2: "I don't know",
        choice3: "African or European?",
        choice4: "Other",
        answer: "about 24 miles per hour"
    },
    {
        text: "how to do this?",
        choice1: 'not sure',
        choice2: '2',
        choice3: 'fun',
        choice4: 'meh',
        answer: "2"
    },
    {
        text: "What operator is used to compare a value or variable?",
        choice1: "=",
        choice2: "===",
        choice3: "#",
        choice4: "<<",
        answer: "2"
    }
   ];
   console.log(questions);

function startGame () {
    console.log("click");

    // what do we want to happen ?
    // we hide our start button
    startButton.classList.add('hide');

    // we grab the first question
    // we display the text content
    title.textContent = questions[currentQuestionIndex].text;

    // lets create new buttons / li 
    let choice1 = document.createElement('li');
    choice1.setAttribute('id', 'choice-1');
    choice1.classList.add('user-choice');
    choice1.textContent = questions[currentQuestionIndex].choice1;
  //  choice1.addEventListener('click', function() { // code })

    // lets create new buttons / li 
    let choice2 = document.createElement('li');
    choice2.setAttribute('id', 'choice-2');
    choice2.classList.add('user-choice');
    choice2.textContent = questions[currentQuestionIndex].choice2;
    
    console.log(choice1);
    // ADD IT TO OUR DOM
    userChoices.append(choice1, choice2);
   // userChoices.append(choice2);

    // we display answer choices (button)
    // user makes a choice --> we capture the input
    userChoices.addEventListener('click', function(event) {
        // console.log(event);
        console.log(event.target);
        console.log(event.target.value);

        // we need to pull out the data
        let chosen = event.target.textContent;
        console.log(chosen)


        // chcek the user choice vs the correct answer 
        if(chosen == questions[currentQuestionIndex].answer) {
            console.log("Correct");
            // code to run if corrext
        } else {
            // code to run if incorrext
            console.log("Wrong");
        }

        // What next (?)
        // WE show the next question
        showNext()
    })
}

startButton.addEventListener('click', startGame)

function showNext() {
    // increment the quiestion index
    currentQuestionIndex = currentQuestionIndex + 1;

    // we need to reset the DOM 
    document.getElementById("choices").reset();

    // run show question
    startGame();
}