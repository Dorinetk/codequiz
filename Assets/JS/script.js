// we strat by grapping all the various ID
var introPara = document.getElementById("intro");
var startButton = document.getElementById('start');
var quizTimer = document.getElementById('qtimer');
var showTimer = document.getElementById('timer');
var showCard = document.getElementById("cardbox")
var questionElement = document.getElementById('questionsbox');
var currentQuestion = document.getElementById("question");
var showrightAnswer = document.getElementById("correctans");
var holdrightAnswer = document.getElementById("geninfo");
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
var initialTimer;





// handles timer to show next question for 3s
function prepareNextQuestion() {
  var timeLeft = initialTimer;

  var countdownId = setInterval(function () {
    showTimer.textContent = timeLeft + " seconds remaining...";

    if (timeLeft === 0) {
      clearInterval(countdownId);
      countdownEl.textContent = "";
     
    }

    timeLeft--;
  }, 1000);
  //showQuestion();

}

//displays a question with answers to populate the buttons
function showQuestion(index) {
  
  //displays question at index and possible answers
 var index;
  currentQuestion.textContent = Questions[index];

  console.log(Questions[index]); 
  // displays questions for corresponding answer array
  for (i=0; i<Questions.length; i++){

    var currentAnsElement = document.createElement("button");
    currentAnsElement.textContent = Answers[index][i];
    questionElement.appendChild(currentAnsElement);
    currentAnsElement.setAttribute("class","btn");
    currentAnsElement.setAttribute("id","btn(i)");
  }
  
  //grab the button on which there is a click
  //call function to verify the right answer
  var currentSubmit = currentAnsElement.addEventListener("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    var result;
    for (i=0;i<Answers.length;i++){
      //check if answer is true to display
      if (JSON.stringify(Answers[i]) === JSON.stringify(Correctanswer[i])){
        currentSubmit = true;

        holdrightAnswer.classList.add("hide")
        showrightAnswer.textContent = "true";
        score++
      } else {
        currentSubmit = false;
      }
     console.log(currentSubmit);
     console.log(score);
    }
  });  
  
  //call function to set up timer and prepare next question
  prepareNextQuestion();
  
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
  //call this function to show questions
  showQuestion(currentQuestionsIndex);
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


