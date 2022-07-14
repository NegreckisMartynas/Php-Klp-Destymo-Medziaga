const test = require('./test');
const {data, shape, help} = require('./data');

// Parašykite klases su metodais kurios atitinka įvairias geometrines figūras plokštumoje
// Reikalingi metodai:
// perimeter() - geometrinės figūros perimetras, skaičius suapvalintas 0.0001 tikslumu, 
// area() - geometrinės figūros plotas, skaičius suapvalintas 0.0001 tikslumu, 
// toString() - gražus trumpas figūros aprašymas, pvz: 'Circle(radius: 10)'

// Reikalingos formos: apskritimas, keturkampis, kvadratas, trikampis
// Kontruktorių parametrai jūsų pasirenkami; parinkite tokius, kurie jūsų manymu reikalingi formai nustatyti

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    perimeter() {
        return 0;
    }

    area() {
        return 0;
    }
}

for(let i = 0; i < 10000; i++) {
    test(Dot).take('x','y')
                .withData(data.set(shape.Dot.test).random(50))
                .printErrors()
}

help();