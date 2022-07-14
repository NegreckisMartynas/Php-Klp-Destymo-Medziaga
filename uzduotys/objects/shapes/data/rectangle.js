exports.help = (prefix) => {
  console.log('Stačiakampiai; input: {width: 10, height: 10}');
  console.log('width - plotas, height - aukštis')
  console.log('Galimi duomenų set-ai');
  console.log(`  ${prefix}.small: aukščiai ir pločiai rėžyje [1;15]`)
  console.log(`  ${prefix}.mid: aukščiai ir pločiai rėžyje [1;100]`)
  console.log(`  ${prefix}.double: aukščiai ir pločiai rėžyje [20;1000], 3 skaičiai po kablelio`)
}

exports.sets = () => Object.getOwnPropertyNames(exports.set);

exports.set = {};

exports.set.small = [
    {
      input: { width: 4, height: 13 },
      output: { perimeter: 34, area: 52 }
    },
    {
      input: { width: 12, height: 11 },
      output: { perimeter: 46, area: 132 }
    },
    {
      input: { width: 13, height: 14 },
      output: { perimeter: 54, area: 182 }
    },
    {
      input: { width: 7, height: 2 },
      output: { perimeter: 18, area: 14 }
    },
    {
      input: { width: 12, height: 11 },
      output: { perimeter: 46, area: 132 }
    },
    {
      input: { width: 9, height: 12 },
      output: { perimeter: 42, area: 108 }
    },
    {
      input: { width: 2, height: 6 },
      output: { perimeter: 16, area: 12 }
    },
    {
      input: { width: 11, height: 3 },
      output: { perimeter: 28, area: 33 }
    },
    {
      input: { width: 14, height: 8 },
      output: { perimeter: 44, area: 112 }
    },
    {
      input: { width: 2, height: 5 },
      output: { perimeter: 14, area: 10 }
    },
    {
      input: { width: 11, height: 11 },
      output: { perimeter: 44, area: 121 }
    },
    {
      input: { width: 4, height: 10 },
      output: { perimeter: 28, area: 40 }
    },
    {
      input: { width: 15, height: 5 },
      output: { perimeter: 40, area: 75 }
    },
    {
      input: { width: 14, height: 10 },
      output: { perimeter: 48, area: 140 }
    },
    {
      input: { width: 12, height: 2 },
      output: { perimeter: 28, area: 24 }
    },
    {
      input: { width: 11, height: 7 },
      output: { perimeter: 36, area: 77 }
    },
    {
      input: { width: 15, height: 8 },
      output: { perimeter: 46, area: 120 }
    },
    {
      input: { width: 4, height: 12 },
      output: { perimeter: 32, area: 48 }
    },
    {
      input: { width: 7, height: 8 },
      output: { perimeter: 30, area: 56 }
    },
    {
      input: { width: 8, height: 3 },
      output: { perimeter: 22, area: 24 }
    },
    {
      input: { width: 13, height: 1 },
      output: { perimeter: 28, area: 13 }
    },
    {
      input: { width: 9, height: 5 },
      output: { perimeter: 28, area: 45 }
    },
    {
      input: { width: 13, height: 8 },
      output: { perimeter: 42, area: 104 }
    },
    {
      input: { width: 8, height: 9 },
      output: { perimeter: 34, area: 72 }
    },
    {
      input: { width: 6, height: 10 },
      output: { perimeter: 32, area: 60 }
    },
    {
      input: { width: 6, height: 13 },
      output: { perimeter: 38, area: 78 }
    },
    {
      input: { width: 13, height: 14 },
      output: { perimeter: 54, area: 182 }
    },
    {
      input: { width: 11, height: 1 },
      output: { perimeter: 24, area: 11 }
    },
    {
      input: { width: 10, height: 5 },
      output: { perimeter: 30, area: 50 }
    },
    {
      input: { width: 14, height: 3 },
      output: { perimeter: 34, area: 42 }
    },
    {
      input: { width: 4, height: 3 },
      output: { perimeter: 14, area: 12 }
    },
    {
      input: { width: 14, height: 8 },
      output: { perimeter: 44, area: 112 }
    },
    {
      input: { width: 1, height: 4 },
      output: { perimeter: 10, area: 4 }
    },
    {
      input: { width: 13, height: 6 },
      output: { perimeter: 38, area: 78 }
    },
    {
      input: { width: 10, height: 13 },
      output: { perimeter: 46, area: 130 }
    },
    {
      input: { width: 13, height: 11 },
      output: { perimeter: 48, area: 143 }
    },
    {
      input: { width: 12, height: 3 },
      output: { perimeter: 30, area: 36 }
    },
    {
      input: { width: 14, height: 10 },
      output: { perimeter: 48, area: 140 }
    },
    {
      input: { width: 10, height: 2 },
      output: { perimeter: 24, area: 20 }
    },
    {
      input: { width: 9, height: 13 },
      output: { perimeter: 44, area: 117 }
    },
    {
      input: { width: 10, height: 1 },
      output: { perimeter: 22, area: 10 }
    },
    {
      input: { width: 13, height: 14 },
      output: { perimeter: 54, area: 182 }
    },
    {
      input: { width: 13, height: 12 },
      output: { perimeter: 50, area: 156 }
    },
    {
      input: { width: 12, height: 8 },
      output: { perimeter: 40, area: 96 }
    },
    {
      input: { width: 14, height: 12 },
      output: { perimeter: 52, area: 168 }
    },
    {
      input: { width: 5, height: 13 },
      output: { perimeter: 36, area: 65 }
    },
    {
      input: { width: 6, height: 11 },
      output: { perimeter: 34, area: 66 }
    },
    {
      input: { width: 12, height: 5 },
      output: { perimeter: 34, area: 60 }
    },
    {
      input: { width: 14, height: 8 },
      output: { perimeter: 44, area: 112 }
    },
    {
      input: { width: 5, height: 14 },
      output: { perimeter: 38, area: 70 }
    },
    {
      input: { width: 9, height: 10 },
      output: { perimeter: 38, area: 90 }
    },
    {
      input: { width: 2, height: 13 },
      output: { perimeter: 30, area: 26 }
    },
    {
      input: { width: 6, height: 14 },
      output: { perimeter: 40, area: 84 }
    },
    {
      input: { width: 7, height: 8 },
      output: { perimeter: 30, area: 56 }
    },
    {
      input: { width: 7, height: 13 },
      output: { perimeter: 40, area: 91 }
    },
    {
      input: { width: 12, height: 9 },
      output: { perimeter: 42, area: 108 }
    },
    {
      input: { width: 10, height: 11 },
      output: { perimeter: 42, area: 110 }
    },
    {
      input: { width: 7, height: 10 },
      output: { perimeter: 34, area: 70 }
    },
    {
      input: { width: 14, height: 13 },
      output: { perimeter: 54, area: 182 }
    },
    {
      input: { width: 5, height: 5 },
      output: { perimeter: 20, area: 25 }
    },
    {
      input: { width: 5, height: 10 },
      output: { perimeter: 30, area: 50 }
    },
    {
      input: { width: 13, height: 9 },
      output: { perimeter: 44, area: 117 }
    },
    {
      input: { width: 14, height: 2 },
      output: { perimeter: 32, area: 28 }
    },
    {
      input: { width: 5, height: 15 },
      output: { perimeter: 40, area: 75 }
    },
    {
      input: { width: 9, height: 14 },
      output: { perimeter: 46, area: 126 }
    },
    {
      input: { width: 7, height: 8 },
      output: { perimeter: 30, area: 56 }
    },
    {
      input: { width: 7, height: 3 },
      output: { perimeter: 20, area: 21 }
    },
    {
      input: { width: 4, height: 10 },
      output: { perimeter: 28, area: 40 }
    },
    {
      input: { width: 15, height: 11 },
      output: { perimeter: 52, area: 165 }
    },
    {
      input: { width: 2, height: 13 },
      output: { perimeter: 30, area: 26 }
    },
    {
      input: { width: 2, height: 9 },
      output: { perimeter: 22, area: 18 }
    },
    { input: { width: 1, height: 2 }, output: { perimeter: 6, area: 2 } },
    {
      input: { width: 10, height: 10 },
      output: { perimeter: 40, area: 100 }
    },
    {
      input: { width: 3, height: 9 },
      output: { perimeter: 24, area: 27 }
    },
    {
      input: { width: 10, height: 6 },
      output: { perimeter: 32, area: 60 }
    },
    {
      input: { width: 10, height: 9 },
      output: { perimeter: 38, area: 90 }
    },
    {
      input: { width: 4, height: 1 },
      output: { perimeter: 10, area: 4 }
    },
    {
      input: { width: 14, height: 7 },
      output: { perimeter: 42, area: 98 }
    },
    {
      input: { width: 5, height: 15 },
      output: { perimeter: 40, area: 75 }
    },
    {
      input: { width: 6, height: 12 },
      output: { perimeter: 36, area: 72 }
    },
    {
      input: { width: 6, height: 1 },
      output: { perimeter: 14, area: 6 }
    },
    {
      input: { width: 14, height: 11 },
      output: { perimeter: 50, area: 154 }
    },
    {
      input: { width: 13, height: 13 },
      output: { perimeter: 52, area: 169 }
    },
    {
      input: { width: 12, height: 5 },
      output: { perimeter: 34, area: 60 }
    },
    {
      input: { width: 2, height: 9 },
      output: { perimeter: 22, area: 18 }
    },
    {
      input: { width: 15, height: 1 },
      output: { perimeter: 32, area: 15 }
    },
    {
      input: { width: 8, height: 2 },
      output: { perimeter: 20, area: 16 }
    },
    {
      input: { width: 2, height: 7 },
      output: { perimeter: 18, area: 14 }
    },
    {
      input: { width: 8, height: 11 },
      output: { perimeter: 38, area: 88 }
    },
    {
      input: { width: 9, height: 7 },
      output: { perimeter: 32, area: 63 }
    },
    {
      input: { width: 15, height: 3 },
      output: { perimeter: 36, area: 45 }
    },
    {
      input: { width: 12, height: 7 },
      output: { perimeter: 38, area: 84 }
    },
    {
      input: { width: 15, height: 15 },
      output: { perimeter: 60, area: 225 }
    },
    {
      input: { width: 15, height: 6 },
      output: { perimeter: 42, area: 90 }
    },
    {
      input: { width: 4, height: 8 },
      output: { perimeter: 24, area: 32 }
    },
    {
      input: { width: 12, height: 2 },
      output: { perimeter: 28, area: 24 }
    },
    {
      input: { width: 15, height: 10 },
      output: { perimeter: 50, area: 150 }
    },
    {
      input: { width: 7, height: 4 },
      output: { perimeter: 22, area: 28 }
    },
    {
      input: { width: 13, height: 13 },
      output: { perimeter: 52, area: 169 }
    },
    {
      input: { width: 15, height: 7 },
      output: { perimeter: 44, area: 105 }
    }
]

