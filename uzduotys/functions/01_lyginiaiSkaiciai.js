// Sukurkite funkciją isEven(number), kur pasakytų, ar duotas skaičius lyginis, ar nelyginis. Jei lyginis - grąžinkite TRUE, jei nelyginis - grąžinkite FALSE
// Patrikrinti, ar skaičius lyginis galite naudoti modulio (dalybos liekana, simbolis %) operaciją: 10 % 2 --> 0, 11 % 2 --> 1   











// Testavimai apačioje

console.log('8 yra lyginis: ', isEven(8))
console.log('27 yra lyginis: ', isEven(27))
console.log('85796 yra lyginis: ', isEven(85796))

assert(() => isEven(8), true)
assert(() => isEven(27), false)
assert(() => isEven(85796), true)

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