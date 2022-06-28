function zvaigzdutes(count) {
    let stars = ''
    for(let i = 0; i < count; i++) {
        stars = stars + '*';
    }
    console.log(stars);
}

function trikampis(size) {
    for(let i = 0; i < size; i++) {
        zvaigzdutes(i+1)
    }
}

// Kvadratas:
// input: kvadratas(5)
// output:
// *****
// *****
// *****
// *****
// *****

// input: kvadratas(2)
// output:
// **
// **
function kvadratas(size) {
    for(let i = 0; i < size; i++) {
        zvaigzdutes(size)
    }
}

kvadratas(5);
console.log('===========')
kvadratas(2);

// Eglute: skaicius - aukstai, kievienas aukstis -trikampis, vienu didesnis uz auksciau buvusi auksti
// input: eglute(5)
// output:
// *
// *
// **
// *
// **
// ***
// *
// **
// ***
// ****
// *
// **
// ***
// ****
// *****

function eglute(layers) {
    for(let i=0; i < layers+1; i++) {
        trikampis(i);
    }
}

console.log('===========')
eglute(5);


// Zvaigzdutes desiniau: spausdina eilute, kuri turi tiek tarpu, kiek rodo pirmas skaicius ir zvaigzduciu tiek, kiek yra antras skaicius
// desZvaigzdutes(5, 3)
//|     ***
// desZvaigzdutes(2, 7)
//|  *******
function desZvaigzdutes(spaces, stars) {
    let line = '';
    for(let i = 0; i < spaces; i++) {
        line = line + ' ';
    }
    for(let i = 0; i < stars; i++) {
        line = line + '*';
    }
    console.log(line);
}

console.log('01234567')
desZvaigzdutes(5, 3)
console.log('012345678')
desZvaigzdutes(2, 7)

// desininis trikampis: trikampis, kur lygiuote desinej pusej
// Prideti tarpu, kad pastumti eilute i desine
// desTrikampis(4)

function desTrikampis(size) {
    for(let i = 0; i < size; i++) {
        desZvaigzdutes(i, size-i);
    }
}

console.log('===========')
desTrikampis(4);


function eiluteSuTarpu(length) {
    if(length === 0) {
        console.log('')
        return;
    }
    let stars = '*'

    for(let i = 1; i < length-1; i++) {
        stars = stars + ' ';
    }

    stars = stars + '*';
    console.log(stars);
}

// tuscias kvadratas: Tas pats kaip kvadratas, bet viduje jo yra tarpai vietoj zvaigzduciu
// tusciasKvadratas(5)
// *****
// *   *
// *   *
// *   *
// *****
// tusciasKvadratas(3)
// ***
// * *
// ***
function tusciasKvadratas(size) {
    zvaigzdutes(size);
    for(let i = 1; i < size-1; i++){
        eiluteSuTarpu(size);
    }
    zvaigzdutes(size);
}

console.log('0123456789')
tusciasKvadratas(5)
console.log('0123456789')
tusciasKvadratas(3)
console.log('0123456789')
tusciasKvadratas(10)
