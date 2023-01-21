// I need a button that starts a function filled with quiz questions
//  I need a timer that starts as soon as I start the game
//  I need a list of questions with multiple choice buttons. When a choice is selected it is stored and proceeds to the next question
// I need a function that subtracts time from the clock with every incorrect question answer
// when all questions are answered or the timer runs out the quiz is over
// I need a score board showing high score that is shown after the game is over with a prompt and submit button to add the players score in order (preclass APIs day 1)
// I am then presented with updated high scores and options to go back or clear high scores



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('#answer-buttons')
const headerElement = document.getElementById('#header-content')
var secondsLeft = 90;

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main")



// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + "seconds left.";

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//         }
//     }, 1000);
// }

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

function startGame() {
  // startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  // questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
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
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the average air speed velocity of an unladen swallow?',
    answers: [
      { text: 'about 24 miles per hour', correct: true },
      { text: 'blue', correct: false },
      {text: 'African or European?', correct: false},
    ]
  },
  {
    question: 'What\'s the knights of nee\'s weakness?',
    answers: [
      { text: 'A shrubbery', correct: false },
      { text: 'it', correct: true },
      { text: 'is', correct: false },
      { text: 'a what?', correct: false }
    ]
  },
  {
    question: 'If she weighs the same as a duck she is a ...?',
    answers: [
      { text: 'piece of wood', correct: false },
      { text: 'witch', correct: true },
      { text: 'great gravy', correct: false },
      { text: 'very small rocks', correct: false }
    ]
  },
  {
    question: 'What number shalt thou count to?',
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '5', correct: false}
    ]
  }
]