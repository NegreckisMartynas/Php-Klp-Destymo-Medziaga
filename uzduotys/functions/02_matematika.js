// Sukurkite funkcijas add, subtract, multiply, divide, remainder funkcijas, kurios atlieka atitinkamus matematinius veiksmus su sveikomis reikšmėmis.
// Divide turi grąžinti sveiką skaičių: apvalinkite į mažają pusę



// Testavimai apačioje

console.log('16 + 5 = ', add(16, 5));
console.log('16 + 5 = ', subtract(16, 5));
console.log('16 + 5 = ', multiply(16, 5));
console.log('16 + 5 = ', divide(16, 5));
console.log('16 + 5 = ', remainder(16, 5));

assert(() => add(16,5), 21);
assert(() => subtract(16,5), 11);
assert(() => multiply(16,5), 80);
assert(() => divide(16,5), 3);
assert(() => remainder(16,5), 1);

// pagalbinės funkcijos

function assert(task, expected) {
    const res = task();
    if(res !== expected){
        console.error('>>> ' + functionBodyString(task) + ' failed. Expected: ' + expected + '; received: ' + res);
    }
}

function functionBodyString(ofFunction) {
    const fullString = ofFunction.toString();
    return fullString.slice(fullString.indexOf('=>') + 2).trim()
}