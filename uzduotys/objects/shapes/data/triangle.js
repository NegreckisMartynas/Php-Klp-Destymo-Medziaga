exports.help = (prefix) => {
    console.log('Trikampiai; input: {a: 3, b: 4, c: 5}');
    console.log('a, b, c - trikampio kraštinės')
    console.log('Galimi duomenų set-ai');
    console.log(`  ${prefix}.small: kraštinės rėžyje [1;10]`)
    console.log(`  ${prefix}.mid: kraštinės rėžyje [10;50]`)
    console.log(`  ${prefix}.double: kraštinės rėžyje [100;500], 3 skaičiai po kablelio`)
  }
  
  
exports.sets = () => Object.getOwnPropertyNames(exports.set);

exports.set = {};

exports.set.small = [
{ input: { a: 5, b: 4, c: 3 }, output: { perimeter: 12, area: 6 } },
{
    input: { a: 7, b: 4, c: 6 },
    output: { perimeter: 17, area: 11.9765396 }
},
{
    input: { a: 7, b: 10, c: 8 },
    output: { perimeter: 25, area: 27.8107443 }
},
{
    input: { a: 7, b: 10, c: 4 },
    output: { perimeter: 21, area: 10.9287465 }
},
{
    input: { a: 6, b: 3, c: 4 },
    output: { perimeter: 13, area: 5.3326823 }
},
{
    input: { a: 10, b: 1, c: 10 },
    output: { perimeter: 21, area: 4.9937461 }
},
{
    input: { a: 4, b: 4, c: 7 },
    output: { perimeter: 15, area: 6.7777209 }
},
{
    input: { a: 3, b: 5, c: 6 },
    output: { perimeter: 14, area: 7.4833148 }
},
{
    input: { a: 9, b: 7, c: 6 },
    output: { perimeter: 22, area: 20.976177 }
},
{
    input: { a: 2, b: 3, c: 4 },
    output: { perimeter: 9, area: 2.9047375 }
},
{
    input: { a: 6, b: 6, c: 6 },
    output: { perimeter: 18, area: 15.5884573 }
},
{
    input: { a: 5, b: 2, c: 6 },
    output: { perimeter: 13, area: 4.6837485 }
},
{
    input: { a: 3, b: 7, c: 8 },
    output: { perimeter: 18, area: 10.3923048 }
},
{
    input: { a: 5, b: 6, c: 8 },
    output: { perimeter: 19, area: 14.9812383 }
},
{
    input: { a: 9, b: 9, c: 2 },
    output: { perimeter: 20, area: 8.9442719 }
},
{
    input: { a: 6, b: 9, c: 6 },
    output: { perimeter: 21, area: 17.8588213 }
},
{
    input: { a: 7, b: 9, c: 5 },
    output: { perimeter: 21, area: 17.4122801 }
},
{
    input: { a: 7, b: 4, c: 6 },
    output: { perimeter: 17, area: 11.9765396 }
},
{
    input: { a: 6, b: 8, c: 5 },
    output: { perimeter: 19, area: 14.9812383 }
},
{
    input: { a: 8, b: 5, c: 7 },
    output: { perimeter: 20, area: 17.3205081 }
},
{
    input: { a: 10, b: 10, c: 1 },
    output: { perimeter: 21, area: 4.9937461 }
},
{
    input: { a: 10, b: 8, c: 10 },
    output: { perimeter: 28, area: 36.6606056 }
},
{
    input: { a: 7, b: 9, c: 6 },
    output: { perimeter: 22, area: 20.976177 }
},
{
    input: { a: 5, b: 7, c: 6 },
    output: { perimeter: 18, area: 14.6969385 }
},
{
    input: { a: 8, b: 5, c: 8 },
    output: { perimeter: 21, area: 18.9983552 }
},
{
    input: { a: 5, b: 8, c: 4 },
    output: { perimeter: 17, area: 8.1815341 }
},
{ input: { a: 5, b: 6, c: 5 }, output: { perimeter: 16, area: 12 } },
{
    input: { a: 10, b: 6, c: 6 },
    output: { perimeter: 22, area: 16.583124 }
},
{
    input: { a: 4, b: 7, c: 9 },
    output: { perimeter: 20, area: 13.4164079 }
},
{
    input: { a: 3, b: 6, c: 4 },
    output: { perimeter: 13, area: 5.3326823 }
},
{
    input: { a: 10, b: 9, c: 6 },
    output: { perimeter: 25, area: 26.6634113 }
},
{
    input: { a: 7, b: 3, c: 6 },
    output: { perimeter: 16, area: 8.9442719 }
},
{
    input: { a: 6, b: 9, c: 6 },
    output: { perimeter: 21, area: 17.8588213 }
},
{
    input: { a: 3, b: 7, c: 8 },
    output: { perimeter: 18, area: 10.3923048 }
},
{
    input: { a: 5, b: 7, c: 9 },
    output: { perimeter: 21, area: 17.4122801 }
},
{
    input: { a: 2, b: 4, c: 4 },
    output: { perimeter: 10, area: 3.8729833 }
},
{
    input: { a: 5, b: 8, c: 4 },
    output: { perimeter: 17, area: 8.1815341 }
},
{
    input: { a: 8, b: 4, c: 10 },
    output: { perimeter: 22, area: 15.1986842 }
},
{
    input: { a: 6, b: 5, c: 6 },
    output: { perimeter: 17, area: 13.6358901 }
},
{
    input: { a: 3, b: 10, c: 8 },
    output: { perimeter: 21, area: 9.9215674 }
},
{
    input: { a: 6, b: 3, c: 7 },
    output: { perimeter: 16, area: 8.9442719 }
},
{
    input: { a: 6, b: 8, c: 3 },
    output: { perimeter: 17, area: 7.6444424 }
},
{
    input: { a: 2, b: 8, c: 8 },
    output: { perimeter: 18, area: 7.9372539 }
},
{
    input: { a: 6, b: 5, c: 10 },
    output: { perimeter: 21, area: 11.3990131 }
},
{
    input: { a: 8, b: 5, c: 4 },
    output: { perimeter: 17, area: 8.1815341 }
},
{
    input: { a: 7, b: 4, c: 7 },
    output: { perimeter: 18, area: 13.4164079 }
},
{
    input: { a: 6, b: 3, c: 4 },
    output: { perimeter: 13, area: 5.3326823 }
},
{
    input: { a: 6, b: 6, c: 6 },
    output: { perimeter: 18, area: 15.5884573 }
},
{ input: { a: 10, b: 6, c: 8 }, output: { perimeter: 24, area: 24 } },
{
    input: { a: 7, b: 8, c: 7 },
    output: { perimeter: 22, area: 22.9782506 }
},
{
    input: { a: 7, b: 2, c: 7 },
    output: { perimeter: 16, area: 6.9282032 }
},
{
    input: { a: 7, b: 7, c: 1 },
    output: { perimeter: 15, area: 3.49106 }
},
{
    input: { a: 8, b: 4, c: 5 },
    output: { perimeter: 17, area: 8.1815341 }
},
{
    input: { a: 7, b: 2, c: 6 },
    output: { perimeter: 15, area: 5.5621489 }
},
{
    input: { a: 6, b: 3, c: 6 },
    output: { perimeter: 15, area: 8.7142125 }
},
{
    input: { a: 10, b: 9, c: 4 },
    output: { perimeter: 23, area: 17.9843682 }
},
{
    input: { a: 5, b: 7, c: 5 },
    output: { perimeter: 17, area: 12.4974997 }
},
{
    input: { a: 10, b: 5, c: 7 },
    output: { perimeter: 22, area: 16.2480768 }
},
{
    input: { a: 3, b: 2, c: 4 },
    output: { perimeter: 9, area: 2.9047375 }
},
{
    input: { a: 10, b: 10, c: 6 },
    output: { perimeter: 26, area: 28.618176 }
},
{
    input: { a: 8, b: 3, c: 6 },
    output: { perimeter: 17, area: 7.6444424 }
}
]

