let questionTime = 30
let resultTime = 10
let countDown
let currQuestion = 0

const quizQuestions = [
  {
    question: `Taylor was born in which year?`,
    answers: {
      a: `1994`,
      b: `1989`,
      c: `1990`,
      d: `1986`,
    },
    correctAnswer: `b`
  },
  {
    question: `Which celebrity inspired Taylor to write her song, "All Too Well"?`,
    answers: {
      a: `Harry Styles`,
      b: `Joe Jonas`,
      c: `Jake Gyllenhaal`,
      d: `Calvin Harris`,
    },
    correctAnswer: `c`
  },
  {
    question: `Complete the following lyrics: "You got that James Dean daydream look in your eye, and I've got that ____ lip classic thing that you like"`,
    answers: {
      a: `blue`,
      b: `red`,
      c: `pink`,
      d: `black`,
    },
    correctAnswer: `b`
  },
  {
    question: `Which of these was Taylor's first pop album?`,
    answers: {
      a: `1989`,
      b: `Red`,
      c: `Reputation`,
      d: `Speak Now`,
    },
    correctAnswer: `a`
  },
  {
    question: `Which is NOT a real title for a Taylor Swift song?`,
    answers: {
      a: `Style`,
      b: `State of Grace`,
      c: `Fearless`,
      d: `Wicked Games`,
    },
    correctAnswer: `d`
  },
  {
    question: `The song "Getaway Car" is in which album?`,
    answers: {
      a: `Red`,
      b: `1989`,
      c: `Reputation`,
      d: `Fearless`,
    },
    correctAnswer: `c`
  },
  {
    question: `In 2010, Taylor began selling her very own line of perfumes. What is the name of one perfume that she sold?`,
    answers: {
      a: `Wonderstruck`,
      b: `Enchantress`,
      c: `Princess`,
      d: `Graceful Red`,
    },
    correctAnswer: `a`
  },
  {
    question: `Which online streaming service is the "Reputation Stadium Tour" featured on?`,
    answers: {
      a: `Hulu`,
      b: `Apple Music`,
      c: `Netflix`,
      d: `YouTube Premium`,
    },
    correctAnswer: ``
  },
  {
    question: `Which celebrity is "King of My Heart" about?`,
    answers: {
      a: `Joe Alwyn`,
      b: `Jake Gyllenhaal`,
      c: `Tom Hiddleston`,
      d: `Harry Styles`,
    },
    correctAnswer: `a`
  },
  {
    question: `The following are songs that Taylor has written for movies EXCEPT`,
    answers: {
      a: `Safe & Sound`,
      b: `Eyes Open`,
      c: `Sweeter Than Fiction`,
      d: `Getaway Car`,
    },
    correctAnswer: `d`
  },
]


const startTriviaTimer = () => {
  countDown = setInterval(function () {
    triviaTimer()
  }, 1000)
}

const triviaTimer = () => {
  document.querySelector(`.timer`).innerHTML = `Time Remaining: ${questionTime}`;
  questionTime--;
  if (questionTime <= 0) {
    clearInterval(countDown)
    questionTime = 30
    console.log(questionTime)
    displayResult()
  }
}

const startResultTimer = () => {
  countDown = setInterval(function () {
    resultTimer()
  }, 1000)
}

const resultTimer = () => {
  resultTime--;
  if (resultTime <= 0) {
    clearInterval(countDown)
    resultTime = 10
    console.log(resultTime)
  }
}

const displayQuestion = () => {
  startTriviaTimer()
  document.querySelector(`.timer`).style.display = `show`
  document.querySelector(`#start`).style.display = `none`
  document.querySelector(`.header`).innerHTML = `${quizQuestions[currQuestion].question}`
  document.querySelector(`#q1`).innerHTML = `${quizQuestions[currQuestion].answers.a}`
  document.querySelector(`#q2`).innerHTML = `${quizQuestions[currQuestion].answers.b}`
  document.querySelector(`#q3`).innerHTML = `${quizQuestions[currQuestion].answers.c}`
  document.querySelector(`#q4`).innerHTML = `${quizQuestions[currQuestion].answers.d}`
}

const checkAnswer = () => {
  document.addEventListener()
}

const displayResult = () => {
  resultTimer()
  document.querySelector(`.timer`).style.display = `none`
  document.querySelector('.quiz-section').innerHTML = ``
  const resultsSection = document.createElement(div)
  document.querySelector(`.results`).innerHTML = `Time's up! The correct answer was: ${quizQuestions[currQuestion].correctAnswer}`
  currQuestion++
  displayQuestion()
}

document.querySelector(`#start`).addEventListener(`click`, displayQuestion)




