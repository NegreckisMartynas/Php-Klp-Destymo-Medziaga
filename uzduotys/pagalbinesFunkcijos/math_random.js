console.log(Math.random());

console.log(Math.random() * 100); // 0-99
console.log(Math.floor(Math.random() * 100)); //0-99

console.log(Math.floor(Math.random() * 91 + 10)) //10-100

function rollDice() {
    return Math.floor( (Math.random()*6) +1 ) // 1-6
}

console.log('Rolled:', rollDice())