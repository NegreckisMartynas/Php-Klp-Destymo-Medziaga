function add(num) {
  const screen = document.querySelector('#calc-screen');
  screen.innerText += num;
}

const operation = '100 + 151';
console.log(eval(operation));
