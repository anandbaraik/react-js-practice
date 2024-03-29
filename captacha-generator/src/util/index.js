const CAPTCHA_LENGTH = 6;
const generateRandomCaptcha = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
};


const generateArithmaticCaptcha = () => {
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let firstNum = Math.floor(Math.random() * 100);
  let secondNum = Math.floor(Math.random() * 100);

  let captcha;
  switch (operator) {
    case "+":
      captcha = `${firstNum} + ${secondNum}`;
      break;
    case "-":
      captcha = `${firstNum} - ${secondNum}`;
      break;
    case "*":
      captcha = `${firstNum} * ${secondNum}`;
      break;
    default:
      captcha = "";
  }
  return { captcha, answer: eval(captcha) };
};

export {generateRandomCaptcha, CAPTCHA_LENGTH, generateArithmaticCaptcha};
