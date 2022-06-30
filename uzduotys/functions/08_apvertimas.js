// parašykite funkciją reverse(str), kuri grąžina duotą tekstą parašytą atbuline tvarka: 'Labas!' -> '!sabaL'

function reverse(str) {
    throw new Error('Function not implemented')
}

// Testavimai apačioje

console.log("'Labas!' apverstas: ", reverse('Labas!'))
console.log("'The quick brown fox jumps over the lazy dog' apverstas: ", reverse('The quick brown fox jumps over the lazy dog'))

assert(() => reverse('Labas!'), '!sabaL')
assert(() => reverse('The quick brown fox jumps over the lazy dog'), 'god yzal eht revo spmuj xof nworb kciuq ehT')


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