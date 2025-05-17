// מערך של שאלות
const questions = [
    {
        question: "מטפלת במעון יום מבחינה שתינוק בן 4 חודשים מגיב באופן חריג בזמן ההאכלה - הוא נמנע ממגע עין, מסרב לינוק ומתוח מאוד. מה עלול להיות הגורם העיקרי לכך לפי המאמר?",
        answers: [
            { text: "התינוק סובל מקוליק" },
            { text: "האנרגיה של התינוק אינה נפגשת עם האנרגיה של המטפל בזמן ההאכלה" },
            { text: "התינוק אלרגי לחלב" },
            { text: "התינוק עייף מדי" }
        ],
        correctAnswer: 1,
        hint: "המאמר מדגיש את חשיבות החיבור האנרגטי בין התינוק למטפל במהלך ההאכלה",
        citation: "\"בזמן ההאכלה, שתי מערכות האנרגיה - של התינוק ושל המטפל - חייבות להיפגש. אם אין מפגש אנרגטי, התינוק עשוי להפגין דחייה, חוסר נוחות ומתח בזמן ההאכלה, אשר משפיעים על יכולתו לינוק וליצור קשר עין חיובי.\" - מתוך המאמר, התינוק מגיב באופן שלילי כי אין חיבור אנרגטי תקין בינו לבין המטפלת, מה שמקשה על חווית ההאכלה ועל ההתפתחות הרגשית שלו בשלב האוראלי."
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
        hint: "המאמר מדגיש את חשיבות השלב האוקולרי להתפתחות הראייה הבינוקולרית ויכולת התפיסה התלת-ממדית",
        citation: "\"השלב האוקולרי הוא קריטי להתפתחות הראייה הבינוקולרית - היכולת לשלב את התמונות משתי העיניים ליצירת תפיסה תלת-ממדית. הפרעה בשלב זה יכולה להוביל לקשיים בקריאה, בהבנת מרחב ובקואורדינציה עין-יד, גם שנים לאחר מכן.\" - הקשיים שהילד מראה בקריאה ובהבנת מרחב קשורים ישירות לאופן שבו התפתח השלב האוקולרי בינקותו, שהשפיע על יכולת הראייה הבינוקולרית שלו."
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
        hint: "המאמר מתאר כיצד חוסר במגע סבלני בזמן ההאכלה יכול ליצור קיטוב בין הראש לאגן",
        citation: "\"כאשר תינוק אינו מקבל מגע סבלני ומזין בזמן ההאכלה, עלול להיווצר קיטוב אנרגטי בין קערת הגולגולת לקערת האגן. דבר זה מתבטא בפעילות מוגברת בראש ובמתח באזור האגן, מה שמשבש את זרימת האנרגיה הטבעית בגוף.\" - המאמר מסביר שהקיטוב האנרגטי שמציג התינוק נובע מהיעדר מגע איכותי ומזין בזמן ההאכלה, שהוא חיוני להתפתחות תקינה של זרימת האנרגיה בגוף."
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
        hint: "המאמר מציין שבגיל זה REM עמוק תורם להתפתחות המוח",
        citation: "\"אחוז גבוה של שנת REM בתינוקות צעירים (כ-50% מזמן השינה) הוא תופעה התפתחותית תקינה וחיונית. שנת REM בגיל זה מאופיינת בפעילות מוחית גבוהה שמסייעת לעיבוד רשמים, לצמיחת המוח ולדיפרנציאציה של מערכות עצביות.\" - זמן ה-REM המוגבר שהתינוקת מציגה הוא חלק מתהליך התפתחותי תקין המאפשר למוח שלה לגדול ולהתפתח באופן מיטבי."
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
        hint: "המאמר מציין שהשלב האוראלי המסופק מפתח אופטימיות ואמון בחיים",
        citation: "\"שלב אוראלי שלא סופק כראוי יוצר דפוס של פסימיות בסיסית וחוסר אמון בעולם. כאשר צרכי התינוק בשלב זה אינם מסופקים באופן עקבי ומזין, מתפתחת ציפייה שהעולם אינו מקום בטוח ושאחרים אינם אמינים.\" - הקושי של המטופל לבטוח באחרים ונטייתו לפסימיות קשורים ישירות לכך שצרכיו בשלב האוראלי המוקדם לא סופקו באופן מספק."
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
        hint: "המאמר מסביר שהאנרגיה המוחזרת של שלב התפתחותי מושלם נדרשת להפעלת הפוטנציאל של השלב הבא",
        citation: "\"כל שלב התפתחותי תקין מחזיר אנרגיה למערכת, אשר משמשת להפעלת הפוטנציאל של השלב הבא. ללא השלמה מספקת של שלב קודם, אין די אנרגיה זמינה להתקדמות לשלב הבא, גם אם מסופקים תנאים תומכים בהווה.\" - המאמר מסביר שהקושי של הילד להתקדם נובע מכך שלא השלים כראוי את השלב ההתפתחותי הקודם, ולכן אין לו מספיק אנרגיה מוחזרת להפעלת הפוטנציאל של השלב הנוכחי."
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
        hint: "המאמר מציין שבדפוס קפוא יש תנועה מינימלית והאנרגיה נעולה במתח פיזי כרוני בשריון השרירים",
        citation: "\"בדפוס הקפוא, האנרגיה מקובעת בשריון שרירים כרוני. התנועה מינימלית, והאדם מתקשה לבטא רגשות או לחוות אותם בעוצמה מלאה. מתח פיזי כרוני בשרירים הוא סימן מובהק לדפוס זה, וכך גם הנטייה להימנע ממצבים רגשיים מורכבים.\" - הקשיים של הילדה בביטוי רגשי והמתח הכרוני בשרירים שלה מאפיינים דפוס קפוא, שבו האנרגיה תקועה בשריון השרירים."
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
        hint: "המאמר מדגיש שבמפגש טיפולי שתי מערכות האנרגיה חייבות להתחבר כדי שהמחזור ההתפתחותי יוכל להשלים את עצמו",
        citation: "\"במפגש טיפולי, שתי מערכות אנרגיה - של המטפל ושל המטופל - חייבות להתחבר כדי שהמחזור ההתפתחותי יוכל להשלים את עצמו. ללא חיבור אנרגטי זה, הילד יתקשה לקבל הכוונה, מגע או התערבות טיפולית, וההתקדמות תהיה מוגבלת.\" - הקושי של הילד בקבלת מגע והכוונה בטיפול נובע מחוסר בחיבור בין האנרגיה שלו לאנרגיה של המטפל, מה שמונע התקדמות טיפולית אפקטיבית."
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
        hint: "המאמר מתאר כיצד זרימה תקינה של אנרגיה בין קערת הגולגולת לקערת האגן חיונית לאינטגרציה רגשית-גופנית",
        citation: "\"זרימה רציפה של אנרגיה בין קערת הגולגולת לקערת האגן חיונית ליצירת אינטגרציה בין תחושות גופניות לרגשות. כאשר יש הפרעה בזרימה זו, נוצר ניתוק בין החוויה הרגשית לחוויה הגופנית, מה שמקשה על הילד לווסת רגשות באופן יעיל.\" - הקושי של הילדה בוויסות רגשי נובע מהפרעה בזרימת האנרגיה בין הראש לאגן, שמונעת אינטגרציה בין תחושות גופניות לרגשות."
    },
    {
        question: "ילד בן 3 מראה קושי בלהתנתק מאמו ומגיב בהתקפי זעם ובכי כשהיא עוזבת אותו בגן. לפי המאמר, איזה שלב התפתחותי לא הושלם כראוי?",
        answers: [
            { text: "השלב האנאלי" },
            { text: "השלב האוראלי" },
            { text: "השלב הפאלי" },
            { text: "השלב הגניטלי" }
        ],
        correctAnswer: 1,
        hint: "המאמר מתאר כיצד השלב האוראלי קשור ליכולת לפתח ביטחון ואמון בסיסי בעולם",
        citation: "\"השלב האוראלי מניח את היסודות לאמון בסיסי בעולם וליכולת להתמודד עם פרידות. כאשר שלב זה לא הושלם כראוי, הילד מתקשה לפתח ביטחון שצרכיו יסופקו גם בהיעדר האם, ועלול להגיב בחרדה ובהתנגדות עזה לפרידה.\" - הקושי של הילד להתנתק מאמו והתגובות הקיצוניות לפרידה מצביעים על כך שהשלב האוראלי, שבו מתפתח האמון הבסיסי, לא הושלם כראוי."
    },
    {
        question: "פסיכולוג מזהה שמטופל בן 40 מתקשה ליצור קשרים אינטימיים ומפגין חרדת נטישה. לפי התיאוריה בדבר שלבי הליבידו, באיזה שלב התפתחותי עשויה להיות בעיה?",
        answers: [
            { text: "השלב הלטנטי" },
            { text: "השלב האוקולרי" },
            { text: "השלב האוראלי" },
            { text: "השלב הפאלי" }
        ],
        correctAnswer: 2,
        hint: "המאמר מתאר כיצד השלב האוראלי קשור ליכולת לפתח אמון בסיסי ביחסים",
        citation: "\"השלב האוראלי מהווה את הבסיס ליכולת ליצור קשרים אינטימיים בבגרות ולאמון בסיסי בקשרים. חוויות של נטישה או הזנחה בשלב זה עלולות להוביל לחרדת נטישה ולקושי ביצירת קשרים אינטימיים מספקים גם בבגרות המאוחרת.\" - הקשיים של המטופל ביצירת קשרים אינטימיים וחרדת הנטישה שהוא מפגין קשורים לחוויות לא מספקות בשלב האוראלי המוקדם."
    },
    {
        question: "ילדה בת 4 נאחזת בבקבוק ומסרבת לעבור לכוס רגילה למרות עידוד הוריה. לפי המאמר, איזה תהליך התפתחותי היא מתקשה לעבור?",
        answers: [
            { text: "מעבר מהשלב הפאלי לשלב הלטנטי" },
            { text: "מעבר מהשלב האוראלי לשלב האנאלי" },
            { text: "מעבר מהשלב האוקולרי לשלב האוראלי" },
            { text: "מעבר מהשלב האנאלי לשלב הפאלי" }
        ],
        correctAnswer: 1,
        hint: "המאמר מתאר את המעבר מהשלב האוראלי (קשור לפה ויניקה) לשלב האנאלי שבו הילד מפתח עצמאות",
        citation: "\"המעבר מהשלב האוראלי לשלב האנאלי כרוך בוויתור על דפוסי הנאה וביטחון הקשורים לפה ולמציצה, ובמעבר לאוטונומיה גדולה יותר. ילדים שמתקשים במעבר זה עשויים להיאחז בחפצי מעבר כמו בקבוק או מוצץ כאמצעי להרגעה ולתחושת ביטחון.\" - הילדה מתקשה במעבר מהשלב האוראלי לשלב האנאלי, שבו היא אמורה לפתח עצמאות גדולה יותר ולוותר על מקורות הנאה וביטחון הקשורים לפה."
    },
    {
        question: "תינוק בן חצי שנה מגיב באופן חריג למגע - הוא מתקשה במציצה ונעשה קשוח בזמן מגע. לפי המאמר, מה הגורם הסביר ביותר?",
        answers: [
            { text: "הפרעה בהתפתחות המוטורית" },
            { text: "הפרעה בזרימת האנרגיה בשלב האוראלי" },
            { text: "בעיה אורתופדית" },
            { text: "רגישות יתר לטקסטורות" }
        ],
        correctAnswer: 1,
        hint: "המאמר מדגיש כיצד זרימת אנרגיה תקינה בשלב האוראלי חיונית להתפתחות תחושתית תקינה",
        citation: "\"הפרעה בזרימת האנרגיה בשלב האוראלי עלולה להתבטא בתגובות חריגות למגע, כגון קושי במציצה וקשיחות גופנית בעת מגע. זרימת אנרגיה תקינה חיונית להתפתחות של מערכת חושית בריאה ולחוויה חיובית של מגע ואינטימיות פיזית.\" - המאמר מסביר שהקושי של התינוק במציצה והקשיחות בזמן מגע נובעים מהפרעה בזרימת האנרגיה בשלב האוראלי, שמשפיעה על התפתחות המערכת החושית שלו."
    },
    {
        question: "פסיכולוגית מטפלת בילד בן 5 שמפגין התנהגות אגרסיבית כלפי ילדים אחרים ולא מסוגל לשתף פעולה במשחקים. לפי שלבי התפתחות הליבידו, מה הבעיה העיקרית?",
        answers: [
            { text: "הילד לא השלים את השלב האנאלי שבו לומדים שליטה ושיתוף פעולה" },
            { text: "הילד מתקשה במעבר לשלב הגניטלי" },
            { text: "הילד חווה רגרסיה לשלב האוקולרי" },
            { text: "הילד מתפתח מהר מדי לגילו" }
        ],
        correctAnswer: 0,
        hint: "המאמר מציין כי השלב האנאלי כרוך בפיתוח יכולות ויסות, שליטה והבנת גבולות",
        citation: "\"בשלב האנאלי הילד לומד לווסת את דחפיו, לדחות סיפוקים, להבין גבולות ולשתף פעולה עם אחרים. כאשר שלב זה לא הושלם כראוי, הילד עלול להפגין התנהגות אגרסיבית, קושי בויסות רגשי וחוסר יכולת לשתף פעולה במסגרות חברתיות.\" - ההתנהגות האגרסיבית של הילד והקושי שלו בשיתוף פעולה במשחקים מצביעים על כך שהוא לא השלים כראוי את השלב האנאלי, שבו מתפתחות יכולות הויסות והשיתוף."
    },
    {
        question: "לפי המאמר, מהו הקשר בין השלב האוראלי לתחושת הקיום הבסיסית?",
        answers: [
            { text: "אין קשר ישיר בין השלב האוראלי לתחושת הקיום" },
            { text: "השלב האוראלי קובע את המזג הבסיסי בלבד" },
            { text: "השלב האוראלי מקשר בין התחושה הפיזית לתחושת הקיום הבסיסית" },
            { text: "השלב האוראלי משפיע רק על יכולות הקוגניציה המאוחרות" }
        ],
        correctAnswer: 2,
        hint: "המאמר מדגיש את השלב האוראלי כמקשר בין תחושות פיזיות לתחושת קיום בסיסית",
        citation: "\"השלב האוראלי יוצר את הקשר הראשוני בין התחושה הפיזית לתחושת הקיום הבסיסית. באמצעות החוויות החושיות של יניקה, מגע, וחום, התינוק מפתח את תחושת ה'אני' הראשונית שלו ואת ההבנה שקיומו מוכר ומוערך על ידי הסביבה.\" - המאמר מסביר שהשלב האוראלי מקשר בין תחושות פיזיות בסיסיות לבין תחושת הקיום הראשונית של התינוק, וכך מניח את היסודות לתפיסת העצמי שלו."
    },
    {
        question: "מטפל מזהה שנער בן 15 מתקשה ביצירת קשרים חברתיים ומפגין חוסר אמון בסיסי באחרים. לפי המאמר, איזה שלב התפתחותי עשוי להיות בבסיס הקושי?",
        answers: [
            { text: "השלב האוראלי" },
            { text: "השלב הפאלי" },
            { text: "השלב הלטנטי" },
            { text: "השלב הגניטלי" }
        ],
        correctAnswer: 0,
        hint: "המאמר מציין כי השלב האוראלי מהווה בסיס לאמון בעולם וביכולת ליצור קשרים משמעותיים",
        citation: "\"השלב האוראלי הוא הבסיס ליכולת לפתח אמון באחרים ולבטוח בעולם כמקום שניתן ליצור בו קשרים משמעותיים. גם בגיל ההתבגרות, קשיים ביצירת קשרים חברתיים וחוסר אמון באחרים עשויים להצביע על כך שהשלב האוראלי לא הושלם כראוי.\" - הקשיים החברתיים וחוסר האמון שמפגין הנער המתבגר קשורים לאופן שבו התפתח (או לא התפתח מספיק) השלב האוראלי המוקדם בחייו."
    },
    {
        question: "לפי המאמר, כיצד חוויות בשלב האוקולרי משפיעות על יכולות למידה?",
        answers: [
            { text: "חוויות בשלב האוקולרי לא משפיעות על יכולות למידה" },
            { text: "שלב אוקולרי תקין מפתח יכולות עיבוד חזותי וקואורדינציה שהם בסיס ללמידה" },
            { text: "השלב האוקולרי משפיע רק על הראייה הפיזית" },
            { text: "השלב האוקולרי משפיע רק על היכולת לקרוא" }
        ],
        correctAnswer: 1,
        hint: "המאמר מתאר את הקשר בין השלב האוקולרי לפיתוח יכולות עיבוד חזותי ולמידה",
        citation: "\"השלב האוקולרי מפתח יכולות עיבוד חזותי, קואורדינציית עין-יד ותפיסה מרחבית שהן בסיס ללמידה פורמלית. ילדים שעברו שלב אוקולרי תקין מפתחים יכולות המאפשרות להם לעקוב אחר טקסט, להבין יחסים מרחביים ולעבד מידע חזותי, כל אלה הכרחיים לתהליכי למידה במערכת החינוך.\" - המאמר מסביר שהשלב האוקולרי מפתח יכולות חיוניות ללמידה, כולל יכולות עיבוד חזותי וקואורדינציה."
    }
];

