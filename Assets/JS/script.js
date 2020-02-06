// we strat by grapping all the various ID
var introPara = document.getElementById("intro");
var startButton = document.getElementById('start');
var quizTimer = document.getElementById('qtimer');
var showTimer = document.getElementById('timer');
var quizQuestion = document.getElementById('questions');
var corAnswer = document.getElementById('correctans');
var quizScore = document.getElementById('score');
var quizStorage = document.getElementById("name-input");



// Remember MyQUestions array with objects to hold the questions, answers and correctanswer
// format {question: a question, answers: an answer, correctAnswer: the correct answer
console.log(Myquestions);
console.log ("the number of questions is " + Myquestions.length);
// to be used to generate a random question from array of questions
var  shuffleQuestions; 
var currentQuestionsIndex;
// initialises the score to 0. 
var score = 0;
// interval to display each question in seconds
var initialTimerInterval = 3;




//on start, launches the quizGenerator
startButton.addEventListener("click", quizGenerator());

function answerQuestion (){

}

function showQuestion () {

}

//gets next questions
function getNextQuestions() {
  //gets the first question 
  console.log(shuffleQuestions[currentQuestionsIndex]);
  // call showQuestion to get it
  showQuestion (shuffleQuestions[currentQuestionsIndex])
}



//print scores
function printScores (){

}

//stores names and score 
function logPlayerData() {

}

// builds the quizz

function quizGenerator(){
  //  event.preventDefault();??

  console.log("quizz launched");
  //hide the start button and intro paragraph once the quiz starts
  startButton.classList.add("hide")
  introPara.classList.add("hide")

  // // dispplays timer
  quizTimer.classList.remove("hide")
  
  // // initialises timer that will decrement and score will increment
  // // 3 seconds for each question - any number method to apply here?
  var initialTimer = initialTimerInterval*Myquestions.length; 
  showTimer.textContent = initialTimer;
  console.log ("initial timer " + initialTimer);
  // pick a question by randon in MyQuestions and store it in shuffleQuestions
  shuffleQuestions = Myquestions.sort(() => Math.random()- .5)
  console.log(shuffleQuestions);
  // initialise question index to 0 to get first question
  currentQuestionsIndex = 0;

  ////THEN a timer starts and I am presented with a question
  showQuestion ();
  //WHEN I answer a question, it returns if the answer  is true or not
  answerQuestion ();
  var timer = 0;
  var score = 0;
  if (answerQuestion) {
    //timer substracted
    timer = initialTimer - initialTimerInterval;
    console.log(timer);
    score +=
    // displays timer
    showTimer.textContent = timer;
    getNextQuestions() //js9
  }
  else {
    clearInterval(); //??
  }
  //WHEN all questions are answered or the timer reaches 0
  //call all done to log in name
  logPlayerData();

  // call display score to display score
  console.log(score);
  printScores(score);

  // game is over

}
