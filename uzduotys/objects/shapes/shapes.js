// Parašykite klases su metodais kurios atitinka įvairias geometrines figūras plokštumoje
// Reikalingi metodai:
// perimeter() - geometrinės figūros perimetras, skaičius suapvalintas 0.0001 tikslumu, 
// area() - geometrinės figūros plotas, skaičius suapvalintas 0.0001 tikslumu, 
// toString() - gražus trumpas figūros aprašymas, pvz: 'Circle(radius: 10)'

// Reikalingos formos: apskritimas, keturkampis, kvadratas, trikampis
// Kontruktorių parametrai jūsų pasirenkami; parinkite tokius, kurie jūsų manymu reikalingi formai nustatyti


const dot = {input: {x: 0, y: 0}, output: {perimeter: 0, area:0}}

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

test(Dot).take('x','y').withData(dot).print()

function test(shapeClass) {
    function testTake(shapeClass, keys) {
        return {
            withData(data) {
                return testTakeWithData(shapeClass, keys, data);
            }
        }
    }
    
    function testTakeWithData(shapeClass, keys, data) {
        const {input, output} = data;
        const shape = new shapeClass(...keys.map(key => input[key]));
        const shapePerimeter = shape.perimeter();
        const shapeArea = shape.area()
        return {
            perimeter: closeEnough(output.perimeter, shapePerimeter) ? '✅' : `Expected: ${output.perimeter}, got: ${shapePerimeter}`,
            area:       closeEnough(output.area, shapeArea)          ? '✅' : `Expected: ${output.area}, got: ${shapeArea}`,
            print() {
                console.log(`Testing ${shapeClass.name} with ${JSON.stringify(input)}`)
                console.log('Perimeter: ', this.perimeter);
                console.log('Area: ', this.area)
            }
        };
    }

    return {
        take(...keys) {
            return testTake(shapeClass, keys);
        }
    }
}



function closeEnough(numA, numB) {
    return Math.abs(numA-numB) <= 0.00001;
}