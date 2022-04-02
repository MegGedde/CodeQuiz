var startBtn = document.querySelector("#generate"); 
var timerEl = document.querySelector("#timer");
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#options");
var feedbackAnswer = document.querySelector('#feedback');
var setNumber = 0;
var timeLeft = 60;
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

// var lastQuestion = myQuestions.length -1;

var getQuestion = function() {
    questionTitle.textContent = "";
    questionOptions.textContent = "";
    // for (let i = 0; i < myQuestions.length; i++) {
      var question = document.createElement("h3");
      //get current question from array
      var currentQuestion = myQuestions[setNumber];
    //update title on site with current question
      question.textContent = currentQuestion.title;
      questionTitle.append(question);
      // }
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
        // edit title and message
    // create write in box that saves to local storage
    // save score in write in box?
    //clearInterval(timeInterval);
    // clear page contents
    questionTitle.textContent = "Your score is" + timeLeft;
    questionOptions.textContent = "";

    // if (timeLeft > 0) {
    //     something-.textContent = 'Your score is ' + timeLeft;
    // } else {
    //     something -.textContent = 'You do not have a score as you have lost the game.';
    // }
}      

startBtn.addEventListener("click", startQuiz);
// on click, validate if it is correct, then go to next question
//onclick.gotonextquestion event, re-render html to get question
//have all answers as an array and the correct answer a common id?
//event.target.value === questionarray.(if button text equals what we deem as the correct answer)
// startBtn.addEventListener("click", function() {
//create HTML elements to hold the data values
// populateQuestion();
// });

// var populateQuestion = function() {
//   questionTitle.textContent = "";
//   for(let i = 0; i < myQuestions.length; i++) {
//   var itemData = document.createElement("button");
//   itemData.textContent = myQuestions[setNumber][i]
//   //itemData.textContent = myQuestions[0][i]   ???
//   questionTitle.append(itemData)
//   //console.log("hi")
// }
// setNumber++;
// };


// questionTitle.addEventListener("click", function() {
//   // delete current content

//   //add new question
//   populateQuestion();
// });

