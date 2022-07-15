exports.help = (prefix) => {
    console.log('Apskritimai; input: {radius: 5}');
    console.log('radius - apskritimo spindulys (pusė skersmens)')
    console.log('Galimi duomenų set-ai');
    console.log(`  ${prefix}.small: spinduliai rėžyje [1;10]`)
    console.log(`  ${prefix}.mid: spinduliai rėžyje [1;100]`)
    console.log(`  ${prefix}.double: spinduliai rėžyje [20;1000], 3 skaičiai po kablelio`)
  }
  
exports.sets = () => Object.getOwnPropertyNames(exports.set);

exports.set = {};

exports.set.small = [
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 10 },
    output: { perimeter: 62.8318531, area: 314.1592654 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 10 },
    output: { perimeter: 62.8318531, area: 314.1592654 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 4 },
    output: { perimeter: 25.1327412, area: 50.2654825 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 5 },
    output: { perimeter: 31.4159265, area: 78.5398163 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 4 },
    output: { perimeter: 25.1327412, area: 50.2654825 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 4 },
    output: { perimeter: 25.1327412, area: 50.2654825 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 10 },
    output: { perimeter: 62.8318531, area: 314.1592654 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 4 },
    output: { perimeter: 25.1327412, area: 50.2654825 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 1 },
    output: { perimeter: 6.2831853, area: 3.1415927 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 6 },
    output: { perimeter: 37.6991118, area: 113.0973355 }
},
{
    input: { radius: 8 },
    output: { perimeter: 50.2654825, area: 201.0619298 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 2 },
    output: { perimeter: 12.5663706, area: 12.5663706 }
},
{
    input: { radius: 7 },
    output: { perimeter: 43.9822972, area: 153.93804 }
},
{
    input: { radius: 3 },
    output: { perimeter: 18.8495559, area: 28.2743339 }
},
{
    input: { radius: 4 },
    output: { perimeter: 25.1327412, area: 50.2654825 }
},
{
    input: { radius: 9 },
    output: { perimeter: 56.5486678, area: 254.4690049 }
}
]
  
