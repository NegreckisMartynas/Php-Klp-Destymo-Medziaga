const data = require('./data.js')
// arr.sort(comparator)

console.log('Labas'.localeCompare('Viso'))
console.log('Viso'.localeCompare('Labas'))
console.log('Labas'.localeCompare('Labas'))


data[2].map(student => student.first_name)
       .sort((a, b) => b.localeCompare(a))
       .forEach(name => console.log(name));

[0,1,8,3,6,5,2].sort( (a, b) => b - a)
               .forEach(e => console.log(e));

const fullName = (s) => s.first_name + ' ' + s.last_name;               
data[1].sort( (a, b) => a.last_name.localeCompare(b.last_name))
       .map(fullName)
       .forEach(name => console.log(name));

function studentGradeAvg(student) {
    const avg = 
        student.grades.reduce((sum, n) => sum+n) / student.grades.length;
    return {
        firstName: student.first_name,
        lastName: student.last_name,
        avg: Math.round(avg),
    }
}

data[2].map(studentGradeAvg)
       .sort(funSort)
       .forEach(student => console.log(student))

function compareStudents(a, b) { 
    let comp = a.avg - b.avg; // comp == -1 | 0 | 1
    // jei neigiamas, a pries b, jei teigiamas a uz b, jei 0 tvarka nesvarbi
    if(comp === 0){ // jei a.avg === b.avg, lyginti pagal pavarde
        comp = a.lastName.localeCompare(b.lastName);
    } // comp === -1 | 0 | 1
    if(comp === 0) {
        comp = a.firstName.localeCompare(b.firstName);
    }
    return comp;
}

function funSort(a, b) {
    return (Math.random() * 2) - 1;
}


function bubbleSort(arr, comparator) {
    for(let i=0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(comparator(arr[i], arr[j]) > 0) { // arr[i] - arr[j];
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([0,5,7,1,6,1,3,4,8], (b,a) => a-b))