// פונקציה שמערבבת את המערך באופן רנדומלי
export const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  