function test(shapeClass) {
    function testTake(shapeClass, keys) {
        return {
            withData(data) {
                if(Array.isArray(data)) {
                    return testTakeWithDataArray(shapeClass, keys, data);
                }
                else {
                    return testTakeWithData(shapeClass, keys, data);
                }
            }
        }
    }
    
    function testTakeWithData(shapeClass, keys, data) {
        if(!data) console.log(data);
        const {input, output} = data;
        const shape = new shapeClass(...keys.map(key => input[key]));
        const shapePerimeter = shape.perimeter();
        const shapeArea = shape.area()

        function isError(field){
            return field !== '✅'; 
        }

        return {
            perimeter: closeEnough(output.perimeter, shapePerimeter) ? '✅' : `Expected: ${output.perimeter}, got: ${shapePerimeter}`,
            area:       closeEnough(output.area, shapeArea)          ? '✅' : `Expected: ${output.area}, got: ${shapeArea}`,
            print() {
                console.log(`Testing ${shapeClass.name} with ${JSON.stringify(input)}`)
                console.log('Perimeter: ', this.perimeter);
                console.log('Area: ', this.area)
            },
            printErrors() {
                if(isError(this.perimeter) || isError(this.area)){
                    console.log(`Testing ${shapeClass.name} with ${JSON.stringify(input)}`)
                    if(isError(this.perimeter)) console.log('Perimeter: ', this.perimeter);
                    if(isError(this.area)) console.log('Area: ', this.area);
                }
            }
        };
    }

    function testTakeWithDataArray(shapeClass, keys, data) {
        return {
            results: data.map(entry => testTakeWithData(shapeClass, keys, entry)),
            print() {
                this.results.forEach(res => res.print());
            },
            printErrors() {
                this.results.forEach(res => res.printErrors());
            }
        }
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

module.exports = test;