exports.set.mid = [
    {
      input: { width: 10, height: 38 },
      output: { perimeter: 96, area: 380 }
    },
    {
      input: { width: 5, height: 8 },
      output: { perimeter: 26, area: 40 }
    },
    {
      input: { width: 37, height: 16 },
      output: { perimeter: 106, area: 592 }
    },
    {
      input: { width: 22, height: 69 },
      output: { perimeter: 182, area: 1518 }
    },
    {
      input: { width: 47, height: 85 },
      output: { perimeter: 264, area: 3995 }
    },
    {
      input: { width: 78, height: 91 },
      output: { perimeter: 338, area: 7098 }
    },
    {
      input: { width: 55, height: 11 },
      output: { perimeter: 132, area: 605 }
    },
    {
      input: { width: 77, height: 75 },
      output: { perimeter: 304, area: 5775 }
    },
    {
      input: { width: 24, height: 92 },
      output: { perimeter: 232, area: 2208 }
    },
    {
      input: { width: 91, height: 83 },
      output: { perimeter: 348, area: 7553 }
    },
    {
      input: { width: 16, height: 58 },
      output: { perimeter: 148, area: 928 }
    },
    {
      input: { width: 54, height: 52 },
      output: { perimeter: 212, area: 2808 }
    },
    {
      input: { width: 2, height: 9 },
      output: { perimeter: 22, area: 18 }
    },
    {
      input: { width: 12, height: 44 },
      output: { perimeter: 112, area: 528 }
    },
    {
      input: { width: 49, height: 85 },
      output: { perimeter: 268, area: 4165 }
    },
    {
      input: { width: 23, height: 96 },
      output: { perimeter: 238, area: 2208 }
    },
    {
      input: { width: 35, height: 28 },
      output: { perimeter: 126, area: 980 }
    },
    {
      input: { width: 49, height: 47 },
      output: { perimeter: 192, area: 2303 }
    },
    {
      input: { width: 77, height: 77 },
      output: { perimeter: 308, area: 5929 }
    },
    {
      input: { width: 79, height: 15 },
      output: { perimeter: 188, area: 1185 }
    },
    {
      input: { width: 87, height: 38 },
      output: { perimeter: 250, area: 3306 }
    },
    {
      input: { width: 53, height: 80 },
      output: { perimeter: 266, area: 4240 }
    },
    {
      input: { width: 44, height: 55 },
      output: { perimeter: 198, area: 2420 }
    },
    {
      input: { width: 1, height: 37 },
      output: { perimeter: 76, area: 37 }
    },
    {
      input: { width: 4, height: 5 },
      output: { perimeter: 18, area: 20 }
    },
    {
      input: { width: 72, height: 12 },
      output: { perimeter: 168, area: 864 }
    },
    {
      input: { width: 16, height: 61 },
      output: { perimeter: 154, area: 976 }
    },
    {
      input: { width: 2, height: 81 },
      output: { perimeter: 166, area: 162 }
    },
    {
      input: { width: 47, height: 28 },
      output: { perimeter: 150, area: 1316 }
    },
    {
      input: { width: 28, height: 79 },
      output: { perimeter: 214, area: 2212 }
    },
    {
      input: { width: 22, height: 34 },
      output: { perimeter: 112, area: 748 }
    },
    {
      input: { width: 3, height: 36 },
      output: { perimeter: 78, area: 108 }
    },
    {
      input: { width: 15, height: 84 },
      output: { perimeter: 198, area: 1260 }
    },
    {
      input: { width: 26, height: 77 },
      output: { perimeter: 206, area: 2002 }
    },
    {
      input: { width: 71, height: 25 },
      output: { perimeter: 192, area: 1775 }
    },
    {
      input: { width: 48, height: 78 },
      output: { perimeter: 252, area: 3744 }
    },
    {
      input: { width: 89, height: 1 },
      output: { perimeter: 180, area: 89 }
    },
    {
      input: { width: 55, height: 64 },
      output: { perimeter: 238, area: 3520 }
    },
    {
      input: { width: 21, height: 75 },
      output: { perimeter: 192, area: 1575 }
    },
    {
      input: { width: 59, height: 6 },
      output: { perimeter: 130, area: 354 }
    },
    {
      input: { width: 56, height: 26 },
      output: { perimeter: 164, area: 1456 }
    },
    {
      input: { width: 1, height: 46 },
      output: { perimeter: 94, area: 46 }
    },
    {
      input: { width: 34, height: 77 },
      output: { perimeter: 222, area: 2618 }
    },
    {
      input: { width: 21, height: 8 },
      output: { perimeter: 58, area: 168 }
    },
    {
      input: { width: 86, height: 24 },
      output: { perimeter: 220, area: 2064 }
    },
    {
      input: { width: 84, height: 87 },
      output: { perimeter: 342, area: 7308 }
    },
    {
      input: { width: 82, height: 90 },
      output: { perimeter: 344, area: 7380 }
    },
    {
      input: { width: 92, height: 69 },
      output: { perimeter: 322, area: 6348 }
    },
    {
      input: { width: 27, height: 66 },
      output: { perimeter: 186, area: 1782 }
    },
    {
      input: { width: 53, height: 13 },
      output: { perimeter: 132, area: 689 }
    },
    {
      input: { width: 8, height: 47 },
      output: { perimeter: 110, area: 376 }
    },
    {
      input: { width: 91, height: 29 },
      output: { perimeter: 240, area: 2639 }
    },
    {
      input: { width: 76, height: 89 },
      output: { perimeter: 330, area: 6764 }
    },
    {
      input: { width: 71, height: 61 },
      output: { perimeter: 264, area: 4331 }
    },
    {
      input: { width: 22, height: 50 },
      output: { perimeter: 144, area: 1100 }
    },
    {
      input: { width: 5, height: 89 },
      output: { perimeter: 188, area: 445 }
    },
    {
      input: { width: 82, height: 6 },
      output: { perimeter: 176, area: 492 }
    },
    {
      input: { width: 22, height: 23 },
      output: { perimeter: 90, area: 506 }
    },
    {
      input: { width: 97, height: 54 },
      output: { perimeter: 302, area: 5238 }
    },
    {
      input: { width: 15, height: 49 },
      output: { perimeter: 128, area: 735 }
    },
    {
      input: { width: 81, height: 43 },
      output: { perimeter: 248, area: 3483 }
    },
    {
      input: { width: 16, height: 29 },
      output: { perimeter: 90, area: 464 }
    },
    {
      input: { width: 68, height: 46 },
      output: { perimeter: 228, area: 3128 }
    },
    {
      input: { width: 91, height: 39 },
      output: { perimeter: 260, area: 3549 }
    },
    {
      input: { width: 12, height: 50 },
      output: { perimeter: 124, area: 600 }
    },
    {
      input: { width: 28, height: 90 },
      output: { perimeter: 236, area: 2520 }
    },
    {
      input: { width: 35, height: 87 },
      output: { perimeter: 244, area: 3045 }
    },
    {
      input: { width: 37, height: 34 },
      output: { perimeter: 142, area: 1258 }
    },
    {
      input: { width: 67, height: 49 },
      output: { perimeter: 232, area: 3283 }
    },
    {
      input: { width: 83, height: 56 },
      output: { perimeter: 278, area: 4648 }
    },
    {
      input: { width: 27, height: 41 },
      output: { perimeter: 136, area: 1107 }
    },
    {
      input: { width: 55, height: 60 },
      output: { perimeter: 230, area: 3300 }
    },
    {
      input: { width: 9, height: 6 },
      output: { perimeter: 30, area: 54 }
    },
    {
      input: { width: 68, height: 89 },
      output: { perimeter: 314, area: 6052 }
    },
    {
      input: { width: 3, height: 99 },
      output: { perimeter: 204, area: 297 }
    },
    {
      input: { width: 13, height: 42 },
      output: { perimeter: 110, area: 546 }
    },
    {
      input: { width: 2, height: 70 },
      output: { perimeter: 144, area: 140 }
    },
    {
      input: { width: 38, height: 92 },
      output: { perimeter: 260, area: 3496 }
    },
    {
      input: { width: 32, height: 11 },
      output: { perimeter: 86, area: 352 }
    },
    {
      input: { width: 6, height: 54 },
      output: { perimeter: 120, area: 324 }
    },
    {
      input: { width: 77, height: 5 },
      output: { perimeter: 164, area: 385 }
    },
    {
      input: { width: 13, height: 16 },
      output: { perimeter: 58, area: 208 }
    },
    {
      input: { width: 22, height: 5 },
      output: { perimeter: 54, area: 110 }
    },
    {
      input: { width: 13, height: 67 },
      output: { perimeter: 160, area: 871 }
    },
    {
      input: { width: 38, height: 55 },
      output: { perimeter: 186, area: 2090 }
    },
    {
      input: { width: 57, height: 21 },
      output: { perimeter: 156, area: 1197 }
    },
    {
      input: { width: 82, height: 12 },
      output: { perimeter: 188, area: 984 }
    },
    {
      input: { width: 44, height: 79 },
      output: { perimeter: 246, area: 3476 }
    },
    {
      input: { width: 46, height: 52 },
      output: { perimeter: 196, area: 2392 }
    },
    {
      input: { width: 9, height: 69 },
      output: { perimeter: 156, area: 621 }
    },
    {
      input: { width: 87, height: 84 },
      output: { perimeter: 342, area: 7308 }
    },
    {
      input: { width: 47, height: 87 },
      output: { perimeter: 268, area: 4089 }
    },
    {
      input: { width: 31, height: 46 },
      output: { perimeter: 154, area: 1426 }
    },
    {
      input: { width: 18, height: 48 },
      output: { perimeter: 132, area: 864 }
    },
    {
      input: { width: 40, height: 13 },
      output: { perimeter: 106, area: 520 }
    },
    {
      input: { width: 5, height: 73 },
      output: { perimeter: 156, area: 365 }
    },
    {
      input: { width: 34, height: 51 },
      output: { perimeter: 170, area: 1734 }
    },
    {
      input: { width: 73, height: 8 },
      output: { perimeter: 162, area: 584 }
    },
    {
      input: { width: 41, height: 83 },
      output: { perimeter: 248, area: 3403 }
    },
    {
      input: { width: 84, height: 18 },
      output: { perimeter: 204, area: 1512 }
    }
]
  
