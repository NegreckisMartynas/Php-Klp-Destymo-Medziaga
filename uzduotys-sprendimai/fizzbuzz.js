//Parašykite funkciją fizzbuzz(), kuri spausdintų skaičius nuo 1 iki 100, 
// bet jei skaičius dalinamas be liekanos iš 3, vietoj skaičiaus spausdinkite 'fizz', 
// jei iš 5 - 'buzz', 
// o jei ir iš 3, ir iš 5 - spausdinkite 'fizzbuzz'

function fizzbuzz() {
    for(let i = 1; i <= 15; i++) {
        if( i % 3 === 0 && i % 15 !== 0) {
            console.log('fizz')
        }
        else if (i % 5 === 0 && i % 15 !== 0) {
            console.log('buzz');
        } 
        else if (i % 15 === 0) {
            console.log('fizzbuzz');
        }
        else {
            console.log(i);
        }
    }
}


function fizzbuzz2() {
    for(let i = 1; i <= 15; i++) {
        console.log('Loop:', i)
        let message = '';

        if(i % 3 === 0) {
            message += 'fizz';
            console.log('Divisible by 3, message is: ', message)
        }
        if(i % 5 === 0) {
            message += 'buzz';
            console.log('Divisible by 5, message is: ', message)
        }
        if(message === '') { // kitais atvejais skaicius
            console.log('Message is empty')
            message = i;
            console.log('message is: ', message)
        }

        console.log('Final message:', message);
    }
}

fizzbuzz2();
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...