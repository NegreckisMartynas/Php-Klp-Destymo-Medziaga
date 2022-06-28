function eilute(simboliuSkaicius) {
    let str = ''
    for(let i = 0; i < simboliuSkaicius; i++) {
        str += '*';
    }
    return str; //console.log turi but bent vienas, kad butu isvedami duomenys
}

function kvadratas(aukstai) {
    // for loop - eilute(i);
    for(let i = 1; i <= aukstai; i++) {
        console.log( eilute(aukstai) );
    }
}

//console.log(eilute(5));
kvadratas(2);

// *****
// *****
// *****
// *****
// *****

// i = num - priskyrimas (i reiksme tokia pat kaip num)
// i === num - patikrinimas, ar i lygus num
// jei num === 0, tai i = num --> 0, o 0 == false
// jei num === 2, tai i = num --> 2, o 2 == true