exports.set.mid = [
    {
      input: { radius: 83 },
      output: { perimeter: 521.5043805, area: 21642.4317906 }
    },
    {
      input: { radius: 29 },
      output: { perimeter: 182.2123739, area: 2642.0794217 }
    },
    {
      input: { radius: 77 },
      output: { perimeter: 483.8052687, area: 18626.5028431 }
    },
    {
      input: { radius: 37 },
      output: { perimeter: 232.4778564, area: 4300.8403428 }
    },
    {
      input: { radius: 21 },
      output: { perimeter: 131.9468915, area: 1385.4423602 }
    },
    {
      input: { radius: 10 },
      output: { perimeter: 62.8318531, area: 314.1592654 }
    },
    {
      input: { radius: 17 },
      output: { perimeter: 106.8141502, area: 907.9202769 }
    },
    {
      input: { radius: 96 },
      output: { perimeter: 603.1857895, area: 28952.9178955 }
    },
    {
      input: { radius: 96 },
      output: { perimeter: 603.1857895, area: 28952.9178955 }
    },
    {
      input: { radius: 97 },
      output: { perimeter: 609.4689748, area: 29559.2452776 }
    },
    {
      input: { radius: 33 },
      output: { perimeter: 207.3451151, area: 3421.1943998 }
    },
    {
      input: { radius: 28 },
      output: { perimeter: 175.9291886, area: 2463.0086404 }
    },
    {
      input: { radius: 25 },
      output: { perimeter: 157.0796327, area: 1963.4954085 }
    },
    {
      input: { radius: 62 },
      output: { perimeter: 389.557489, area: 12076.2821604 }
    },
    {
      input: { radius: 89 },
      output: { perimeter: 559.2034923, area: 24884.5554091 }
    },
    {
      input: { radius: 20 },
      output: { perimeter: 125.6637061, area: 1256.6370614 }
    },
    {
      input: { radius: 78 },
      output: { perimeter: 490.088454, area: 19113.4497044 }
    },
    {
      input: { radius: 80 },
      output: { perimeter: 502.6548246, area: 20106.192983 }
    },
    {
      input: { radius: 36 },
      output: { perimeter: 226.1946711, area: 4071.5040791 }
    },
    {
      input: { radius: 84 },
      output: { perimeter: 527.7875658, area: 22167.0777637 }
    },
    {
      input: { radius: 74 },
      output: { perimeter: 464.9557127, area: 17203.3613711 }
    },
    {
      input: { radius: 69 },
      output: { perimeter: 433.5397862, area: 14957.1226237 }
    },
    {
      input: { radius: 26 },
      output: { perimeter: 163.362818, area: 2123.7166338 }
    },
    {
      input: { radius: 54 },
      output: { perimeter: 339.2920066, area: 9160.8841779 }
    },
    {
      input: { radius: 50 },
      output: { perimeter: 314.1592654, area: 7853.981634 }
    },
    {
      input: { radius: 84 },
      output: { perimeter: 527.7875658, area: 22167.0777637 }
    },
    {
      input: { radius: 19 },
      output: { perimeter: 119.3805208, area: 1134.1149479 }
    },
    {
      input: { radius: 14 },
      output: { perimeter: 87.9645943, area: 615.7521601 }
    },
    {
      input: { radius: 69 },
      output: { perimeter: 433.5397862, area: 14957.1226237 }
    },
    {
      input: { radius: 7 },
      output: { perimeter: 43.9822972, area: 153.93804 }
    },
    {
      input: { radius: 38 },
      output: { perimeter: 238.7610417, area: 4536.4597918 }
    },
    {
      input: { radius: 8 },
      output: { perimeter: 50.2654825, area: 201.0619298 }
    },
    {
      input: { radius: 54 },
      output: { perimeter: 339.2920066, area: 9160.8841779 }
    },
    {
      input: { radius: 70 },
      output: { perimeter: 439.8229715, area: 15393.8040026 }
    },
    {
      input: { radius: 54 },
      output: { perimeter: 339.2920066, area: 9160.8841779 }
    },
    {
      input: { radius: 30 },
      output: { perimeter: 188.4955592, area: 2827.4333882 }
    },
    {
      input: { radius: 10 },
      output: { perimeter: 62.8318531, area: 314.1592654 }
    },
    {
      input: { radius: 1 },
      output: { perimeter: 6.2831853, area: 3.1415927 }
    },
    {
      input: { radius: 99 },
      output: { perimeter: 622.0353454, area: 30790.7495978 }
    },
    {
      input: { radius: 60 },
      output: { perimeter: 376.9911184, area: 11309.7335529 }
    },
    {
      input: { radius: 32 },
      output: { perimeter: 201.0619298, area: 3216.9908773 }
    },
    {
      input: { radius: 50 },
      output: { perimeter: 314.1592654, area: 7853.981634 }
    },
    {
      input: { radius: 39 },
      output: { perimeter: 245.044227, area: 4778.3624261 }
    },
    {
      input: { radius: 75 },
      output: { perimeter: 471.238898, area: 17671.4586764 }
    },
    {
      input: { radius: 34 },
      output: { perimeter: 213.6283004, area: 3631.6811075 }
    },
    {
      input: { radius: 41 },
      output: { perimeter: 257.6105976, area: 5281.0172507 }
    },
    {
      input: { radius: 58 },
      output: { perimeter: 364.4247478, area: 10568.3176867 }
    },
    {
      input: { radius: 55 },
      output: { perimeter: 345.5751919, area: 9503.3177771 }
    },
    {
      input: { radius: 21 },
      output: { perimeter: 131.9468915, area: 1385.4423602 }
    },
    {
      input: { radius: 73 },
      output: { perimeter: 458.6725274, area: 16741.547251 }
    },
    {
      input: { radius: 25 },
      output: { perimeter: 157.0796327, area: 1963.4954085 }
    },
    {
      input: { radius: 78 },
      output: { perimeter: 490.088454, area: 19113.4497044 }
    },
    {
      input: { radius: 30 },
      output: { perimeter: 188.4955592, area: 2827.4333882 }
    },
    {
      input: { radius: 12 },
      output: { perimeter: 75.3982237, area: 452.3893421 }
    },
    {
      input: { radius: 81 },
      output: { perimeter: 508.9380099, area: 20611.9894002 }
    },
    {
      input: { radius: 79 },
      output: { perimeter: 496.3716393, area: 19606.6797511 }
    },
    {
      input: { radius: 78 },
      output: { perimeter: 490.088454, area: 19113.4497044 }
    },
    {
      input: { radius: 34 },
      output: { perimeter: 213.6283004, area: 3631.6811075 }
    },
    {
      input: { radius: 2 },
      output: { perimeter: 12.5663706, area: 12.5663706 }
    },
    {
      input: { radius: 15 },
      output: { perimeter: 94.2477796, area: 706.8583471 }
    },
    {
      input: { radius: 23 },
      output: { perimeter: 144.5132621, area: 1661.9025137 }
    },
    {
      input: { radius: 59 },
      output: { perimeter: 370.7079331, area: 10935.8840271 }
    },
    {
      input: { radius: 42 },
      output: { perimeter: 263.8937829, area: 5541.7694409 }
    },
    {
      input: { radius: 24 },
      output: { perimeter: 150.7964474, area: 1809.5573685 }
    },
    {
      input: { radius: 35 },
      output: { perimeter: 219.9114858, area: 3848.4510006 }
    },
    {
      input: { radius: 68 },
      output: { perimeter: 427.2566009, area: 14526.7244302 }
    },
    {
      input: { radius: 34 },
      output: { perimeter: 213.6283004, area: 3631.6811075 }
    },
    {
      input: { radius: 29 },
      output: { perimeter: 182.2123739, area: 2642.0794217 }
    },
    {
      input: { radius: 74 },
      output: { perimeter: 464.9557127, area: 17203.3613711 }
    },
    {
      input: { radius: 32 },
      output: { perimeter: 201.0619298, area: 3216.9908773 }
    },
    {
      input: { radius: 9 },
      output: { perimeter: 56.5486678, area: 254.4690049 }
    },
    {
      input: { radius: 99 },
      output: { perimeter: 622.0353454, area: 30790.7495978 }
    },
    {
      input: { radius: 81 },
      output: { perimeter: 508.9380099, area: 20611.9894002 }
    },
    {
      input: { radius: 65 },
      output: { perimeter: 408.407045, area: 13273.2289614 }
    },
    {
      input: { radius: 3 },
      output: { perimeter: 18.8495559, area: 28.2743339 }
    },
    {
      input: { radius: 2 },
      output: { perimeter: 12.5663706, area: 12.5663706 }
    },
    {
      input: { radius: 80 },
      output: { perimeter: 502.6548246, area: 20106.192983 }
    },
    {
      input: { radius: 62 },
      output: { perimeter: 389.557489, area: 12076.2821604 }
    },
    {
      input: { radius: 63 },
      output: { perimeter: 395.8406744, area: 12468.9812421 }
    },
    {
      input: { radius: 98 },
      output: { perimeter: 615.7521601, area: 30171.8558451 }
    },
    {
      input: { radius: 99 },
      output: { perimeter: 622.0353454, area: 30790.7495978 }
    },
    {
      input: { radius: 57 },
      output: { perimeter: 358.1415625, area: 10207.0345315 }
    },
    {
      input: { radius: 51 },
      output: { perimeter: 320.4424507, area: 8171.282492 }
    },
    {
      input: { radius: 73 },
      output: { perimeter: 458.6725274, area: 16741.547251 }
    },
    {
      input: { radius: 20 },
      output: { perimeter: 125.6637061, area: 1256.6370614 }
    },
    {
      input: { radius: 54 },
      output: { perimeter: 339.2920066, area: 9160.8841779 }
    },
    {
      input: { radius: 90 },
      output: { perimeter: 565.4866776, area: 25446.9004941 }
    },
    {
      input: { radius: 1 },
      output: { perimeter: 6.2831853, area: 3.1415927 }
    },
    {
      input: { radius: 35 },
      output: { perimeter: 219.9114858, area: 3848.4510006 }
    },
    {
      input: { radius: 6 },
      output: { perimeter: 37.6991118, area: 113.0973355 }
    },
    {
      input: { radius: 38 },
      output: { perimeter: 238.7610417, area: 4536.4597918 }
    },
    {
      input: { radius: 71 },
      output: { perimeter: 446.1061568, area: 15836.7685667 }
    },
    {
      input: { radius: 89 },
      output: { perimeter: 559.2034923, area: 24884.5554091 }
    },
    {
      input: { radius: 2 },
      output: { perimeter: 12.5663706, area: 12.5663706 }
    },
    {
      input: { radius: 92 },
      output: { perimeter: 578.0530483, area: 26590.44022 }
    },
    {
      input: { radius: 43 },
      output: { perimeter: 270.1769682, area: 5808.8048165 }
    },
    {
      input: { radius: 29 },
      output: { perimeter: 182.2123739, area: 2642.0794217 }
    },
    {
      input: { radius: 89 },
      output: { perimeter: 559.2034923, area: 24884.5554091 }
    },
    {
      input: { radius: 51 },
      output: { perimeter: 320.4424507, area: 8171.282492 }
    },
    {
      input: { radius: 94 },
      output: { perimeter: 590.6194189, area: 27759.1126871 }
    }
  ]
  