exports.set.mid = [
    {
      input: { a: 25, b: 24, c: 35 },
      output: { perimeter: 84, area: 299.939994 }
    },
    {
      input: { a: 42, b: 39, c: 24 },
      output: { perimeter: 105, area: 460.5360328 }
    },
    {
      input: { a: 13, b: 47, c: 38 },
      output: { perimeter: 98, area: 196.9974619 }
    },
    {
      input: { a: 34, b: 44, c: 22 },
      output: { perimeter: 100, area: 366.6060556 }
    },
    {
      input: { a: 26, b: 35, c: 33 },
      output: { perimeter: 94, area: 407.205108 }
    },
    {
      input: { a: 20, b: 32, c: 45 },
      output: { perimeter: 97, area: 282.5330733 }
    },
    {
      input: { a: 33, b: 29, c: 42 },
      output: { perimeter: 104, area: 476.6969687 }
    },
    {
      input: { a: 21, b: 25, c: 15 },
      output: { perimeter: 61, area: 157.1661144 }
    },
    {
      input: { a: 27, b: 11, c: 18 },
      output: { perimeter: 56, area: 68.9927532 }
    },
    {
      input: { a: 30, b: 35, c: 25 },
      output: { perimeter: 90, area: 367.4234614 }
    },
    {
      input: { a: 17, b: 43, c: 39 },
      output: { perimeter: 99, area: 331.3565866 }
    },
    {
      input: { a: 12, b: 46, c: 45 },
      output: { perimeter: 103, area: 269.6746883 }
    },
    {
      input: { a: 25, b: 27, c: 38 },
      output: { perimeter: 90, area: 336.7491648 }
    },
    {
      input: { a: 46, b: 31, c: 31 },
      output: { perimeter: 108, area: 478.0460229 }
    },
    {
      input: { a: 29, b: 16, c: 24 },
      output: { perimeter: 69, area: 191.986816 }
    },
    {
      input: { a: 46, b: 38, c: 13 },
      output: { perimeter: 97, area: 212.5933618 }
    },
    {
      input: { a: 28, b: 24, c: 12 },
      output: { perimeter: 64, area: 143.1083506 }
    },
    {
      input: { a: 17, b: 34, c: 41 },
      output: { perimeter: 92, area: 282.9134143 }
    },
    {
      input: { a: 34, b: 28, c: 14 },
      output: { perimeter: 76, area: 190.9973822 }
    },
    {
      input: { a: 16, b: 14, c: 11 },
      output: { perimeter: 41, area: 75.4747474 }
    },
    {
      input: { a: 19, b: 12, c: 14 },
      output: { perimeter: 45, area: 83.835777 }
    },
    {
      input: { a: 20, b: 39, c: 46 },
      output: { perimeter: 105, area: 386.9411292 }
    },
    {
      input: { a: 33, b: 28, c: 40 },
      output: { perimeter: 101, area: 456.9309986 }
    },
    {
      input: { a: 36, b: 30, c: 36 },
      output: { perimeter: 102, area: 490.8920452 }
    },
    {
      input: { a: 37, b: 46, c: 44 },
      output: { perimeter: 127, area: 757.7852186 }
    },
    {
      input: { a: 35, b: 17, c: 37 },
      output: { perimeter: 89, area: 295.2832327 }
    },
    {
      input: { a: 39, b: 38, c: 37 },
      output: { perimeter: 114, area: 624.4037156 }
    },
    {
      input: { a: 12, b: 33, c: 32 },
      output: { perimeter: 77, area: 190.9815109 }
    },
    {
      input: { a: 33, b: 43, c: 37 },
      output: { perimeter: 113, area: 591.2107809 }
    },
    {
      input: { a: 30, b: 24, c: 11 },
      output: { perimeter: 65, area: 121.8541649 }
    },
    {
      input: { a: 18, b: 34, c: 38 },
      output: { perimeter: 90, area: 305.8676184 }
    },
    {
      input: { a: 15, b: 44, c: 42 },
      output: { perimeter: 101, area: 314.721206 }
    },
    {
      input: { a: 30, b: 26, c: 35 },
      output: { perimeter: 91, area: 379.9999178 }
    },
    {
      input: { a: 14, b: 17, c: 25 },
      output: { perimeter: 56, area: 113.7365377 }
    },
    {
      input: { a: 28, b: 28, c: 11 },
      output: { perimeter: 67, area: 150.999793 }
    },
    {
      input: { a: 24, b: 32, c: 22 },
      output: { perimeter: 78, area: 263.8465463 }
    },
    {
      input: { a: 13, b: 26, c: 20 },
      output: { perimeter: 59, area: 127.2180707 }
    },
    {
      input: { a: 12, b: 39, c: 44 },
      output: { perimeter: 95, area: 223.9775379 }
    },
    {
      input: { a: 20, b: 30, c: 18 },
      output: { perimeter: 68, area: 174.5393938 }
    },
    {
      input: { a: 46, b: 20, c: 48 },
      output: { perimeter: 114, area: 456.9365383 }
    },
    {
      input: { a: 10, b: 11, c: 14 },
      output: { perimeter: 35, area: 54.6437325 }
    },
    {
      input: { a: 31, b: 43, c: 43 },
      output: { perimeter: 117, area: 621.693001 }
    },
    {
      input: { a: 42, b: 46, c: 42 },
      output: { perimeter: 130, area: 808.279036 }
    },
    {
      input: { a: 48, b: 13, c: 44 },
      output: { perimeter: 105, area: 281.63973 }
    },
    {
      input: { a: 33, b: 47, c: 43 },
      output: { perimeter: 123, area: 685.6932168 }
    },
    {
      input: { a: 27, b: 13, c: 23 },
      output: { perimeter: 63, area: 149.2989869 }
    },
    {
      input: { a: 41, b: 43, c: 13 },
      output: { perimeter: 97, area: 266.4998827 }
    },
    {
      input: { a: 35, b: 33, c: 41 },
      output: { perimeter: 109, area: 555.3946232 }
    },
    {
      input: { a: 20, b: 34, c: 21 },
      output: { perimeter: 75, area: 194.6752103 }
    },
    {
      input: { a: 10, b: 20, c: 27 },
      output: { perimeter: 57, area: 81.990472 }
    },
    {
      input: { a: 28, b: 38, c: 44 },
      output: { perimeter: 110, area: 526.9677409 }
    },
    {
      input: { a: 38, b: 29, c: 27 },
      output: { perimeter: 94, area: 390.230701 }
    },
    {
      input: { a: 26, b: 36, c: 50 },
      output: { perimeter: 112, area: 448.9988864 }
    },
    {
      input: { a: 14, b: 40, c: 27 },
      output: { perimeter: 81, area: 85.1142614 }
    },
    {
      input: { a: 21, b: 32, c: 25 },
      output: { perimeter: 78, area: 262.2899159 }
    },
    {
      input: { a: 28, b: 32, c: 45 },
      output: { perimeter: 105, area: 444.7032016 }
    },
    {
      input: { a: 42, b: 38, c: 17 },
      output: { perimeter: 97, area: 322.9070106 }
    },
    {
      input: { a: 49, b: 18, c: 45 },
      output: { perimeter: 112, area: 404.7913043 }
    },
    {
      input: { a: 26, b: 29, c: 30 },
      output: { perimeter: 85, area: 343.9999092 }
    },
    {
      input: { a: 41, b: 20, c: 27 },
      output: { perimeter: 88, area: 232.0689553 }
    },
    {
      input: { a: 41, b: 40, c: 32 },
      output: { perimeter: 113, area: 594.9974265 }
    },
    {
      input: { a: 46, b: 15, c: 40 },
      output: { perimeter: 101, area: 291.0454217 }
    },
    {
      input: { a: 22, b: 21, c: 31 },
      output: { perimeter: 74, area: 230.8246087 }
    },
    {
      input: { a: 32, b: 30, c: 18 },
      output: { perimeter: 80, area: 265.3299832 }
    },
    {
      input: { a: 49, b: 42, c: 12 },
      output: { perimeter: 103, area: 219.803179 }
    },
    {
      input: { a: 30, b: 41, c: 34 },
      output: { perimeter: 105, area: 501.3092234 }
    },
    {
      input: { a: 46, b: 43, c: 38 },
      output: { perimeter: 127, area: 762.1718556 }
    },
    {
      input: { a: 43, b: 42, c: 46 },
      output: { perimeter: 131, area: 821.7943401 }
    },
    {
      input: { a: 16, b: 11, c: 15 },
      output: { perimeter: 42, area: 79.3725393 }
    },
    {
      input: { a: 39, b: 37, c: 32 },
      output: { perimeter: 108, area: 550.3998547 }
    },
    {
      input: { a: 39, b: 38, c: 38 },
      output: { perimeter: 115, area: 635.99602 }
    },
    {
      input: { a: 22, b: 49, c: 39 },
      output: { perimeter: 110, area: 417.4206511 }
    },
    {
      input: { a: 27, b: 26, c: 42 },
      output: { perimeter: 95, area: 339.331604 }
    },
    {
      input: { a: 26, b: 30, c: 50 },
      output: { perimeter: 106, area: 314.2276245 }
    },
    {
      input: { a: 46, b: 15, c: 43 },
      output: { perimeter: 104, area: 322.3290244 }
    }
]
  
