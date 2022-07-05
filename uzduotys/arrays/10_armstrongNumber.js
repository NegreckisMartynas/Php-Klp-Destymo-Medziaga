// Parašykite funkcijas: 


// Grąžina masyvą, kurio elementai: duoto masyvo skaičiai pakelti kubu
function cubed(arr) {
    throw new Error('Function not implemented');
}

// Grąžina true, jei jo skaitmenis pakėlus kubu ir susumavus, suma bus lygi jam pačiam: 153 === 1 ** 3 + 5 ** 3 + 3 ** 3
function isArmstrongNumber(num) {
    throw new Error('Function not implemented');
}

// Grąžina masyvą Armstrongo skaičių rėžyje tarp 100 or 1000
function armstrongNumbers() {
    throw new Error('Function not implemented');
}




// Testavimai apačioje
const testCubed = makeTestFunction((input, output) => `${input} cubed: ${output}`, cubed);
const testIsArmstrong = makeTestFunction((input, output) => `${input} is Armstrong number: ${output}`, isArmstrongNumber);
const testArmstrong = makeTestFunction((_, output) => `Armstrong numbers between 100 and 1000: ${output}`, armstrongNumbers);

testCubed([[1, 5, 3]], [1, 125, 27])
testIsArmstrong([153], true)
testIsArmstrong([200], false)
testArmstrong([], [153, 370, 371, 407])

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