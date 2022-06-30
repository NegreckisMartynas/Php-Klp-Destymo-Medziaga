function createObject(name) {
    //const namePriv = name // closure saugo ir funkciju parametrus
    return {
        getName: function() { 
            return name;
        },
        sayHello: function() {
            console.log('Hello, ' + name);
        }
    }
}

const me = createObject('Martynas');
console.log(me.getName());
console.log(me.name); //nepasiekiamas
me.sayHello()