const quizData = [
  {
    question: "How old is Rafael?",
    a: "10",
    b: "17",
    c: "26",
    d: "100",
    correct: "d",
  },
  {
    question: "What is the best programming language?",
    a: "Cobol",
    b: "Fortran",
    c: "Javascript",
    d: "PHP",
    correct: "c",
  },
  {
    question: "Who is President of US?",
    a: "Biden",
    b: "Trump",
    c: "Rafael",
    d: "Kamala",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Cascading Style Sheet",
    b: "Hypertext Markup Language",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "b",
  },
  {
    question: "What year was Javascript launched?",
    a: "2020",
    b: "2016",
    c: "2000",
    d: "None of the above",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see answer

  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO Show results
      quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
    <button onclick="location.reload()">Reload</button>
    `;
    }
  }
});
