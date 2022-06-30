let count = 0;

function counter() {
    console.log(++count);
}

function counter2() {
    console.log(++count);
}

counter();
counter2();
counter();
counter2();
counter();
console.log('count is: ', count);