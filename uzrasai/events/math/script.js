function sum() {
  const a = document.querySelector('#num-a').value;
  const b = document.querySelector('#num-b').value;
  const output = document.querySelector('#sum-output');
  output.innerText = (Number.parseInt(a) + Number.parseInt(b));
}

function subtract() {
  const a = Number.parseInt(
    document.querySelector('#num-a-sub').value
  );
  const b = document.querySelector('#num-b-sub').value;
  const output = document.querySelector('#sub-output');
  output.innerText = (a - Number.parseInt(b));
}