exports.set.double = [
    {
      input: { radius: 26.279 },
      output: { perimeter: 165.1158267, area: 2169.5394048 }
    },
    {
      input: { radius: 964.657 },
      output: { perimeter: 6061.1186889, area: 2923450.2855236 }
    },
    {
      input: { radius: 319.024 },
      output: { perimeter: 2004.4869094, area: 319739.7158982 }
    },
    {
      input: { radius: 56.438 },
      output: { perimeter: 354.6104124, area: 10006.7512266 }
    },
    {
      input: { radius: 631.136 },
      output: { perimeter: 3965.544442, area: 1251398.9284832 }
    },
    {
      input: { radius: 327.171 },
      output: { perimeter: 2055.6760201, area: 336278.7895918 }
    },
    {
      input: { radius: 743.359 },
      output: { perimeter: 4670.6623468, area: 1735989.4457125 }
    },
    {
      input: { radius: 610.16 },
      output: { perimeter: 3833.748347, area: 1169599.9457115 }
    },
    {
      input: { radius: 285.802 },
      output: { perimeter: 1795.7469272, area: 256614.0316385 }
    },
    {
      input: { radius: 950.714 },
      output: { perimeter: 5973.5122361, area: 2839550.85603 }
    },
    {
      input: { radius: 796.591 },
      output: { perimeter: 5005.128867, area: 1993520.3046587 }
    },
    {
      input: { radius: 144.672 },
      output: { perimeter: 909.0009848, area: 65753.4952336 }
    },
    {
      input: { radius: 353.165 },
      output: { perimeter: 2219.001139, area: 391836.7686292 }
    },
    {
      input: { radius: 584.28 },
      output: { perimeter: 3671.1395113, area: 1072486.696825 }
    },
    {
      input: { radius: 339.429 },
      output: { perimeter: 2132.6953056, area: 361949.3174475 }
    },
    {
      input: { radius: 881.189 },
      output: { perimeter: 5536.6737776, area: 2439428.0147261 }
    },
    {
      input: { radius: 531.879 },
      output: { perimeter: 3341.894318, area: 888741.7039811 }
    },
    {
      input: { radius: 223.102 },
      output: { perimeter: 1401.7912084, area: 156371.2110885 }
    },
    {
      input: { radius: 691.221 },
      output: { perimeter: 4343.0696312, area: 1501010.4667787 }
    },
    {
      input: { radius: 615.449 },
      output: { perimeter: 3866.9801141, area: 1189964.522127 }
    },
    {
      input: { radius: 331.004 },
      output: { perimeter: 2079.7594694, area: 344204.3517076 }
    },
    {
      input: { radius: 962.747 },
      output: { perimeter: 6049.1178049, area: 2911885.0096721 }
    },
    {
      input: { radius: 850.102 },
      output: { perimeter: 5341.348396, area: 2270345.4770699 }
    },
    {
      input: { radius: 406.026 },
      output: { perimeter: 2551.1365975, area: 517913.8940749 }
    },
    {
      input: { radius: 600.091 },
      output: { perimeter: 3770.4829542, area: 1131316.4432256 }
    },
    {
      input: { radius: 492.868 },
      output: { perimeter: 3096.780976, area: 763152.1230344 }
    },
    {
      input: { radius: 929.946 },
      output: { perimeter: 5843.0230437, area: 2716847.9536846 }
    },
    {
      input: { radius: 552.118 },
      output: { perimeter: 3469.0597054, area: 957665.1532211 }
    },
    {
      input: { radius: 685.552 },
      output: { perimeter: 4307.4502537, area: 1476490.5681649 }
    },
    {
      input: { radius: 914.864 },
      output: { perimeter: 5748.2600429, area: 2629438.087929 }
    },
    {
      input: { radius: 219.346 },
      output: { perimeter: 1378.1915644, area: 151150.4034412 }
    },
    {
      input: { radius: 314.902 },
      output: { perimeter: 1978.5876196, area: 311530.5992939 }
    },
    {
      input: { radius: 719.263 },
      output: { perimeter: 4519.2627136, area: 1625269.2285853 }
    },
    {
      input: { radius: 40.962 },
      output: { perimeter: 257.3718366, area: 5271.2325844 }
    },
    {
      input: { radius: 496.259 },
      output: { perimeter: 3118.0872574, area: 773689.432124 }
    },
    {
      input: { radius: 123.768 },
      output: { perimeter: 777.6572791, area: 48124.5430598 }
    },
    {
      input: { radius: 119.074 },
      output: { perimeter: 748.1640073, area: 44543.4405007 }
    },
    {
      input: { radius: 457.186 },
      output: { perimeter: 2872.5843578, area: 656652.6761136 }
    },
    {
      input: { radius: 863.359 },
      output: { perimeter: 5424.6445836, area: 2341707.8615353 }
    },
    {
      input: { radius: 129.356 },
      output: { perimeter: 812.7677186, area: 52568.1905033 }
    },
    {
      input: { radius: 760.491 },
      output: { perimeter: 4778.3058774, area: 1816929.307521 }
    },
    {
      input: { radius: 811.043 },
      output: { perimeter: 5095.9334611, area: 2066510.5810418 }
    },
    {
      input: { radius: 279.937 },
      output: { perimeter: 1758.8960453, area: 246190.0411216 }
    },
    {
      input: { radius: 410.312 },
      output: { perimeter: 2578.0663298, area: 528905.7759481 }
    },
    {
      input: { radius: 952.233 },
      output: { perimeter: 5983.0563946, area: 2848631.8699051 }
    },
    {
      input: { radius: 601.71 },
      output: { perimeter: 3780.6554312, area: 1137429.0897486 }
    },
    {
      input: { radius: 834.398 },
      output: { perimeter: 5242.6772539, area: 2187239.7076665 }
    },
    {
      input: { radius: 494.548 },
      output: { perimeter: 3107.3367273, area: 768363.5819052 }
    },
    {
      input: { radius: 767.845 },
      output: { perimeter: 4824.5124222, area: 1852238.8704087 }
    },
    {
      input: { radius: 406.004 },
      output: { perimeter: 2550.9983675, area: 517857.7705903 }
    },
    {
      input: { radius: 871.855 },
      output: { perimeter: 5478.026526, area: 2388022.408409 }
    },
    {
      input: { radius: 944.295 },
      output: { perimeter: 5933.1804696, area: 2801336.3257908 }
    },
    {
      input: { radius: 590.479 },
      output: { perimeter: 3710.088977, area: 1095364.8145244 }
    },
    {
      input: { radius: 799.783 },
      output: { perimeter: 5025.1847945, area: 2009528.6852626 }
    },
    {
      input: { radius: 82.8 },
      output: { perimeter: 520.2477434, area: 21538.2565782 }
    },
    {
      input: { radius: 314.127 },
      output: { perimeter: 1973.718151, area: 309999.0808078 }
    },
    {
      input: { radius: 767.643 },
      output: { perimeter: 4823.2432188, area: 1851264.447089 }
    },
    {
      input: { radius: 922.376 },
      output: { perimeter: 5795.4593309, area: 2672796.2978968 }
    },
    {
      input: { radius: 395.357 },
      output: { perimeter: 2484.1012935, area: 491053.4175453 }
    },
    {
      input: { radius: 296.683 },
      output: { perimeter: 1864.1142665, area: 276525.5064625 }
    },
    {
      input: { radius: 411.371 },
      output: { perimeter: 2584.720223, area: 531639.4714278 }
    },
    {
      input: { radius: 952.826 },
      output: { perimeter: 5986.7823235, area: 2852180.927085 }
    },
    {
      input: { radius: 980.295 },
      output: { perimeter: 6159.3751407, area: 3019002.326777 }
    },
    {
      input: { radius: 467.841 },
      output: { perimeter: 2939.5316973, area: 687616.7243974 }
    },
    {
      input: { radius: 468.678 },
      output: { perimeter: 2944.7907234, area: 690079.3133304 }
    },
    {
      input: { radius: 162.181 },
      output: { perimeter: 1019.0132763, area: 82632.2960821 }
    },
    {
      input: { radius: 974.601 },
      output: { perimeter: 6123.5986836, area: 2984032.7002994 }
    },
    {
      input: { radius: 701.653 },
      output: { perimeter: 4408.6158203, area: 1546659.258094 }
    },
    {
      input: { radius: 754.435 },
      output: { perimeter: 4740.2549072, area: 1788107.105465 }
    },
    {
      input: { radius: 54.533 },
      output: { perimeter: 342.6409444, area: 9342.6193093 }
    },
    {
      input: { radius: 329.861 },
      output: { perimeter: 2072.5777886, area: 341831.2909646 }
    },
    {
      input: { radius: 465.98 },
      output: { perimeter: 2927.8386894, area: 682157.1362525 }
    },
    {
      input: { radius: 294.522 },
      output: { perimeter: 1850.536303, area: 272511.8265221 }
    },
    {
      input: { radius: 270.387 },
      output: { perimeter: 1698.8916257, area: 229679.1049926 }
    },
    {
      input: { radius: 51.11 },
      output: { perimeter: 321.133601, area: 8206.5691748 }
    },
    {
      input: { radius: 233.143 },
      output: { perimeter: 1464.8806721, area: 170763.3372644 }
    },
    {
      input: { radius: 820.754 },
      output: { perimeter: 5156.9494736, area: 2116293.4541312 }
    },
    {
      input: { radius: 569.031 },
      output: { perimeter: 3575.3272185, area: 1017236.0112436 }
    },
    {
      input: { radius: 691.091 },
      output: { perimeter: 4342.2528171, area: 1500445.9208195 }
    },
    {
      input: { radius: 345.607 },
      output: { perimeter: 2171.5128245, area: 375245.0163613 }
    },
    {
      input: { radius: 197.639 },
      output: { perimeter: 1241.8024609, area: 122714.2982874 }
    },
    {
      input: { radius: 41.83 },
      output: { perimeter: 262.8256414, area: 5496.9982899 }
    },
    {
      input: { radius: 305.366 },
      output: { perimeter: 1918.6711645, area: 292948.4694112 }
    },
    {
      input: { radius: 360.706 },
      output: { perimeter: 2266.3826394, area: 408748.9081658 }
    },
    {
      input: { radius: 487.076 },
      output: { perimeter: 3060.3887667, area: 745320.9594597 }
    },
    {
      input: { radius: 908.293 },
      output: { perimeter: 5706.9732322, area: 2591801.9190037 }
    },
    {
      input: { radius: 746.204 },
      output: { perimeter: 4688.538009, area: 1749302.9082185 }
    },
    {
      input: { radius: 909.311 },
      output: { perimeter: 5713.3695149, area: 2597614.873462 }
    },
    {
      input: { radius: 609.552 },
      output: { perimeter: 3829.9281704, area: 1167270.1880502 }
    },
    {
      input: { radius: 846.087 },
      output: { perimeter: 5316.121407, area: 2248950.6064404 }
    },
    {
      input: { radius: 939.221 },
      output: { perimeter: 5901.2995874, area: 2771312.2498861 }
    },
    {
      input: { radius: 823.915 },
      output: { perimeter: 5176.8106224, area: 2132625.9619629 }
    },
    {
      input: { radius: 203.944 },
      output: { perimeter: 1281.4179443, area: 130668.7506149 }
    },
    {
      input: { radius: 923.99 },
      output: { perimeter: 5805.600392, area: 2682158.3530932 }
    },
    {
      input: { radius: 920.856 },
      output: { perimeter: 5785.9088892, area: 2663994.4580495 }
    },
    {
      input: { radius: 740.4 },
      output: { perimeter: 4652.0704014, area: 1722196.4626115 }
    },
    {
      input: { radius: 626.444 },
      output: { perimeter: 3936.0637366, area: 1232861.7556962 }
    },
    {
      input: { radius: 325.652 },
      output: { perimeter: 2046.1318617, area: 333163.4665056 }
    },
    {
      input: { radius: 235.035 },
      output: { perimeter: 1476.7684587, area: 173546.1373421 }
    },
    {
      input: { radius: 133.186 },
      output: { perimeter: 836.8323183, area: 55727.174574 }
    }
  ]
  