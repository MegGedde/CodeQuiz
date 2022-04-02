var startBtn = document.querySelector("#generate"); 
var timerEl = document.querySelector("#timer");
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#options");
var feedbackAnswer = document.querySelector('#feedback');
var submitBtn = document.querySelector('.submitbtn');
var initial = document.querySelector('#initials');
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
    },
    { 
      title: "Javascript is an _____ language?",
      choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
      answer: "Object-Oriented"
    },
    { title: "Which of the following methods is used to access HTML elements using Javascript?",
      choices: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the above"],
      answer: "Both A and B"
    },
    { 
      title: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],
      answer: "const"
    },
    { title: "What keyword is used to check whether a given property is valid or not?",
      choices: ["in", "is in", "exists", "lies"],
      answer: "in"
    },
    { 
      title: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      choices: ["Boolean", "Undefined", "Object", "Integer"],
      answer: "Object"
    },
    { title: "Which function is used to serialize an object into a JSON string in Javascript?",
      choices: ["stringify()", "parse()", "convert()", "None of the above"],
      answer: "stringify()"
    },
    { 
      title: "Which of the following are closures in Javascript?",
      choices: ["Variables", "Functions", "Objects", "All of the above"],
      answer: "All of the above"
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
      timeLeft -= 10;
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
}      

var save = function () {
  // save score
   var initials = initial.value.trim();
  // format new score object for current user
  var highscores =
  JSON.parse(window.localStorage.getItem("highscores")) || [];
  
  var newScore = {
      score: timeLeft,
      initials: initials
  };
   
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

     // redirect to next page
     window.location.href = "highScores.html";
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", save);









