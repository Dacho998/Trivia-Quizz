//fetch function ===> DONE
//function- apear the questions ===>DONE
//function- check the correct anwers
//function- timer for one question it will be 30sec.
//on 10 secconds remainig the timer collor should be turn red
//function- final result



//sledno treba da pochnuva od novo reset dugmeto isto i timerot
// i ni treba na kraj da ni dava kolku imame tochno odgovoreno 
//primer: 6/10
const apiUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy";

// Elements
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const finalScore = document.getElementById('final-score');
const retryBtn = document.getElementById('retry-btn');
const output = document.getElementById('output');
const startBtn = document.getElementById('startBtn');

let questions = [];
let currentQuestionI = 0;

const fetching = () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
            questions = result.results;
            apearQuestions(); 
        })
        .catch((error) => {
            console.error("Failed to load quiz data:", error);
            document.getElementById('quiz-container').innerHTML = '<p>Failed to load the quiz data, please try again later.</p>';
        });
};

function apearQuestions() {
    if (!questions || questions.length === 0) {
        console.log("No questions available.");
        return; 
    }

    if (currentQuestionI >= questions.length) {
        console.log("All questions displayed.");
        return; 
    }

    const currentQuestion = questions[currentQuestionI];
    const questionText = currentQuestion.question;
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];

    answers.sort(() => Math.random() - 0.5);

    const questionElement = document.getElementById('quiz-question');
    questionElement.innerHTML = questionText;

   
    const answersElement = document.getElementById('quiz-option');
    answersElement.innerHTML = ''; 

    for (let i = 0; i < answers.length; i++) {
        const button = document.createElement('button');
        button.innerHTML = answers[i];
        button.onclick = () => handleAnswerSelection(answers[i], currentQuestion.correct_answer);
        answersElement.appendChild(button);
    }

    currentQuestionI++;
}

function handleAnswerSelection(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }

    apearQuestions();
}

fetching();