exports.set.double = [
    {
      input: { width: 758.688, height: 803.258 },
      output: { perimeter: 3123.892, area: 609422.205504 }
    },
    {
      input: { width: 247.592, height: 902.889 },
      output: { perimeter: 2300.962, area: 223548.093288 }
    },
    {
      input: { width: 31.818, height: 669.345 },
      output: { perimeter: 1402.326, area: 21297.21921 }
    },
    {
      input: { width: 778.669, height: 962.748 },
      output: { perimeter: 3482.834, area: 749662.022412 }
    },
    {
      input: { width: 436.379, height: 584.818 },
      output: { perimeter: 2042.394, area: 255202.294022 }
    },
    {
      input: { width: 403.416, height: 152.587 },
      output: { perimeter: 1112.006, area: 61556.037192 }
    },
    {
      input: { width: 996.035, height: 32.577 },
      output: { perimeter: 2057.224, area: 32447.832195 }
    },
    {
      input: { width: 514.98, height: 626.043 },
      output: { perimeter: 2282.046, area: 322399.62414 }
    },
    {
      input: { width: 410.658, height: 400.269 },
      output: { perimeter: 1621.854, area: 164373.667002 }
    },
    {
      input: { width: 241.399, height: 466.236 },
      output: { perimeter: 1415.27, area: 112548.904164 }
    },
    {
      input: { width: 617.614, height: 513.446 },
      output: { perimeter: 2262.12, area: 317111.437844 }
    },
    {
      input: { width: 854.277, height: 432.598 },
      output: { perimeter: 2573.75, area: 369558.521646 }
    },
    {
      input: { width: 550.188, height: 409.932 },
      output: { perimeter: 1920.24, area: 225539.667216 }
    },
    {
      input: { width: 956.073, height: 677.229 },
      output: { perimeter: 3266.604, area: 647480.361717 }
    },
    {
      input: { width: 169.772, height: 559.854 },
      output: { perimeter: 1459.252, area: 95047.533288 }
    },
    {
      input: { width: 507.301, height: 914.314 },
      output: { perimeter: 2843.23, area: 463832.406514 }
    },
    {
      input: { width: 794.424, height: 692.003 },
      output: { perimeter: 2972.854, area: 549743.791272 }
    },
    {
      input: { width: 474.383, height: 853.354 },
      output: { perimeter: 2655.474, area: 404816.630582 }
    },
    {
      input: { width: 755.992, height: 667.703 },
      output: { perimeter: 2847.39, area: 504778.126376 }
    },
    {
      input: { width: 519.925, height: 371.449 },
      output: { perimeter: 1782.748, area: 193125.621325 }
    },
    {
      input: { width: 549.492, height: 442.387 },
      output: { perimeter: 1983.758, area: 243088.117404 }
    },
    {
      input: { width: 151.993, height: 545.009 },
      output: { perimeter: 1394.004, area: 82837.552937 }
    },
    {
      input: { width: 450.368, height: 234.364 },
      output: { perimeter: 1369.464, area: 105550.045952 }
    },
    {
      input: { width: 716.323, height: 661.054 },
      output: { perimeter: 2754.754, area: 473528.184442 }
    },
    {
      input: { width: 303.178, height: 397.63 },
      output: { perimeter: 1401.616, area: 120552.66814 }
    },
    {
      input: { width: 257.483, height: 802.318 },
      output: { perimeter: 2119.602, area: 206583.245594 }
    },
    {
      input: { width: 281.569, height: 901.306 },
      output: { perimeter: 2365.75, area: 253779.829114 }
    },
    {
      input: { width: 682.211, height: 281.823 },
      output: { perimeter: 1928.068, area: 192262.750653 }
    },
    {
      input: { width: 830.304, height: 948.333 },
      output: { perimeter: 3557.274, area: 787404.683232 }
    },
    {
      input: { width: 363.562, height: 99.123 },
      output: { perimeter: 925.37, area: 36037.356126 }
    },
    {
      input: { width: 126.958, height: 848.221 },
      output: { perimeter: 1950.358, area: 107688.441718 }
    },
    {
      input: { width: 775.435, height: 941.495 },
      output: { perimeter: 3433.86, area: 730068.175325 }
    },
    {
      input: { width: 230.173, height: 643.133 },
      output: { perimeter: 1746.612, area: 148031.852009 }
    },
    {
      input: { width: 981.781, height: 657.992 },
      output: { perimeter: 3279.546, area: 646004.043752 }
    },
    {
      input: { width: 869.233, height: 754.079 },
      output: { perimeter: 3246.624, area: 655470.351407 }
    },
    {
      input: { width: 10, height: 412.932 },
      output: { perimeter: 845.864, area: 4129.32 }
    },
    {
      input: { width: 637.181, height: 357.462 },
      output: { perimeter: 1989.286, area: 227767.994622 }
    },
    {
      input: { width: 705.837, height: 62.278 },
      output: { perimeter: 1536.23, area: 43958.116686 }
    },
    {
      input: { width: 69.829, height: 69.728 },
      output: { perimeter: 279.114, area: 4869.036512 }
    },
    {
      input: { width: 212.951, height: 884.879 },
      output: { perimeter: 2195.66, area: 188435.867929 }
    },
    {
      input: { width: 351.976, height: 113.298 },
      output: { perimeter: 930.548, area: 39878.176848 }
    },
    {
      input: { width: 316.232, height: 540.408 },
      output: { perimeter: 1713.28, area: 170894.302656 }
    },
    {
      input: { width: 922.65, height: 156.936 },
      output: { perimeter: 2159.172, area: 144797.0004 }
    },
    {
      input: { width: 209.462, height: 888.033 },
      output: { perimeter: 2194.99, area: 186009.168246 }
    },
    {
      input: { width: 387.635, height: 575.891 },
      output: { perimeter: 1927.052, area: 223235.507785 }
    },
    {
      input: { width: 181.258, height: 133.664 },
      output: { perimeter: 629.844, area: 24227.669312 }
    },
    {
      input: { width: 914.788, height: 850.849 },
      output: { perimeter: 3531.274, area: 778346.455012 }
    },
    {
      input: { width: 545.286, height: 158.249 },
      output: { perimeter: 1407.07, area: 86290.964214 }
    },
    {
      input: { width: 667.573, height: 376.449 },
      output: { perimeter: 2088.044, area: 251307.188277 }
    },
    {
      input: { width: 485.121, height: 842.367 },
      output: { perimeter: 2654.976, area: 408649.921407 }
    },
    {
      input: { width: 221.006, height: 128.164 },
      output: { perimeter: 698.34, area: 28325.012984 }
    },
    {
      input: { width: 911.571, height: 954.964 },
      output: { perimeter: 3733.07, area: 870517.488444 }
    },
    {
      input: { width: 922.931, height: 304.175 },
      output: { perimeter: 2454.212, area: 280732.536925 }
    },
    {
      input: { width: 546.974, height: 473.382 },
      output: { perimeter: 2040.712, area: 258927.646068 }
    },
    {
      input: { width: 606.652, height: 631.584 },
      output: { perimeter: 2476.472, area: 383151.696768 }
    },
    {
      input: { width: 487.608, height: 555.835 },
      output: { perimeter: 2086.886, area: 271029.59268 }
    },
    {
      input: { width: 34, height: 244.803 },
      output: { perimeter: 557.606, area: 8323.302 }
    },
    {
      input: { width: 825.979, height: 398.266 },
      output: { perimeter: 2448.49, area: 328959.352414 }
    },
    {
      input: { width: 431.16, height: 173.985 },
      output: { perimeter: 1210.29, area: 75015.3726 }
    },
    {
      input: { width: 680.869, height: 707.668 },
      output: { perimeter: 2777.074, area: 481829.203492 }
    },
    {
      input: { width: 424.197, height: 121.173 },
      output: { perimeter: 1090.74, area: 51401.223081 }
    },
    {
      input: { width: 445.206, height: 322.112 },
      output: { perimeter: 1534.636, area: 143406.195072 }
    },
    {
      input: { width: 500.923, height: 587.235 },
      output: { perimeter: 2176.316, area: 294159.517905 }
    },
    {
      input: { width: 513.993, height: 55.186 },
      output: { perimeter: 1138.358, area: 28365.217698 }
    },
    {
      input: { width: 144.731, height: 405.08 },
      output: { perimeter: 1099.622, area: 58627.63348 }
    },
    {
      input: { width: 887.736, height: 137.068 },
      output: { perimeter: 2049.608, area: 121680.198048 }
    },
    {
      input: { width: 577.654, height: 498.12 },
      output: { perimeter: 2151.548, area: 287741.01048 }
    },
    {
      input: { width: 868.279, height: 680.427 },
      output: { perimeter: 3097.412, area: 590800.475133 }
    },
    {
      input: { width: 574.822, height: 142.425 },
      output: { perimeter: 1434.494, area: 81869.02335 }
    },
    {
      input: { width: 452.933, height: 30.062 },
      output: { perimeter: 965.99, area: 13616.071846 }
    },
    {
      input: { width: 294.286, height: 845.822 },
      output: { perimeter: 2280.216, area: 248913.573092 }
    },
    {
      input: { width: 264.346, height: 981.354 },
      output: { perimeter: 2491.4, area: 259417.004484 }
    },
    {
      input: { width: 629.923, height: 555.44 },
      output: { perimeter: 2370.726, area: 349884.43112 }
    },
    {
      input: { width: 647.241, height: 299.606 },
      output: { perimeter: 1893.694, area: 193917.287046 }
    },
    {
      input: { width: 351.925, height: 743.211 },
      output: { perimeter: 2190.272, area: 261554.531175 }
    },
    {
      input: { width: 306.907, height: 274.645 },
      output: { perimeter: 1163.104, area: 84290.473015 }
    },
    {
      input: { width: 947.035, height: 295.229 },
      output: { perimeter: 2484.528, area: 279592.196015 }
    },
    {
      input: { width: 411.622, height: 175.027 },
      output: { perimeter: 1173.298, area: 72044.963794 }
    },
    {
      input: { width: 331.46, height: 510.702 },
      output: { perimeter: 1684.324, area: 169277.28492 }
    },
    {
      input: { width: 707.629, height: 276.153 },
      output: { perimeter: 1967.564, area: 195413.871237 }
    },
    {
      input: { width: 738.288, height: 420.924 },
      output: { perimeter: 2318.424, area: 310763.138112 }
    },
    {
      input: { width: 999.834, height: 37.425 },
      output: { perimeter: 2074.518, area: 37418.78745 }
    },
    {
      input: { width: 853.876, height: 208.969 },
      output: { perimeter: 2125.69, area: 178433.613844 }
    },
    {
      input: { width: 403.514, height: 932.291 },
      output: { perimeter: 2671.61, area: 376192.470574 }
    },
    {
      input: { width: 207.872, height: 517.31 },
      output: { perimeter: 1450.364, area: 107534.26432 }
    },
    {
      input: { width: 864.788, height: 316.581 },
      output: { perimeter: 2362.738, area: 273775.449828 }
    },
    {
      input: { width: 606.561, height: 306.681 },
      output: { perimeter: 1826.484, area: 186020.734041 }
    },
    {
      input: { width: 103.655, height: 868.679 },
      output: { perimeter: 1944.668, area: 90042.921745 }
    },
    {
      input: { width: 512.365, height: 215.069 },
      output: { perimeter: 1454.868, area: 110193.828185 }
    },
    {
      input: { width: 979.528, height: 20.488 },
      output: { perimeter: 2000.032, area: 20068.569664 }
    },
    {
      input: { width: 56.184, height: 386.298 },
      output: { perimeter: 884.964, area: 21703.766832 }
    },
    {
      input: { width: 537.446, height: 720.489 },
      output: { perimeter: 2515.87, area: 387223.931094 }
    },
    {
      input: { width: 136.65, height: 693.144 },
      output: { perimeter: 1659.588, area: 94718.1276 }
    },
    {
      input: { width: 129.886, height: 275.118 },
      output: { perimeter: 810.008, area: 35733.976548 }
    },
    {
      input: { width: 296.587, height: 386.276 },
      output: { perimeter: 1365.726, area: 114564.440012 }
    },
    {
      input: { width: 392.609, height: 646.48 },
      output: { perimeter: 2078.178, area: 253813.86632 }
    },
    {
      input: { width: 922.212, height: 257.434 },
      output: { perimeter: 2359.292, area: 237408.724008 }
    },
    {
      input: { width: 195.113, height: 152.519 },
      output: { perimeter: 695.264, area: 29758.439647 }
    },
    {
      input: { width: 20.517, height: 197.371 },
      output: { perimeter: 435.776, area: 4049.460807 }
    },
    {
      input: { width: 232.837, height: 550.76 },
      output: { perimeter: 1567.194, area: 128237.30612 }
    }
]