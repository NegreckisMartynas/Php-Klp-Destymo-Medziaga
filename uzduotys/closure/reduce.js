function reduce1() { 
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        let x = 0;
        sum = sum + i;
    }
    return sum
}

function reduce2() { 
    let sum = 0;
    for(let i = 50; i <= 150; i += 50) {
        sum = sum + i;
    }
    return sum;
}

console.log(reduce1());

let x = [50, 100, 150].reduce((a, b) => a+b);

let line = ['*', '*', '*', '*'].reduce((a,b) => a + b);


console.log(reduce2());


function mult5ThenAdd (a) {
    let aMult = a * 5;

    return function (b) {
        return aMult + b;
    }
}

let add25 = mult5ThenAdd(5);
let add30 = mult5ThenAdd(6);

mult5ThenAdd(10)

console.log(add25(1));
console.log(add25(2));
console.log(add25(3));

console.log(add30(1));
console.log(add30(2));
console.log(add30(3));

{
    let x = 30;
}

console.log(x);
