// parašykite funkciją countVowels(str), kuri suskaičiuotų balsių skaičių duotoj teksto eilutėj.
// Galite naudoti str.charAt(index), kad paimti vieną simbolį, ir str.length, kad patikrinti, kiek simbolių yra iš viso.



// Testavimai apačioje

console.log("'Hello world' balsių skaičius: ", countVowels('Hello world'))
console.log("'The quick brown fox jumps over the lazy dog' balsių skaičius: ", countVowels('The quick brown fox jumps over the lazy dog'))

assert(() => countVowels('Hello world'), 3)
assert(() => countVowels('The quick brown fox jumps over the lazy dog'), 11)


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