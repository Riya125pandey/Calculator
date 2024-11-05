const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentOperation = '';
let previousOperation = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.textContent;
      switch (buttonText) {
        case 'C':
          currentOperation = '';
          display.value = '';
          break;
        case '<':
          currentOperation = currentOperation.slice(0, -1);
          display.value = currentOperation;
          break;
        case '=':
          try {
            const result = eval(currentOperation);
            display.value = result;
            previousOperation = currentOperation;
            currentOperation = '';
          } catch (e) {
            display.value = 'Error';
          }
          break;
        default:
          currentOperation += buttonText;
          display.value = currentOperation;
      }
    });
  });