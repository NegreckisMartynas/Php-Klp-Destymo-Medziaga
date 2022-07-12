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

console.log('============');
// Suskaičiuoti studento pažymių vidurkį
function gradesAverage(student) {
    const sum = student.grades.reduce((sum, n) => sum + n);
    const avg = sum / student.grades.length;
    return avg;
}
//console.log(data[0][0]);
//console.log(gradesAverage(data[0][0]));
data[1].map(gradesAverage) // [avg, avg, avg]
       .forEach(avg => console.log(avg));
console.log('============');
// Atspausdinti studento vardą, pavardę bei jo pažymių vidurkį
function studentGradeAvg(student) {
     const avg = gradesAverage(student);
     const name = fullName(student);
     return {
        name: name,
        avg: avg,
     }
}

data[1].map(studentGradeAvg) //[{name, avg}, {name, avg}, {name, avg}]
       .forEach(student => console.log(student.name, student.avg));


// Išrinkti tik pažymius, kurie mažensi už 4



// Atspausdinti studentus, kurių bent vienas pažimys mažesnis už 4