// משתנים גלובליים
let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedQuestions = [];
let currentQuestion = null;
let soundsPreloaded = false;

// אובייקטי צליל ומערך קיים של צלילים
const correctSoundUrls = [
    'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-game-success-alert-2039.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-melodic-bonus-collect-1938.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-fantasy-game-success-notification-270.mp3'
];

const wrongSoundUrl = 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3';
const victorySoundUrl = 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3';

// מאגר אובייקטי שמע טעונים מראש
const audioElements = {
    correct: [],
    wrong: null,
    victory: null
};

// מערך של שמות קבצי הפאזל לפי הסדר הנכון (שורות בסדר רגיל, בכל שורה מימין לשמאל)
const puzzlePartsFilenames = [
    'hani_part_0_2.png', 'hani_part_0_1.png', 'hani_part_0_0.png',
    'hani_part_1_2.png', 'hani_part_1_1.png', 'hani_part_1_0.png',
    'hani_part_2_2.png', 'hani_part_2_1.png', 'hani_part_2_0.png'
];

// פונקציה לטעינה מוקדמת של הצלילים
function preloadSounds() {
    if (soundsPreloaded) return;
    
    console.log('טוען צלילים מראש...');
    
    // טעינת צלילי תשובה נכונה
    audioElements.correct = correctSoundUrls.map(url => {
        const audio = new Audio();
        audio.src = url;
        audio.load();
        return audio;
    });
    
    // טעינת צליל תשובה שגויה
    audioElements.wrong = new Audio();
    audioElements.wrong.src = wrongSoundUrl;
    audioElements.wrong.load();
    
    // טעינת צליל ניצחון
    audioElements.victory = new Audio();
    audioElements.victory.src = victorySoundUrl;
    audioElements.victory.load();
    
    soundsPreloaded = true;
    console.log('טעינת הצלילים הושלמה');
}

