const questions = [{
    "ques": "Which of the following is a client site language?",
    "a": "Java",
    "b": "CSS",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "ques": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "ques": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
{
    "ques": "What does CSS stands for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "b",
}
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("questionBox");
const optionInputs = document.querySelectorAll(".option");

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.ques}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(input => {
        if(input.checked){
            answer =  input.value;
        }
    })
    return answer;
}

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `
}

loadQuestion();