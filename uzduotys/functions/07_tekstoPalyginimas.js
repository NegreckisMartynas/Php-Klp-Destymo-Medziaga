// parašykite funkciją stringsSimilar(str1, str2), kuris grąžina true kai tekstai panašūs:
//   visos raidės ir simboliai lygūs. Didžiosios ir mažosios raidės yra lygios
//   tarpai prieš ir po yra ignoruojami
// Funkcijai parašyti užtenka panaudoti string funkcijas iš 04 užrašų, for loop nereikia


function stringsSimilar(str1, str2) {
    return str1.trim().toLowerCase() === str2.trim().toLowerCase();
}

// Testavimai apačioje

function testLog(str1, str2) {
    console.log(`'${str1}' ir '${str2}' panašios: `, stringsSimilar(str1, str2))
}

testLog('Labas!', 'LABAS!');
testLog('Hello World', '    hello world    ');
testLog('Hello World!', 'Hello World');

assert(() => stringsSimilar('Labas!', 'LABAS!'), true)
assert(() => stringsSimilar('Hello World', '    hello world    '), true)
assert(() => stringsSimilar('Hello World!', 'Hello World'), false)


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