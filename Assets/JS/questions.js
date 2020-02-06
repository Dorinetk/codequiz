//holds the array of questions 
// MyQuestions is an array with objects to hold the questions, answers and correctanswer
// object format  for each entry: {question: a question, answers: [t{ext:an answer, correct: true or false}]


var Myquestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [ 
        {text: "<js>", correct: false},
        {text: "<scripting>", correct: false},
        {text:"<script>", correct: true}
      ]
    },
    {
        question: "Which of the following is not an assignment operator in JS?",
        answers: [
            {text: "+", correct: true},
        {text: "=", correct: false},
        {text:"+=", correct: false}
    ]
    },
      {
        question: "What is the correct syntax for referring the JS file in HTML document?",
        answers: [
            {text: "<script src=...>", correct: true},
        {text: "<script href=...>", correct: false},
        {text:"<script name=...>", correct: false}
        ]
      }
    ];



