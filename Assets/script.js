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
const userChoices = document.getElementById('choices');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainEl = document.querySelector("#main");
let introSection = document.querySelector('.Intro-section');
let questionsContent = document.querySelector('.questions-content');
let addInitials = document.querySelector('.add-initials');
let showHighScores = document.querySelector('.show-high-scores')
let time = document.querySelector('.time')
var submit = document.getElementById("submitbtn");


let initials = document.getElementById('initials')

var timer = 90;
var score = 0;

var currentQuestionIndex = 0;

var timerEl = document.getElementById('countdown');

var timerInterval;

console.log(window);
console.log(document.head);
console.log(document.documentElement);

let choice1 = document.getElementById("choice-1");
let choice2 = document.getElementById("choice-2");
let choice3 = document.getElementById("choice-3");
let choice4 = document.getElementById("choice-4");



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
        answer: "==="
    }
  
   ];
   console.log(questions);

   function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      timer--;
      time.textContent = timer + " seconds left.";
  
      if(timer <= 0) {
        // Stops execution of action at set interval
        // clearInterval(timerInterval);
        // Calls function to create and append image
        endQuiz()
      }
    }, 1000);
  }

  function sendMessage () {
    time.textContent = "oopse"
  }

   startButton.addEventListener('click', startB) 

   function startB () {
    introSection.classList.add("hide");
    questionsContent.classList.remove("hide");
    startGame ();
    setTime ();
   }

function startGame () {
   
    // introSection.classList.add('hide')
    // questionContentElement.classList.remove("hide")

    title.textContent = questions[currentQuestionIndex].text;

    
    choice1.textContent = questions[currentQuestionIndex].choice1;
    choice2.textContent = questions[currentQuestionIndex].choice2;
    choice3.textContent = questions[currentQuestionIndex].choice3;
    choice4.textContent = questions[currentQuestionIndex].choice4;



}



function showNext() {
    // increment the quiestion index
    currentQuestionIndex = currentQuestionIndex + 1;
 console.log("showNext");
 if (currentQuestionIndex >= questions.length) {
    // clearInterval(timerInterval);
    // Calls function to create and append image

    endQuiz ();
    return;
 }
   

    console.log(choice1.textContent);

   startGame();
}

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
        timer = timer - 5;
    }

    // What next (?)
    // WE show the next question
    showNext()
})



function endQuiz () {
    questionsContent.classList.add("hide");
    addInitials.classList.remove("hide");
    clearInterval(timerInterval);
    score = timer;
    console.log(timer);
    sendMessage();

//timer runs out
//all questions are answered
};

var userInitials = document.getElementById('initials')

submit.addEventListener("click", function(){
    addInitials.classList.add("hide");
    showHighScores.classList.remove("hide");

    var userInput = {
        initials: userInitials.value.trim(),
        score: timer
    }

    localStorage.setItem("userInput", JSON.stringify(userInput))
    console.log(userInput);
    // var LAFI = userInitials.value;
    // console.log(LAFI);
    // score = timer;
    // console.log(timer)
    // localStorage.setItem(LAFI, score);
    //probably will be in a for loop - will take out and put in endquiz or make new funcrion
    //json(stringify and parse)
    //let newscore = 
    // push
GetHighScores();
})



function GetHighScores() {
    var highScores = localStorage.getItem('nl');
    var finalScore = document.getElementById("high-scores");
    var listEl = document.createElement("li");
    listEl.textContent = highScores;
    finalScore.append(listEl);
    console.log(`${key}: ${value}`)
}



//   const type = JSON.parse(localStorage.getItem(TYPE_MAPPING));

//   for (const [key, value] of Object.entries(type)) {
//   console.log(`${key}: ${value}`);
//    }


// function GetHighScores () {
 
// const currentColor = localStorage.getItem('bgcolor');
// const currentFont = localStorage.getItem('font');
// const currentImage = localStorage.getItem('image');

// document.getElementById('bgcolor').value = currentColor;
// document.getElementById('font').value = currentFont;
// document.getElementById('image').value = currentImage;