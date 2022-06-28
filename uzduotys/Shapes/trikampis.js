function eilute(simboliuSkaicius) {
    let str = ''
    for(let i = 0; i < simboliuSkaicius; i++) {
        str += '*';
    }
    console.log(str); //console.log turi but bent vienas, kad butu isvedami duomenys
}

function trikampis(aukstai) {
    // for loop - eilute(i);
    for(let i = 1; i <= aukstai; i++) {
        eilute(i);
    }
}

trikampis(3);
trikampis(5);
trikampis(10);

// *
// **
// ***
// ****