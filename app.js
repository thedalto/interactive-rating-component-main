const btn = document.querySelector('.btn');
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

function checkIfContainsActiveClass() {
  let containActive = false;

  for (const key in BUTTONS) {
    containActive = BUTTONS[key].classList.contains("active");
    if (containActive) return true;
  }

  return false;
}

function goToResult() {
  const isContained = checkIfContainsActiveClass();
  if (!isContained) {
    window.alert("Necessary select an options to realize search.")
  } else {
    window.location.href = "./result.html"
  }
}


function handleInactiveButtons(buttonName) {
  for (const key in BUTTONS) {
    if (key !== buttonName) {
      BUTTONS[key].classList.remove("active");
    }
  }
}

function addDataOnLocalStorage(data) {
  localStorage.setItem('buttonSelected', JSON.stringify(data))
}

function handleActive(buttonName) {
  BUTTONS[buttonName].classList.add("active");
  const buttons = {
    btn1: 1,
    btn2: 2,
    btn3: 3,
    btn4: 4,
    btn5: 5
  }
  addDataOnLocalStorage(buttons[buttonName])
}

function handleClick(buttonName) {
  handleActive(buttonName);
  handleInactiveButtons(buttonName);
}
btn.addEventListener('click', goToResult)
btn1.addEventListener('click', () => handleClick('btn1'))
btn2.addEventListener('click', () => handleClick('btn2'))
btn3.addEventListener('click', () => handleClick('btn3'))
btn4.addEventListener('click', () => handleClick('btn4'))
btn5.addEventListener('click', () => handleClick('btn5'))