// פונקציה להשמעת צליל מהאובייקטים הטעונים מראש
function playSound(type, index) {
    if (!soundsPreloaded) {
        preloadSounds();
    }
    
    let audioElement;
    
    if (type === 'correct') {
        // אם זה צליל תשובה נכונה, קח אחד אקראי מהמערך (או את המבוקש ספציפית)
        const soundIndex = index !== undefined ? index : Math.floor(Math.random() * audioElements.correct.length);
        audioElement = audioElements.correct[soundIndex];
    } else if (type === 'wrong') {
        audioElement = audioElements.wrong;
    } else if (type === 'victory') {
        audioElement = audioElements.victory;
    }
    
    // אם לא מצאנו אלמנט שמע מתאים, צא מהפונקציה
    if (!audioElement) {
        console.error('אלמנט שמע לא קיים:', type, index);
        return;
    }
    
    // נאפס את הצליל לתחילתו לפני שמנגנים אותו שוב
    try {
        audioElement.currentTime = 0;
    } catch (e) {
        console.log('לא ניתן לאפס את זמן הניגון:', e);
    }
    
    // ננסה להשמיע את הצליל
    try {
        console.log('מנסה להשמיע צליל:', type);
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('שגיאה בהשמעת צליל:', error);
                
                // ניסיון נוסף: יצירת אובייקט אודיו חדש לגיבוי
                if (type === 'correct') {
                    const newAudio = new Audio(correctSoundUrls[index || 0]);
                    newAudio.play().catch(e => console.log('גם הניסיון השני נכשל:', e));
                } else if (type === 'wrong') {
                    const newAudio = new Audio(wrongSoundUrl);
                    newAudio.play().catch(e => console.log('גם הניסיון השני נכשל:', e));
                } else if (type === 'victory') {
                    const newAudio = new Audio(victorySoundUrl);
                    newAudio.play().catch(e => console.log('גם הניסיון השני נכשל:', e));
                }
            });
        }
    } catch (error) {
        console.error('שגיאה בהשמעת הצליל:', error);
    }
}

