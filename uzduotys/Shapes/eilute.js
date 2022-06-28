function eilute(simboliuSkaicius) {
    let line = '*';
    for(let i = 1; i < simboliuSkaicius; i++) {
        line = line + '*';
    }
    console.log(line);
}

eilute(5);
eilute(1);
eilute(10);