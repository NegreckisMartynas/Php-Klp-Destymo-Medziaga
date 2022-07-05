const array = [100, 200, 300, 400, 500]
for(let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
console.log('==========');

array.forEach( 
    (element) => console.log(element) // inline funkcija
)
console.log('==========');

function printElement(element) {
    console.log('Elementas: ' + element)
}
array.forEach(printElement); // funkcijos padavimas

console.log('==========');

const printElement2 = (element) => console.log(element); // alternatyvus funkcijos aprasymas
array.forEach(printElement2) //funkcijos padavimas 2
array.forEach(console.log);