// פונקציה להתחלת המשחק
function startGame() {
    // טעינה מוקדמת של הצלילים (אם עוד לא נטענו)
    preloadSounds();
    
    // מעבר ממסך הפתיחה למסך המשחק
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    
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
        
        // השמעת צליל אקראי מתוך מערך הצלילים לתשובה נכונה
        playSound('correct');
        
        correctAnswers++;
        updateProgress();
        
        // הצגת חלק הפאזל החדש
        showPuzzlePart(correctAnswers);
        
        const feedbackMessage = getRandomEncouragement();
        const feedbackElement = createFeedbackWithCitation(feedbackMessage, 'correct-feedback', currentQuestion.citation, () => {
            if (correctAnswers === 9) {
                showVictory();
            } else {
                currentQuestionIndex++;
                showQuestion();
            }
        });
        
        document.body.appendChild(feedbackElement);
    } else {
        selectedButton.classList.add('incorrect');
        playSound('wrong');
        
        buttons[currentQuestion.correctAnswer].classList.add('correct');
        
        // הצגת הודעה על תשובה שגויה עם הציטוט מהמאמר וכפתור המשך
        const feedbackElement = createFeedbackWithCitation('לא נכון! התשובה הנכונה היא:', 'incorrect-feedback', currentQuestion.citation, () => {
            selectedButton.classList.remove('incorrect');
            buttons[currentQuestion.correctAnswer].classList.remove('correct');
        });
        
        document.body.appendChild(feedbackElement);
    }
}