exports.set.double = [
    {
      input: { a: 494.417, b: 319.499, c: 281.961 },
      output: { perimeter: 1095.877, area: 42212.2106573 }
    },
    {
      input: { a: 189.123, b: 402.356, c: 336.941 },
      output: { perimeter: 928.42, area: 31705.7105337 }
    },
    {
      input: { a: 170.122, b: 394.267, c: 434.638 },
      output: { perimeter: 999.027, area: 33517.6837628 }
    },
    {
      input: { a: 462.069, b: 469.686, c: 380.06 },
      output: { perimeter: 1311.815, area: 80814.7725688 }
    },
    {
      input: { a: 365.247, b: 435.813, c: 470.327 },
      output: { perimeter: 1271.387, area: 75383.0229075 }
    },
    {
      input: { a: 493.381, b: 380.353, c: 381.608 },
      output: { perimeter: 1255.342, area: 71620.7540195 }
    },
    {
      input: { a: 315.379, b: 297.724, c: 461.65 },
      output: { perimeter: 1074.753, area: 46529.4909575 }
    },
    {
      input: { a: 257.806, b: 294.759, c: 198.371 },
      output: { perimeter: 750.936, area: 25128.766053 }
    },
    {
      input: { a: 141.399, b: 277.136, c: 286.678 },
      output: { perimeter: 705.213, area: 19249.7474446 }
    },
    {
      input: { a: 358.579, b: 277.516, c: 497.745 },
      output: { perimeter: 1133.84, area: 48626.7349788 }
    },
    {
      input: { a: 448.665, b: 242.582, c: 422.797 },
      output: { perimeter: 1114.044, area: 50471.9704973 }
    },
    {
      input: { a: 420.035, b: 460.595, c: 213.122 },
      output: { perimeter: 1093.752, area: 44693.5740402 }
    },
    {
      input: { a: 304.985, b: 123.104, c: 374.285 },
      output: { perimeter: 802.374, area: 16992.0188249 }
    },
    {
      input: { a: 391.108, b: 412.826, c: 402.332 },
      output: { perimeter: 1206.266, area: 69905.3474704 }
    },
    {
      input: { a: 266.196, b: 470.61, c: 352.352 },
      output: { perimeter: 1089.158, area: 46428.4161207 }
    },
    {
      input: { a: 374.896, b: 373.303, c: 344.497 },
      output: { perimeter: 1092.696, area: 57200.6464325 }
    },
    {
      input: { a: 378.691, b: 169.8, c: 332.231 },
      output: { perimeter: 880.722, area: 28186.8859381 }
    },
    {
      input: { a: 309.882, b: 393.603, c: 203.477 },
      output: { perimeter: 906.962, area: 31222.1191852 }
    },
    {
      input: { a: 462.923, b: 401.247, c: 402.018 },
      output: { perimeter: 1266.188, area: 75972.2581382 }
    },
    {
      input: { a: 290.554, b: 198.729, c: 246.529 },
      output: { perimeter: 735.812, area: 24173.6966612 }
    },
    {
      input: { a: 459.326, b: 362.258, c: 213.961 },
      output: { perimeter: 1035.545, area: 37812.5784817 }
    },
    {
      input: { a: 470.856, b: 435.7, c: 418.136 },
      output: { perimeter: 1324.692, area: 83785.9618585 }
    },
    {
      input: { a: 356.336, b: 460.029, c: 458.783 },
      output: { perimeter: 1275.148, area: 75444.8065814 }
    },
    {
      input: { a: 266.921, b: 304.077, c: 474.632 },
      output: { perimeter: 1045.63, area: 37550.2738003 }
    },
    {
      input: { a: 312.384, b: 485.981, c: 196.542 },
      output: { perimeter: 994.907, area: 17827.5678174 }
    },
    {
      input: { a: 407.964, b: 441.666, c: 106.776 },
      output: { perimeter: 956.406, area: 21350.0298205 }
    },
    {
      input: { a: 412.855, b: 455.091, c: 253.775 },
      output: { perimeter: 1121.721, area: 51924.9677488 }
    },
    {
      input: { a: 308.039, b: 201.747, c: 280.893 },
      output: { perimeter: 790.679, area: 27652.7923076 }
    },
    {
      input: { a: 389.5, b: 434.401, c: 264.314 },
      output: { perimeter: 1088.215, area: 50815.0813769 }
    },
    {
      input: { a: 414.165, b: 289.955, c: 459.689 },
      output: { perimeter: 1163.809, area: 59014.7459996 }
    },
    {
      input: { a: 378.2, b: 448.806, c: 385.93 },
      output: { perimeter: 1212.936, area: 69379.5843518 }
    },
    {
      input: { a: 458.73, b: 300.005, c: 215.516 },
      output: { perimeter: 974.251, area: 26514.1894514 }
    },
    {
      input: { a: 312.217, b: 273.196, c: 336.054 },
      output: { perimeter: 921.467, area: 39999.4330392 }
    },
    {
      input: { a: 329.521, b: 190.385, c: 219.852 },
      output: { perimeter: 739.758, area: 20049.5364392 }
    },
    {
      input: { a: 194.108, b: 382.707, c: 259.007 },
      output: { perimeter: 835.822, area: 22873.7976109 }
    },
    {
      input: { a: 135.714, b: 154.734, c: 256.405 },
      output: { perimeter: 546.853, area: 8722.0291971 }
    },
    {
      input: { a: 201.842, b: 263.815, c: 368.808 },
      output: { perimeter: 834.465, area: 25838.8012017 }
    },
    {
      input: { a: 185.874, b: 481.453, c: 346.964 },
      output: { perimeter: 1014.291, area: 25894.7516012 }
    },
    {
      input: { a: 370.124, b: 174.94, c: 406.961 },
      output: { perimeter: 952.025, area: 32370.9675018 }
    },
    {
      input: { a: 468.036, b: 407.786, c: 299.205 },
      output: { perimeter: 1175.027, area: 60309.8125271 }
    },
    {
      input: { a: 264.56, b: 474.648, c: 389.771 },
      output: { perimeter: 1128.979, area: 51551.9941222 }
    },
    {
      input: { a: 125.497, b: 486.97, c: 409.936 },
      output: { perimeter: 1022.403, area: 21996.0307356 }
    },
    {
      input: { a: 272.312, b: 149.191, c: 209.596 },
      output: { perimeter: 631.099, area: 15507.5856088 }
    },
    {
      input: { a: 262.562, b: 259.812, c: 156.248 },
      output: { perimeter: 678.622, area: 19467.7810346 }
    },
    {
      input: { a: 311.701, b: 319.744, c: 190.848 },
      output: { perimeter: 822.293, area: 28692.9812094 }
    },
    {
      input: { a: 301.863, b: 188.75, c: 195.912 },
      output: { perimeter: 686.525, area: 17987.3980412 }
    },
    {
      input: { a: 192.064, b: 282.36, c: 280.538 },
      output: { perimeter: 754.962, area: 25404.9739991 }
    },
    {
      input: { a: 212.096, b: 245.637, c: 261.38 },
      output: { perimeter: 719.113, area: 24351.4166222 }
    },
    {
      input: { a: 153.049, b: 214.093, c: 324.22 },
      output: { perimeter: 691.362, area: 13713.0826022 }
    },
    {
      input: { a: 390.885, b: 482.598, c: 347.332 },
      output: { perimeter: 1220.815, area: 67122.9786804 }
    },
    {
      input: { a: 426.919, b: 478.842, c: 492.893 },
      output: { perimeter: 1398.654, area: 93117.2657845 }
    },
    {
      input: { a: 326.513, b: 468.864, c: 240.671 },
      output: { perimeter: 1036.048, area: 36778.5136204 }
    },
    {
      input: { a: 439.884, b: 353.078, c: 327.001 },
      output: { perimeter: 1119.963, area: 56937.3864786 }
    },
    {
      input: { a: 461.498, b: 428.437, c: 344.418 },
      output: { perimeter: 1234.353, area: 70329.8282179 }
    },
    {
      input: { a: 266.522, b: 202.973, c: 276.357 },
      output: { perimeter: 745.852, area: 25519.5841651 }
    },
    {
      input: { a: 327.346, b: 198.875, c: 259.542 },
      output: { perimeter: 785.763, area: 25808.1366606 }
    },
    {
      input: { a: 101.895, b: 288.061, c: 264.334 },
      output: { perimeter: 654.29, area: 13449.9261434 }
    },
    {
      input: { a: 487.055, b: 137.805, c: 450.673 },
      output: { perimeter: 1075.533, area: 30821.3790617 }
    },
    {
      input: { a: 472.128, b: 208.912, c: 409.395 },
      output: { perimeter: 1090.435, area: 42664.359871 }
    },
    {
      input: { a: 258.395, b: 232.536, c: 311.781 },
      output: { perimeter: 802.712, area: 29456.3563403 }
    },
    {
      input: { a: 393.282, b: 490.613, c: 207.094 },
      output: { perimeter: 1090.989, area: 39268.9086841 }
    },
    {
      input: { a: 485.68, b: 378.908, c: 336.632 },
      output: { perimeter: 1201.22, area: 63559.6731635 }
    },
    {
      input: { a: 327.217, b: 145.678, c: 397.539 },
      output: { perimeter: 870.434, area: 22644.4751531 }
    },
    {
      input: { a: 322.248, b: 241.372, c: 351.651 },
      output: { perimeter: 915.271, area: 37684.4281147 }
    },
    {
      input: { a: 399.125, b: 357.793, c: 189.628 },
      output: { perimeter: 946.546, area: 33903.6564681 }
    },
    {
      input: { a: 162.287, b: 327.222, c: 344.046 },
      output: { perimeter: 833.555, area: 26284.2339342 }
    },
    {
      input: { a: 315.577, b: 250.672, c: 308.996 },
      output: { perimeter: 875.245, area: 35837.6272963 }
    },
    {
      input: { a: 224.357, b: 218.766, c: 199.455 },
      output: { perimeter: 642.578, area: 19723.15645 }
    },
    {
      input: { a: 261.864, b: 162.171, c: 379.962 },
      output: { perimeter: 803.997, area: 17254.6259702 }
    },
    {
      input: { a: 359.268, b: 386.899, c: 276.625 },
      output: { perimeter: 1022.792, area: 47685.3428339 }
    },
    {
      input: { a: 120.804, b: 412.793, c: 303.478 },
      output: { perimeter: 837.075, area: 9075.4547853 }
    },
    {
      input: { a: 228.388, b: 218.848, c: 391.813 },
      output: { perimeter: 839.049, area: 21116.8315213 }
    }
  ]
  