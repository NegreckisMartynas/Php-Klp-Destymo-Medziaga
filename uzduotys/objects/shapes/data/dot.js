exports.help = (prefix) => {
    console.log('Taškas; input: {x: 10, y: 10}');
    console.log('x ir y - koordinatės plokštumoje');
    console.log('Perimetres ir plotas visada 0, šitas testas skirtas tik demonstracijai.')
    console.log('Galimas tik vienas duomenų set:');
    console.log(`  ${prefix}.test: x ir y [-10;10]`)
  }
  
  exports.sets = () => Object.getOwnPropertyNames(exports.set);
  
  exports.set = {};

  exports.set.test = [
    { input: { x: -5, y: -9 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: -4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 3, y: -2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 9, y: 4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 8, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -7, y: 2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -4, y: -0 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 6, y: -9 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -10, y: 2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: 9 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: 2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 9, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -8, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: -5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: 8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -6, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -7, y: -10 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 4, y: 4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -1, y: 9 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -7, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -6, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -8, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 9, y: 7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -4, y: -10 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -0, y: 7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 4, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 8, y: -5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 4, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: -1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -7, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -4, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: 7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 8, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -4, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 6, y: 8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 9, y: 4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: -2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 6, y: 2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -1, y: 8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: 9 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -10, y: -4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 3, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: -6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: 1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 10, y: -1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -0, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: -10 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: 10 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -3, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -0, y: 8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 1, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: -2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 9, y: 0 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -1, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 10, y: 7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 0, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 0, y: -1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 1, y: 10 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -6, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: -4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 8, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 4, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -2, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: 6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -5, y: 4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 8, y: -2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -10, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -10, y: -2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -6, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 1, y: -6 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 0, y: -3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 3, y: -1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 10, y: 8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: 2 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: 5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 7, y: -8 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 2, y: 3 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: -4 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -9, y: -7 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 5, y: -1 }, output: { perimeter: 0, area: 0 } },
    { input: { x: -1, y: -5 }, output: { perimeter: 0, area: 0 } },
    { input: { x: 1, y: -5 }, output: { perimeter: 0, area: 0 } }
  ]
  