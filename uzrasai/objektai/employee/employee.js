function employee(firstName, lastName, salary) {
    return {
        vardas: firstName,
        lastName,
        salary,
        calculateWages(hours) {
            return this.salary * hours;
        },
        raiseSalary(raise) {
            this.salary += raise;
        },
        toString() {
            return 'Employee "' + this.vardas + 
                   ' ' + this.lastName +
                   '"; Salary: ' + this.salary
        }
    }
}
function volunteer(firstName, lastName) {
    return {
        vardas: firstName,
        lastName,
        salary: 0,
        calculateWages(hours) {
            return 0;
        },
        raiseSalary(raise) {},
        toString() {
            return 'Volunteer "' + this.vardas + ' ' + this.lastName + '"'
        }
    }
}
function boss(firstName, lastName) {
    return {
        vardas: firstName,
        lastName,
        salary: 100,
        calculateWages(hours) {
            return this.salary * hours;
        },
        raiseSalary(raise) {
            this.salary += raise * 2;
        },
        toString() {
            return 'CEO "' + this.vardas + ' ' + this.lastName + 
                   '"; Salary: ' + this.salary;
        }
    }
}


let emp1 = employee('Vardenis', 'Pavardenis', 20);
let emp2 = emp1;
emp1 = employee('Vard', 'Pav', 22.2);

console.log(emp1.calculateWages(20));
console.log(emp1.lastName);
console.log('before raise:', emp2.calculateWages(20));
console.log(emp2.lastName);
emp2.raiseSalary(0.5);
console.log('after raise:', emp2.calculateWages(20));
console.log(emp1);

const employees = [
    boss('Boss', 'Ceo'),
    employee('Vard', 'Pav', 20),
    employee('Foo', 'Bar', 25.2),
    volunteer('Volun', 'Teer'), //unpaid, salary never increases
    employee('Int', 'Ern', 0),
    {
        calculateWages() {return 10},
        raiseSalary(raise) { console.log('Salaries raised:', raise )},
        toString() { return 'Secret employee'}
    }, //unpaid for now, but paid after salary increase
]

function wagesPaid(workHours, employees) {
    return employees.map(emp => emp.calculateWages(workHours))
                    .reduce( (sum, n) => sum + n);
}
function printEmployees(employees) {
    employees.map( emp => emp.toString())
             .forEach( str => console.log(str));
}

console.log('Wages paid for employees after 1 hour:',
            wagesPaid(1, employees));
employees.forEach(emp => emp.raiseSalary(10));
console.log('Wages paid for employees after 1 hour:',
            wagesPaid(1, employees));
printEmployees(employees);

//emp1 = {1}
// --emp2 = emp1 = {1}
//emp1 = {2}
// emp1 = {2}, --emp2 = {1};