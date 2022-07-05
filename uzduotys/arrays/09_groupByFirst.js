//Parašykete funkciją groupByFirstDigit(arr), kuri grąžintų masyvą, kurio elementai: masyvai. Vidinių masyvų elementai: iš paduoto masyvo paimti skaičiai, kurie prasideda 1,2,3,...9
//jei nėra skaičių, prasidedančiu tuo skaitmeniu, data vidinis masivas tuščias
//Pvz [10, 11, 20, 90] => [[10, 11], [20], [], [], [], [], [], [], 90] 


function groupByFirstDigit(array) {
    throw new Error('Function not implemented');
}

// Testavimai apačioje

const test = makeTestFunction((input, output) => `${input} grouped by first digits: ${output}`, groupByFirstDigit);

test([[242, 516, 1024, 141, 3234, 113854]], [[1024,141,113854],[242],[3234],[],[516],[],[],[],[]])
test([[50, 65, 45,67,81,42,75,13,11,46,12,14,82,67,41], 4], [[13,11,12,14],[],[],[45,42,46,41],[50],[65,67,67],[75],[81,82],[]])

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