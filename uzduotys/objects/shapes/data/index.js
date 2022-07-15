function loadData(file, name) {
    const loaded = require(file);
    return {
        help() {
            return loaded.help(`shape.${name}`);
        },
        sets() {
            return loaded.sets();
        },
        ...loaded.set
    }
}

const shape = {
    get Rectangle() {
        return loadData('./rectangle.js', 'Rectangle');
    },
    get Circle() {
        return loadData('./circle.js', 'Circle');
    },
    get Dot() {
        return loadData('./dot.js', 'Dot');
    },
    get Triangle() {
        return loadData('./triangle.js', 'Triangle');
    },
}

function help(optionalShape) {
    if(optionalShape) {
        optionalShape.help()
    }
    else{
        console.log(
`Su šiuo įrankiu galite patestuoti savo klases su sugeneruotais duomenimis.
Naudojimo pavyzdys:
    test(Rectangle).take('width', 'height')
                   .withData(data.set(shape.Rectangle.small).random())
                   .print()
`
        )
    }
}


function random(min, maxExclusive) {
    return Math.random()*(maxExclusive-min) + min; 
}


function selectShape(selShape) {
    return { 
        withRange: (selRange) => selectRange(selShape, selRange)
    }
};

function selectRange(selShape, selRange) {
    const set = selShape[selRange];
    return {
        random: (limit) => randomData(set, limit),
        first: (limit) => firstData(set, limit)
    }
}

function selectSet(selSet) {
    return {
        random: (limit) => randomData(selSet, limit),
        first: (limit) => firstData(selSet, limit)
    }
}

function randomData(selSet, limit) {
    limit = limit ?? 1;
    const randInRange = new Set();

    while(randInRange.size < limit && randInRange.size !== selSet.length) {
        randInRange.add(Math.floor(random(0, selSet.length)))
    }
    return [...randInRange].map(i => selSet[i]);
}

function firstData(selSet, limit) {
    limit = limit ?? 1;
    return selSet.slice(0, limit);
}
 

exports.shape = shape;
exports.data = {
    for: selectShape,
    set: selectSet,
}
exports.help = help;
