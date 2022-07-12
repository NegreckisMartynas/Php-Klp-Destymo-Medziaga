const data = require('./data.js')

// Parašyti funkcijas: 
//console.log(data[0]);
// Atspausdinti studentų vardus ir pavardes
function fullName(student) {
    return student.first_name + ' ' + student.last_name;
}

function printNames(student) {
    console.log('Full name: ', fullName(student));
    //return undefined
}

//printNames(data[2][0])
data[1].forEach(printNames);
data[1].map(student => fullName(student))
       .forEach(name => console.log(name));

// Suskaičiuoti studento pažymių vidurkį



// Atspausdinti studento vardą, pavardę bei jo pažymių vidurkį



// Išrinkti tik pažymius, kurie mažensi už 4



// Atspausdinti studentus, kurių bent vienas pažimys mažesnis už 4
