var timeEl = document.querySelector(".time");

var topscores = [];
// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }

//     }, 1000);

// Psuedo Code

// I need a button that starts a function filled with quiz questions
//  I need a timer that starts as soon as I start the game
//  I need a list of questions with multiple choice buttons. When a choice is selected it is stored and proceeds to the next question
// I need a function that subtracts time from the clock with every incorrect question answer
// when all questions are answered or the timer runs out the quiz is over
// I need a score board showing high score that is shown after the game is over with a prompt and submit button to add the players score in order (preclass APIs day 1)
// I am then presented with updated high scores and options to go back or clear high scores

// stack overflow flip through questions one at a time
// var myQuiz = [
//     {
//     ques: "What is the capital of California?",
//     choices: ["Los Angeles", "San Francisco", "Sacramento", "San Diego", "Oakland"],
//     correctAnswer: "Sacramento"
//     },
//     {
//     ques: "What is the capital of Pennsylvania?",
//     choices: ["Pittsburgh", "Philadelphia", "Harrisburg", "Erie"],
//     correctAnswer: "Harrisburg"
//     },
//     {
//     ques: "What is the capital of Florida?",
//     choices: ["Tallahassee", "Tampa", "Miami", "Jacksonville"],
//     correctAnswer: "Tallahassee"
//     },
//     {
//     ques: "What is the capital of Georgia?",
//     choices: ["Augusta", "Atlanta", "Savannah"],
//     correctAnswer: "Atlanta"
//     }
//  ]; //end of myQuiz array of objects

//  var questionIndex = -1; // Not started

// function nextQuestion() {
// document.body.innerHTML = '';
//   ++questionIndex;
//     document.write(myQuiz[questionIndex].ques + "<br />");

//         for (var j=0; j < myQuiz[questionIndex].choices.length; j++) {
//         document.write("<input type=radio id=myRadio name=radAnswer>" + myQuiz[questionIndex].choices[j] + "<br />");
//         }

//    if (questionIndex < (myQuiz.length - 1)) {
//     var nextButton = document.createElement("input");
//     nextButton.type = "button";
//     nextButton.value = "Next question";
//     nextButton.addEventListener('click', nextQuestion);
//     document.body.appendChild(nextButton);
//    }
// };

// nextQuestion();

// stackoverflow subtract time for wrong answer

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

// keeping score
// https://stackoverflow.com/questions/66308020/how-to-add-a-score-function-to-my-quiz-using-javascript

//Questions to be asked:

// what is the average air speed velocity of an unladen swallow?
// (a) about 24 miles per hour; (b) I don't know that; (c) African or European?;
// what's the knight's of nee weakeness?
// (a) A shrubbery (b) A what? (c) it (e) is;
// If she ways the same as a duck she is a ...?
//(a) piece of wood (b) witch (c) great gravy (e) very small rocks:
// What number shalt thou count to?
//(a) 2 (b) 3 (5);
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
// const buttons = document.querySelectorAll('.btn');

let shuffledQuestions, currentQuestionIndex;

let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  console.log(buttons, "buttons");
  // for (i=0; i<=3; i++) {
  //         console.log(buttons[i]);
  //         buttons[i].textContent = "test";
  //                }

  // }
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
     });
}

function resetState() {
        clearStatusClass(document.body)
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
        })
if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
}
}

// function setStatusClass(element, correct) {
//         clearStatusClass(element)
//         if (correct) {
//                 element.classList.add('correct')
//         } else {
//                 element.classList.add('wrong')
//         }
// }

const questions = [
  {
    question: "what is the average air speed velocity of an unladen swallow?",
    answers: [
      { text: "about 24 miles per hour", correct: true },
      { text: "I don't know that", correct: false },
      { text: "African or European?", correct: false },
      { text: "Other", correct: false },
    ],
  },

  {
    question: "how to do this?",
    answers: [
      { text: "a", correct: true },
      { text: "b", correct: false },
      { text: "c", correct: false },
      { text: "d", correct: false },
    ],
  },
];
// console.log(questions.answers[0], "questions.answers[i]");

// console.log(button);
