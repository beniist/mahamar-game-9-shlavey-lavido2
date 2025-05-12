// מערך של שאלות (יוחלף בהמשך עם השאלות מהמאמר)
const questions = [
    // כאן יוכנסו 100 השאלות מהמאמר
];

// משתנים גלובליים
let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedQuestions = [];
let currentQuestion = null;

// צלילים
const correctSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
const wrongSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
const victorySound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3');

// פונקציה להתחלת המשחק
function startGame() {
    // בחירת 9 שאלות אקראיות
    selectedQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 9);
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    updateProgress();
    showQuestion();
}

// פונקציה להצגת שאלה
function showQuestion() {
    currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer.text;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
    
    document.getElementById('hint-text').textContent = '';
}

// פונקציה לבדיקת תשובה
function checkAnswer(answerIndex) {
    const buttons = document.querySelectorAll('.answer-button');
    const selectedButton = buttons[answerIndex];
    
    if (answerIndex === currentQuestion.correctAnswer) {
        selectedButton.classList.add('correct');
        correctSound.play();
        correctAnswers++;
        updateProgress();
        
        // הצגת הודעה מעודדת
        setTimeout(() => {
            alert(getRandomEncouragement());
            if (correctAnswers === 9) {
                showVictory();
            } else {
                currentQuestionIndex++;
                showQuestion();
            }
        }, 1000);
    } else {
        selectedButton.classList.add('incorrect');
        wrongSound.play();
        buttons[currentQuestion.correctAnswer].classList.add('correct');
        
        // הצגת הודעה על תשובה שגויה
        setTimeout(() => {
            alert('לא נכון! נסה שוב.');
            selectedButton.classList.remove('incorrect');
            buttons[currentQuestion.correctAnswer].classList.remove('correct');
        }, 1000);
    }
}

// פונקציה לעדכון התקדמות
function updateProgress() {
    const progressBar = document.querySelector('#progress-bar::before');
    const progressText = document.getElementById('progress-text');
    const percentage = (correctAnswers / 9) * 100;
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${correctAnswers}/9 שאלות נכונות`;
}

// פונקציה להצגת ניצחון
function showVictory() {
    victorySound.play();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    setTimeout(() => {
        alert('כל הכבוד! השלמת את כל השאלות בהצלחה!');
    }, 1000);
}

// פונקציה לקבלת רמז
function showHint() {
    const hintText = document.getElementById('hint-text');
    hintText.textContent = currentQuestion.hint;
}

// פונקציה לקבלת הודעה מעודדת אקראית
function getRandomEncouragement() {
    const encouragements = [
        'כל הכבוד! המשך כך!',
        'מצוין! אתה בדרך הנכונה!',
        'תשובה נכונה! אתה מבריק!',
        'עבודה טובה! המשך כך!',
        'מדהים! אתה מצליח מעולה!'
    ];
    return encouragements[Math.floor(Math.random() * encouragements.length)];
}

// הוספת מאזיני אירועים
document.getElementById('hint-button').addEventListener('click', showHint);

// התחלת המשחק
startGame(); 