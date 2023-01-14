const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

const BUTTONS = {
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
}

function handleInactiveButtons(buttonName) {
  for (const key in BUTTONS) {
    if (key !== buttonName) {
      BUTTONS[key].classList.remove("active");
    }
  }
}

function handleActive(buttonName) {
  BUTTONS[buttonName].classList.add("active");
}

function handleClick(buttonName) {
  handleActive(buttonName);
  handleInactiveButtons(buttonName);
}

btn1.addEventListener('click', () => handleClick('btn1'))
btn2.addEventListener('click', () => handleClick('btn2'))
btn3.addEventListener('click', () => handleClick('btn3'))
btn4.addEventListener('click', () => handleClick('btn4'))
btn5.addEventListener('click', () => handleClick('btn5'))
