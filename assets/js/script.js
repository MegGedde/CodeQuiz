var startBtn = document.querySelector("#generate"); 
var timerEl = document.querySelector("#timer");
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#options");
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  //get questions from array

var startQuiz = function() {
    start.style.display = "none";
    startTime();
    getQuestion();
    questions.style.display = "block"
      };

var runningQuestion = 0;
var lastQuestion = myQuestions.length -1;

var getQuestion = function() {
    for (var i = 0; i < myQuestions.length; i++) {
        myQuestions[i].question = questionName;
        myQuestions[i].answers = questionAnswers;
        myQuestions[i].correctAnswer = questionCorrect;
      }
    questionTitle.append(questionName);
    questionOptions.appendChild(questionAnswers);
}

questionAnswers.addEventListener("click", checkAnswer);

var checkAnswer = function() {
    if( answer == questions[runningQuestion].correct)
    {//go to next question and display correct
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            getQuestion();
        } else {
            gameOver();}
    } else {
        timeLeft - 10;
        //display incorrect
        if (timeLeft < 1) {
            gameOver();
        } else {
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            getQuestion();
        } else {
            gameOver();
    }}
}
};

var startTime = function() {
        var timeLeft = 60;
    
        var timeInterval = setInterval(function () {
          if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
          } else {
            timerEl.textContent = 'Time is up';
            clearInterval(timeInterval);
            gameOver();
          }
        }, 1000);
      }

var gameOver = function() {
    // clear page contents
    // edit title and message
    // create write in box that saves to local storage
    // save score in write in box?
    if (timeLeft > 0) {
        something-.textContent = 'Your score is ' + timeLeft;
    } else {
        something -.textContent = 'You do not have a score as you have lost the game.';
    }
}      

startBtn.addEventListener("click", startQuiz);