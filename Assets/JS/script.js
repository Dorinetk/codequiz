// we strat by grapping all the various ID

var startButton = document.getElementById('start');
var quizTimer = document.getElementById('timer');
var quizQuestions = document.getElementById('questions');
var submitButton = document.getElementById("submit");
var quizAnswer = document.getElementById('answer');
var quizScore = document.getElementById('score');


// 

// array to hold the questions, answers and correctanswer
var myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
        a: "<js>",
        b: "<scripting>",
        c: "<script>"
      },
      correctAnswer: "c"
    },
    {
        question: "Which of the following is not an assignment operator in JS? ",
        answers: {
          a: "+",
          b: "=",
          c: "+="
        },
        correctAnswer: "a"
      },
      {
        question: "What is the correct syntax for referring to an external script called "xxx.js"?",
        answers: {
          a: "<script src=...>",
          b: "<script href=...>",
          c: "<script name=...>",
          d: "<script alt=...>"
        },
        correctAnswer: "d"
      }
    ];


// initialises timer will decrement and score will increment

var timer = 5;
var score = 0;




//on start, launches the quizz
startButton.addEventListener("click", buildQuiz);
// hide the start button??
// builds the quizz

function buildQuiz(){
  
  
}

//Displays the result in the text area
function showResults(){

}








// on submit, show results
// further step will be to have all questions as submit buttons
submitButton.addEventListener('click', showResults);
