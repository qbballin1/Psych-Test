const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const A = document.getElementById("A");
const B = document.getElementById("B");
const c = document.getElementById("C");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [{
    prompt: 'questionimg.png',
    choiceA: "q1A.png",
    choiceB: "q1b.png",
    choiceC: "q1c.png",
    Correct: "A"
} , 
{
    prompt: "q2.png",
    choiceA: "q2A.png",
    choiceB: "q2B.png",
    choiceC: "q2C.png",
    Correct: "B"
},{
    prompt: "q3.png",
    choiceA: "q3A.png",
    choiceB: "q3B.png",
    choiceC: "q3C.png",
    Correct: "B"
},
{
    prompt: "q4.png",
    choiceA: "q4A.png",
    choiceB: "q4B.png",
    choiceC: "q4C.png",
    Correct: "A"
},{
    prompt: "q5.png",
    choiceA: "q5A.png",
    choiceB: "q5B.png",
    choiceC: "q5C.png",
    Correct: "C"
},{
    prompt: "q6.png",
    choiceA: "q6A.png",
    choiceB: "q6B.png",
    choiceC: "q6C.png",
    Correct: "C"
},{
    prompt: "q7.png",
    choiceA: "q7A.png",
    choiceB: "q7B.png",
    choiceC: "q7C.png",
    Correct: "B"
},{
    prompt: "q8.png",
    choiceA: "q8A.png",
    choiceB: "q8B.png",
    choiceC: "q8C.png",
    Correct: "A"
},{
    prompt: "q9.png",
    choiceA: "q9A.png",
    choiceB: "q9B.png",
    choiceC: "q9C.png",
    Correct: "A"
},{
    prompt: "q10.png",
    choiceA: "q10A.png",
    choiceB: "q10B.png",
    choiceC: "q10C.png",
    Correct: "C"
},{
    prompt: "q11.png",
    choiceA: "q11A.png",
    choiceB: "q11B.png",
    choiceC: "q11C.png",
    Correct: "B"
},{
    prompt: "q12.png",
    choiceA: "q12A.png",
    choiceB: "q12B.png",
    choiceC: "q12C.png",
    Correct: "C"
},{
    prompt: "q13.png",
    choiceA: "q13A.png",
    choiceB: "q13B.png",
    choiceC: "q13C.png",
    Correct: "B"
},{
    prompt: "q14.png",
    choiceA: "q14A.png",
    choiceB: "q14B.png",
    choiceC: "q14C.png",
    Correct: "B"
},{
    prompt: "q15.png",
    choiceA: "q15A.png",
    choiceB: "q15B.png",
    choiceC: "q15C.png",
    Correct: "A"
}
];

const lastquestionIndex = questions.length - 1;
let runningQuestionIndex = 0;



function questionRender(){
    let q  = questions[runningQuestionIndex];
    question.innerHTML = "<img src=" + q.prompt + ">";
    A.innerHTML = "<img src=" + q.choiceA + ">";
    B.innerHTML = "<img src=" + q.choiceB + ">";
    C.innerHTML = "<img src=" + q.choiceC + ">";
}

function startQuiz() {
     start.style.display = "none"
      questionRender();
      quiz.style.display = "block"
};

start.addEventListener("click",startQuiz)

let score = 0;

function checkCorrect(answer){         
if(answer == questions[runningQuestionIndex].Correct){
    score++
}
if(runningQuestionIndex < lastquestionIndex ){
    runningQuestionIndex++;
    questionRender();
}else{
    scoreRender()
}
};

function scoreRender() {
   scoreDiv.style.display = "block";
    const scorePercent = Math.round(100 * score / questions.length);
    let rt = "now take the reaction time test and report results"
    scoreDiv.innerHTML = "<p>"+ scorePercent + "%</p>"
};

