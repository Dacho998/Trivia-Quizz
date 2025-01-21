const apiUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy";

// Elements
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const finalScore = document.getElementById('final-score');
const retryBtn = document.getElementById('retry-btn');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
