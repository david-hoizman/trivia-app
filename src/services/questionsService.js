// // data.js
// export const questionsData = {
//     recommended: [
//       { text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'] },
//       // עוד שאלות...
//     ],
//     newest: [
//       // שאלות נוספות...
//     ],
//     educational: [
//       // שאלות נוספות...
//     ],
//     behindTheScenes: [
//       // שאלות נוספות...
//     ],
//     stories: [
//       // שאלות נוספות...
//     ],
//   };
  // src/services/questionsService.js
// export const getQuestionsByCategory = (category) => {
//   const questionsData = {
//       "מומלצים": [
//           { text: "מהי עיר הבירה של ישראל?", options: ["ירושלים", "תל אביב", "חיפה"], correctAnswer: "ירושלים" },
//           // שאלות נוספות
//       ],
//       "חדשים": [
//           { text: "מהי מערכת האור החודשית", options: ["קשר ירח", "שמש", "כוכבים"], correctAnswer: "קשר ירח" },
//           // שאלות נוספות
//       ],
//       "לימודיים": [
//           { text: "מהי מערכת ררררררררררררררר החודשית", options: ["קשר ירח", "שמש", "כוכבים"], correctAnswer: "קשר ירח" },
//           // שאלות נוספות
//       ],
//       // קאטגוריות נוספות
//   };

//   return questionsData[category] || [];
// }
export const getQuestionsByCategory = (category) => {
  const questionsData = {
    "מומלצים": [
      { text: "מהי עיר הבירה של ישראל?", options: ["ירושלים", "תל אביב", "חיפה"], correctAnswer: "ירושלים" },
      { text: "כמה איים יש בישראל?", options: ["5", "15", "25"], correctAnswer: "5" },
      { text: "מי כתב את מגילת העצמאות?", options: ["בנימין זאב הרצל", "מנחם בגין", "דוד בן-גוריון"], correctAnswer: "דוד בן-גוריון" },
      { text: "מהי השפה הרשמית בישראל?", options: ["עברית", "ערבית", "אנגלית"], correctAnswer: "עברית" },
      { text: "איזה אירוע מתרחש ביום העצמאות?", options: ["מופעי מוסיקה", "עצרת ממלכתית", "הצגת סרטים"], correctAnswer: "עצרת ממלכתית" }
    ],
    "חדשים": [
      { text: "מהי מערכת האור החודשית?", options: ["קשר ירח", "שמש", "כוכבים"], correctAnswer: "קשר ירח" },
      { text: "מהי עונת המעבר?", options: ["אביב", "סתיו", "חורף"], correctAnswer: "סתיו" },
      { text: "איזו עיר לא נמצאת בארץ?", options: ["רמת גן", "קריית אונו", "הרצליה"], correctAnswer: "קריית אונו" },
      { text: "מי הוא ראש ממשלת ישראל?", options: ["בנימין נתניהו", "נפתלי בנט", "יאיר לפיד"], correctAnswer: "בנימין נתניהו" },
      { text: "מהו החג היהודי שחל בחודש אדר?", options: ["פורים", "פסח", "סוכות"], correctAnswer: "פורים" }
    ],
    "לימודיים": [
      { text: "מהו מסלול הלימודים היסודי בישראל?", options: ["יסודי", "חטיבת ביניים", "תיכון"], correctAnswer: "יסודי" },
      // { text: "כמה ספרים יש בתנ"ך?", options: ["24", "30", "39"], correctAnswer: "39" },  
      { text: "איזו מדינה גובלת עם ישראל ממזרח?", options: ["ירדן", "סוריה", "לבנון"], correctAnswer: "ירדן" },
      { text: "מהי עיר קודש לחמישה?", options: ["ירושלים", "תל אביב", "חיפה"], correctAnswer: "ירושלים" },
      { text: "מהו המשקל של לוח זהב?", options: ["1 קילוגרם", "100 גרם", "10 קילוגרם"], correctAnswer: "100 גרם" }
    ]
    // קאטגוריות נוספות
  };

  return questionsData[category] || [];
}
