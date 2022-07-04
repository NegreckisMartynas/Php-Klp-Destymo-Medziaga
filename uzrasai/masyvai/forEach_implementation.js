/*
array - masyvas
action - funkcija, priimanti masyvo elementus
*/
function forEach(array, action) {
    for(let i = 0; i < array.length; i++) {
        action(array[i]) // print(1); print(2); print(3)
    }
}

//funkcijos print nekvieciame, paduodame kaip kintamaji nes kviecia forEach
forEach([1, 2, 3], print) // array = [1,2,3], action = print
forEach([1, 2, 3], addAndPrint) //array = [1,2,3], action = addAndPrint

function print(element) {
    console.log(element)
}

function addAndPrint(element) {
    console.log(10 + element)
}

// funkcijos prikabinimas prie masyvo objekto
const array = [4, 5, 6];
array.forEach = (action) => forEach(array, action);

array.forEach(console.log)