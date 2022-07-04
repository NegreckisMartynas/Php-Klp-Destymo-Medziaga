// parašykite funkciją didesnis150proc(arr), kurigrąžintų naują masyvą, kuris paimtų tik lygynius duoto masyvo elementus ir padaugintų juos iš 150 procentų; grąžinti rezultatus naujame masyve
// tip: naudotike anksčiau parašytas funkcijas

function lyginiaiProc150(arr) {
    //throw new Error('Function not implemented');
}


// Testavimai apačioje


const testlyginiaiProc = makeTestFunction((input, output) => input + ' tik lyginiai * 150% = ' + output, lyginiaiProc150);

testlyginiaiProc([[1, 2, 3, 4]], [3, 6])
testlyginiaiProc([[81, 56, 26, 22, 81, 90]], [84,39,33,135])
testlyginiaiProc([[6821, 5714, 3122, 13422, 21513, 51346, 1641]], [8571,4683,20133,77019])

// pagalbinės funkcijos

function makeTestFunction(successMessage, test) {
    return (input,  expected) => {
        const res = test(...input)
        if(! compare(res, expected)){
            console.error(`>>> ${test.name}(${formatVal(input)}) failed. Expected: ${formatVal([expected])}; received: ${formatVal([res])}`);
        }
        else {
            console.log(successMessage(formatVal(input), formatVal([res])))
        }
    }
}

function formatVal(input) {
    return input.map(e => JSON.stringify(e))
}

function compare(a, b) {
    if(a === b) return true;
    else if(typeof(a) !== typeof(b)) return false;
    else if(Array.isArray(a) && Array.isArray(b)) return compareArrays(a, b);
    return false;
}

function compareArrays(a, b) {
    if(a.length !== b.length) return false
    let i = 0;
    while(i < a.length) {
        if(a[i] !== b[i]) return false
        i++;
    }
    return true
}