// פונקציה ליצירת אלמנט פידבק עם ציטוט
function createFeedbackWithCitation(message, className, citation, onContinue) {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = 'feedback-message ' + className;
    
    // יצירת מיכל לפאזל
    const puzzleContainer = document.createElement('div');
    puzzleContainer.className = 'feedback-puzzle-container';
    puzzleContainer.style.position = 'absolute';
    puzzleContainer.style.top = '10px';
    puzzleContainer.style.left = '10px';
    puzzleContainer.style.width = '25%';
    puzzleContainer.style.height = 'auto';
    puzzleContainer.style.display = 'grid';
    puzzleContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    puzzleContainer.style.gap = '1px';
    puzzleContainer.style.backgroundColor = '#f0f0f0';
    puzzleContainer.style.padding = '2px';
    puzzleContainer.style.borderRadius = '4px';
    
    // הוספת חלקי הפאזל הקיימים
    const existingParts = document.querySelectorAll('.puzzle-part');
    existingParts.forEach(part => {
        const partClone = part.cloneNode(true);
        partClone.style.width = '100%';
        partClone.style.height = 'auto';
        partClone.style.border = 'none';
        puzzleContainer.appendChild(partClone);
    });
    
    // הוספת מיכל לתוכן
    const contentContainer = document.createElement('div');
    contentContainer.className = 'feedback-content';
    contentContainer.style.marginRight = 'calc(25% + 20px)'; // מרווח עבור הפאזל
    
    // הוספת הודעת המשוב
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = 'message';
    contentContainer.appendChild(messageElement);
    
    // הוספת כותרת הציטוט
    const citationTitle = document.createElement('p');
    citationTitle.textContent = 'ציטוט מהמאמר והסבר:';
    citationTitle.className = 'citation-title';
    contentContainer.appendChild(citationTitle);
    
    // הוספת הציטוט עצמו
    const citationElement = document.createElement('p');
    citationElement.textContent = citation;
    citationElement.className = 'citation-text';
    contentContainer.appendChild(citationElement);
    
    // הוספת כפתור המשך
    const continueButton = document.createElement('button');
    continueButton.textContent = 'המשך';
    continueButton.className = 'continue-button';
    
    continueButton.addEventListener('click', function() {
        document.body.removeChild(feedbackElement);
        if (onContinue) {
            onContinue();
        }
    });
    
    contentContainer.appendChild(continueButton);
    
    // הוספת המיכלים לאלמנט הראשי
    feedbackElement.appendChild(puzzleContainer);
    feedbackElement.appendChild(contentContainer);
    
    return feedbackElement;
}

