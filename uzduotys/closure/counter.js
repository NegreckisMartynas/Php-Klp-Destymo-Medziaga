function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        console.log(count);
    }
}

let counter = createCounter();
let counter2 = createCounter();

counter()
counter()
counter()
counter()
counter()
counter()

counter = null; // cia let count nustoja egzistuoti.

counter2()
counter2()
counter2()