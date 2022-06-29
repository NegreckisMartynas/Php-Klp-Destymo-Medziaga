for(let i = 0; i < rows; i++) { // rows = 3, i -> 0, 1, 2
    console.log(eilute(i+1))
}

for(let i = 1; i <= rows ; i++) { // rows = 3, i -> 1, 2, 3
    console.log(eilute(i+1))
}

for(let i = rows; i > 0; i--) { // rows = 3, i -> 3, 2, 1
    console.log(eilute(i+1))
}

for(let i = rows; i >= 0; i--) { // rows = 3, i -> 3, 2, 1, 0
    console.log(eilute(i+1))
}