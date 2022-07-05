//Parašyti funkciją range(start, end), kuri grąžina mavyvą, kuriame yra skaičiai rėžyje nuo start iki end (neįtraukiant end į rezultatą)

function range(start, end) {
    throw new Error('Function not implemented');
}

// Testavimai apačioje

const test = makeTestFunction((input, output) => `${input[0]} to ${input[1]}: ${output}`, range);

test([1,10], [1,2,3,4,5,6,7,8,9])
test([50, 65], [50,51,52,53,54,55,56,57,58,59,60,61,62,63,64])
test([200, 250], [200,201,202,203,204,205,206,207,208,209,
                  210,211,212,213,214,215,216,217,218,219,
                  220,221,222,223,224,225,226,227,228,229,
                  230,231,232,233,234,235,236,237,238,239,
                  240,241,242,243,244,245,246,247,248,249])

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