// פונקציה לעדכון התקדמות
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = (correctAnswers / 9) * 100;
    
    // עדכון הפסאודו-אלמנט באמצעות CSS Variable
    document.documentElement.style.setProperty('--progress-width', `${percentage}%`);
    progressText.textContent = `${correctAnswers}/9 שאלות נכונות`;
}

// פונקציה להצגת ניצחון
function showVictory() {
    playSound('victory');
    
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
    
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('hint-container').style.display = 'none';
    
    const endGameContainer = document.createElement('div');
    endGameContainer.id = 'end-game-container';
    
    const victoryTitle = document.createElement('h2');
    victoryTitle.textContent = 'מזל טוב! הרכבת את האישיות הראשונית המלאה! 🎉';
    victoryTitle.style.fontSize = '28px';
    victoryTitle.style.color = '#1a73e8';
    victoryTitle.style.marginBottom = '20px';
    victoryTitle.style.textAlign = 'center';
    
    // הצגת התמונה המלאה
    const fullImage = document.createElement('img');
    fullImage.src = 'files/hani.png';
    fullImage.alt = 'תמונת הפאזל המלאה';
    fullImage.className = 'full-puzzle-image';
    fullImage.style.maxWidth = '400px';
    fullImage.style.margin = '20px auto';
    fullImage.style.display = 'block';
    fullImage.style.borderRadius = '10px';
    fullImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    
    const endGameButton = document.createElement('button');
    endGameButton.textContent = 'סיום משחק';
    endGameButton.className = 'game-button end';
    endGameButton.onclick = closeGame;
    
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'שחק שוב';
    playAgainButton.className = 'game-button again';
    playAgainButton.onclick = restartGame;
    
    buttonsContainer.appendChild(endGameButton);
    buttonsContainer.appendChild(playAgainButton);
    
    endGameContainer.appendChild(victoryTitle);
    endGameContainer.appendChild(fullImage);
    endGameContainer.appendChild(buttonsContainer);
    
    document.getElementById('game-container').appendChild(endGameContainer);
    
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 2000);
}

