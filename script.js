// מערך של שאלות
const questions = [
    {
        question: "מטפלת במעון יום מבחינה שתינוק בן 4 חודשים מגיב באופן חריג בזמן ההאכלה - הוא נמנע ממגע עין, מסרב לינוק ומתוח מאוד. מה עלול להיות הגורם העיקרי לכך לפי המאמר?",
        answers: [
            { text: "התינוק סובל מקוליק" },
            { text: "האנרגיה של התינוק אינה נפגשת עם האנרגיה של המטפלת בזמן ההאכלה" },
            { text: "התינוק אלרגי לחלב" },
            { text: "התינוק עייף מדי" }
        ],
        correctAnswer: 1,
        hint: "המאמר מדגיש את חשיבות החיבור האנרגטי בין התינוק למטפל במהלך ההאכלה"
    },
    {
        question: "פסיכולוגית התפתחותית מטפלת בילד בן 8 שמתקשה בקריאה ובהבנת מרחב. בבדיקה היא מגלה שיש לו קושי בראייה בינוקולרית. לפי המאמר, מה עלולה להיות הסיבה העמוקה לקושי זה?",
        answers: [
            { text: "הפרעה בשלב האוקולרי המוקדם שהשפיעה על התפתחות הראייה הבינוקולרית" },
            { text: "בעיה גנטית בשרירי העיניים" },
            { text: "חוסר בוויטמינים בתקופת הינקות" },
            { text: "חשיפה מוגזמת למסכים בגיל צעיר" }
        ],
        correctAnswer: 0,
        hint: "המאמר מדגיש את חשיבות השלב האוקולרי להתפתחות הראייה הבינוקולרית ויכולת התפיסה התלת-ממדית"
    },
    {
        question: "מטפלת במעון יום מזהה תינוק בן 6 חודשים שמראה דפוס של קיטוב אנרגטי - פעילות מוגברת בראש ומתח באגן. לפי המאמר, מה הגורם הסביר ביותר למצב זה?",
        answers: [
            { text: "תזונה לא מאוזנת" },
            { text: "חוסר במגע סבלני ומזין בזמן ההאכלה" },
            { text: "עייפות יתר של התינוק" },
            { text: "טמפרטורה לא מתאימה בחדר" }
        ],
        correctAnswer: 1,
        hint: "המאמר מתאר כיצד חוסר במגע סבלני בזמן ההאכלה יכול ליצור קיטוב בין הראש לאגן"
    },
    {
        question: "תינוקת בת 3 חודשים נמצאת במצב REM (תנועת עיניים מהירה) במשך כמחצית מזמן השינה שלה. לפי המאמר, מה המשמעות ההתפתחותית של תופעה זו?",
        answers: [
            { text: "זהו סימן לבעיה בהתפתחות המוח" },
            { text: "זוהי תופעה תקינה המסייעת בצמיחת המוח ובדיפרנציאציה שלו" },
            { text: "התינוקת ישנה יותר מדי" },
            { text: "התינוקת זקוקה ליותר גירויים בזמן ערות" }
        ],
        correctAnswer: 1,
        hint: "המאמר מציין שבגיל זה REM עמוק תורם להתפתחות המוח"
    },
    {
        question: "מטופל מבוגר מתקשה לבטוח באחרים ותמיד מצפה לגרוע מכל. לפי המאמר, איזה שלב התפתחותי עשוי להיות קשור לדפוס זה?",
        answers: [
            { text: "השלב האנאלי שלא הושלם כראוי" },
            { text: "השלב האוראלי שלא סופק כראוי" },
            { text: "השלב הפאלי שהופרע" },
            { text: "השלב הגניטלי-לב שלא הושלם" }
        ],
        correctAnswer: 1,
        hint: "המאמר מציין שהשלב האוראלי המסופק מפתח אופטימיות ואמון בחיים"
    },
    {
        question: "מטפלת מזהה שילד בן 5 מתקשה להתקדם בהתפתחות הרגשית שלו למרות שהוא מקבל טיפול תומך. לפי המאמר, מה עשוי להיות ההסבר?",
        answers: [
            { text: "האנרגיה המוחזרת מהשלב ההתפתחותי הקודם לא הושלמה מספיק" },
            { text: "הילד זקוק לתרופות" },
            { text: "הטיפול אינו מתאים לגילו" },
            { text: "יש לו קשיים קוגניטיביים" }
        ],
        correctAnswer: 0,
        hint: "המאמר מסביר שהאנרגיה המוחזרת של שלב התפתחותי מושלם נדרשת להפעלת הפוטנציאל של השלב הבא"
    },
    {
        question: "מטפלת מזהה שילדה בת 7 מתקשה לבטא רגשות ומציגה מתח פיזי כרוני בשרירים. לפי המאמר, איזה סוג של דפוס התפתחותי זה מייצג?",
        answers: [
            { text: "דפוס מודחק" },
            { text: "דפוס דינמי" },
            { text: "דפוס קפוא" },
            { text: "דפוס מסופק" }
        ],
        correctAnswer: 2,
        hint: "המאמר מציין שבדפוס קפוא יש תנועה מינימלית והאנרגיה נעולה במתח פיזי כרוני בשריון השרירים"
    },
    {
        question: "פסיכולוג מטפל בילד בן 4 שמתקשה ליצור קשר רגשי עם הוריו. בזמן המפגשים הטיפוליים, הילד מראה קושי בקבלת מגע והכוונה. לפי המאמר, מה הבעיה העיקרית שיש לטפל בה?",
        answers: [
            { text: "חוסר בוויטמינים" },
            { text: "חוסר בחיבור בין שתי מערכות האנרגיה (הילד והמטפל)" },
            { text: "בעיות שינה" },
            { text: "קשיי שפה" }
        ],
        correctAnswer: 1,
        hint: "המאמר מדגיש שבמפגש טיפולי שתי מערכות האנרגיה חייבות להתחבר כדי שהמחזור ההתפתחותי יוכל להשלים את עצמו"
    },
    {
        question: "מטפלת מאבחנת ילדה בת 5 שמתקשה בוויסות רגשי. היא מבחינה שהילדה מראה קושי בחיבור בין תחושות גופניות לרגשות. לפי המאמר, מה עשוי להיות המקור לקושי זה?",
        answers: [
            { text: "תזונה לקויה" },
            { text: "חוסר בפעילות גופנית" },
            { text: "הפרעה בזרימה הרציפה של האנרגיה בין קערת הגולגולת לקערת האגן" },
            { text: "חוסר שינה" }
        ],
        correctAnswer: 2,
        hint: "המאמר מתאר כיצד זרימה תקינה של אנרגיה בין קערת הגולגולת לקערת האגן חיונית לאינטגרציה רגשית-גופנית"
    }
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