// we strat by grapping all the various ID
var introPara = document.getElementById("intro");
var startButton = document.getElementById('start');
var quizTimer = document.getElementById('qtimer');
var showTimer = document.getElementById('timer');
var showCard = document.getElementById("cardbox")
var questionElement = document.getElementById('questionsbox');
var currentQuestion = document.getElementById("question");
var corAnswer = document.getElementById('correctans');
var quizScore = document.getElementById('score');
var quizStorage = document.getElementById("name-input");



// Remember QUestions array with objects to hold the questions, answers and correctanswer
// format {question: a question, answers: an answer, correctAnswer: the correct answer
console.log(Questions);
console.log ("the number of questions is " + Questions.length);
// to be used to generate a random question from array of questions

//var currentQuestion = [];
var currentQuestionsIndex = 0;

// initialises the score to 0. 
var score = 0;
// interval to display each question in seconds
var initialTimerInterval = 3;
var timer = 0;


//displays a question with ID index 
function showQuestion() {

  var currentContent = Questions[question][currentQuestionsIndex];
  // show the first question
  console.log(currentContent);
  currentQuestion.textContent = currentContent;
 }
  

//on start, launches the quizGenerator
startButton.addEventListener("click", quizGenerator);

// starts the quizz

function quizGenerator(){
  //event.preventDefault();??
  //
  console.log("quizz launched");
  //hide the start button and intro paragraph once the quiz starts
  startButton.classList.add("hide")
  introPara.classList.add("hide")
  // // initialises timer that will decrement and score will increment
  // // 3 seconds for each question - any number method to apply here?
  var initialTimer = initialTimerInterval*Questions.length; 
  showTimer.textContent = initialTimer;

  console.log ("initial timer " + initialTimer);
  // pick a question by randon in MyQuestions and store it in shuffleQuestions
  
  console.log(Questions);
  // initialise question index to 0 to get first question
  currentQuestionsIndex = 0;
   // dispplays timer
  quizTimer.classList.remove("hide")
  // display the box for question element
  showCard.classList.remove("hide")
  showQuestion(currentQuestionsIndex);
  
  //setNextQuestion()
}



// //print scores
// function printScores (){

// }

// //stores names and score 
// function logPlayerData() {

// }



  
  

  

  

  
  // ////THEN a timer starts and I am presented with a question
  // showQuestion ();
  // //WHEN I answer a question, it returns if the answer  is true or not
  // answerQuestion ();
  // var timer = 0;
  // var score = 0;
  // if (answerQuestion) { // and timer???
  //   //timer substracted
  //   timer = initialTimer - initialTimerInterval;
  //   console.log(timer);
  //   score +=
  //   // displays timer
  //   showTimer.textContent = timer;
  //   getNextQuestions() //js9
  // }
  // else {
  //   clearInterval(); //??
  // }
  // //WHEN all questions are answered or the timer reaches 0
  // //call all done to log in name
  // logPlayerData();

  // // call display score to display score
  // console.log(score);
  // printScores(score);

  // game is over


