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
console.log('============');

// Išrinkti tik pažymius, kurie mažensi už 4
function gradesLowerThan4(student){
    return student.grades.filter(grade => grade < 4);
}

//const gradesLowerThan4 = () => student.grades.filter(grade => grade < 4)

data[1].map(gradesLowerThan4)
       .forEach(grades => console.log(grades));
console.log('============');
// Atspausdinti studentus, kurių bent vienas pažimys mažesnis už 4

function studentWithGradesLower(student){
    return {
        name: student.first_name + ' ' + student.last_name,
        gradesLowerThan4: gradesLowerThan4(student)
    };
}

function anyGradeLowerThan4(student) { 
    const lowerThan4 = gradesLowerThan4(student);
    return lowerThan4.length > 0;
}

data[2].filter(anyGradeLowerThan4)
       .map(studentWithGradesLower)
       .forEach(el => console.log(el));