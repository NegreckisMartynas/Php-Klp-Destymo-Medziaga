let x = 891 / 217

console.log(x);

console.log('Matematinis apvalinimas:', Math.round(x));
console.log('Apvalinimas i mazaja puse:', Math.floor(x));
console.log('Apvalinimas i didziaja puse:', Math.ceil(x));

console.log('Apvalinimas po kablelio:');
console.log('2 simboliai po kablelio:', Math.round(x * 100) / 100);
console.log('4 simboliai po kablelio:', Math.round(x * 10000) / 10000);
// 4.105990783410138
// 4.1060

function apvalinimas(skaicius, poKablelio) {
    const daugiklis = 10 ** poKablelio;// jei 1: 10, jei 2: 100, jei 3: 1000
    return Math.round(skaicius * daugiklis) / daugiklis;
}

console.log(apvalinimas(x, 6));