// פונקציה לסגירת המשחק
function closeGame() {
    // הסתרת מסך המשחק והחזרה למסך הפתיחה
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    
    // ניקוי כפתורי הסיום אם קיימים
    const endGameContainer = document.getElementById('end-game-container');
    if (endGameContainer) {
        endGameContainer.remove();
    }
}

// פונקציה להפעלת המשחק מחדש
function restartGame() {
    // ניקוי כפתורי הסיום
    const endGameContainer = document.getElementById('end-game-container');
    if (endGameContainer) {
        endGameContainer.remove();
    }
    
    // החזרת תצוגת המשחק
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('hint-container').style.display = 'block';
    
    // אתחול המשחק מחדש
    startGame();
}

// פונקציה לקבלת רמז
function showHint() {
    const hintText = document.getElementById('hint-text');
    hintText.textContent = currentQuestion.hint;
    hintText.style.display = 'block';
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

// פונקציה להצגת חלק פאזל
function showPuzzlePart(partNumber) {
    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.style.display = 'block';
    
    // יצירת רשת 3x3 לחלקי הפאזל
    if (!puzzleContainer.querySelector('.puzzle-grid')) {
        const grid = document.createElement('div');
        grid.className = 'puzzle-grid';
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        grid.style.gap = '2px';
        grid.style.maxWidth = '300px';
        grid.style.margin = '20px auto';
        puzzleContainer.appendChild(grid);
    }
    
    const grid = puzzleContainer.querySelector('.puzzle-grid');
    
    // הוספת החלק החדש לפי הסדר
    const index = partNumber - 1;
    if (index < 0 || index >= puzzlePartsFilenames.length) return;
    const part = document.createElement('img');
    part.src = `files/${puzzlePartsFilenames[index]}`;
    part.alt = `חלק ${index + 1} של הפאזל`;
    part.className = 'puzzle-part';
    part.style.width = '100%';
    part.style.height = 'auto';
    part.style.border = '1px solid #ccc';
    part.style.borderRadius = '4px';
    
    // חישוב המיקום ברשת
    const row = Math.floor(index / 3);
    const col = index % 3;
    part.style.gridRow = row + 1;
    part.style.gridColumn = col + 1;
    
    grid.appendChild(part);
}

// הוספת מאזיני אירועים
document.addEventListener('DOMContentLoaded', function() {
    // מאזינים רגילים
    document.getElementById('hint-button').addEventListener('click', showHint);
    document.getElementById('start-button').addEventListener('click', startGame);
    
    // מאזין לטעינת צלילים בעת אינטראקציה ראשונה
    document.addEventListener('click', function onFirstClick() {
        preloadSounds();
        // הסרת המאזין לאחר הפעלתו פעם אחת
        document.removeEventListener('click', onFirstClick);
    }, { once: true });
});

// הסרת הקריאה האוטומטית ל-startGame
// startGame(); 