// sukurkite funckiją countEvenNumbers(start, end), kuri suskaičiuotų, kiek lyginių skaičių yra šitame rėžyje



// Testavimai apačioje

console.log("Lyginių skaičių rėžyje [1 ; 10 ]: ", countEvenNumbers(1, 10))
console.log("Lyginių skaičių rėžyje [1 ; 100 ]: ", countEvenNumbers(1, 100))
console.log("Lyginių skaičių rėžyje [20 ; 853 ]: ", countEvenNumbers(20, 853))

assert(() => countEvenNumbers(1, 10), 5)
assert(() => countEvenNumbers(1, 100), 50)
assert(() => countEvenNumbers(20, 853), 417)


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