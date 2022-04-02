var startBtn = document.querySelector("#generate"); 
var timerEl = document.querySelector("#timer");
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#options");
var feedbackAnswer = document.querySelector('#feedback');
var setNumber = 0;
var timeLeft = 60;
var timeInterval

var myQuestions = [
  {
    title: "Commonly Used data types DO NOT include:",
    choices: ["strings", "alerts", "booleans", "numbers"],
    answer: "alerts"
},
    { 
      title: "Which one of these is a JavaScript package manager?",
      choices: ["Node.js", "TypeScript", "npm"],
      answer: "npm"
    },
    { title: "Which tool can you use to ensure code quality?",
      choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
      answer: "ESLint"
    }
  ];

  //get questions from array

var startQuiz = function() {
    start.style.display = "none";
    startTime();
    getQuestion();
    document.getElementById("questionTitles").style.display = "block";
      };


var getQuestion = function() {
  //reset shown question and answers
    questionTitle.textContent = "";
    questionOptions.textContent = "";

      var question = document.createElement("h3");
      //get current question from array
      var currentQuestion = myQuestions[setNumber];
    //update title on site with current question
      question.textContent = currentQuestion.title;
      questionTitle.append(question);
      
      //loop over answer choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var options = document.createElement("button");
      options.setAttribute("class", "btn");
      options.setAttribute("value", choice);
  
      options.textContent = i + 1 + ". " + choice;
      questionOptions.append(options);
      // attach click event listener to each choice
      options.onclick = checkAnswer;
    });
    
}

var checkAnswer = function() {
    if(this.value !== myQuestions[setNumber].answer)
    {//display incorrect and subtract time and display incorrect
      timeLeft -= 15;
      if (timeLeft < 0) {
        timeLeft = 0
      }
      timerEl.textContent = 'Time: ' + timeLeft;
      feedbackAnswer.textContent = "Incorrect";
    } else {
      feedbackAnswer.textContent = "Correct";
    }
    setNumber++;

    // move on to next question or end game if last question
    if (setNumber === myQuestions.length) {
      gameOver()
    } else {
      getQuestion();
    }
};

var startTime = function() {
        timeInterval = setInterval(function () {
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
    //stop timer
    clearInterval(timeInterval);
    // clear page contents and add end page contents
    document.getElementById("questionTitles").style.display = "none";
    document.getElementById("scoring").style.display = "block";
    document.getElementById("finalScore").textContent = "Your score is " + timeLeft;
     // save score 
     //var finalScore = document.querySelector('#score')
}      

startBtn.addEventListener("click", startQuiz);










