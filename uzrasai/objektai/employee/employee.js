function employee(firstName, lastName, salary) {
    return {
        vardas: firstName,
        lastName,
        salary,
        calculateWages(hours) {
            return this.salary * hours;
        }
    }
}

let emp1 = employee('Vardenis', 'Pavardenis', 20);
let emp2 = emp1;
emp1 = employee('Vard', 'Pav', 22.2);

console.log(emp1.calculateWages(20));
console.log(emp1.lastName);
console.log(emp2.calculateWages(20));
console.log(emp2.lastName);
console.log(emp1);


//emp1 = {1}
// --emp2 = emp1 = {1}
//emp1 = {2}
// emp1 = {2}, --emp2 = {1};
const arr = ['a','b'];
const temp = arr[0]; //temp = 'a'; arr = ['a', 'b'];
arr[0] = arr[1] // temp = 'a'; arr = ['b', 'b']
arr[1] = temp; // temp = 'a'; arr = ['b', 'a']