function eilute(simboliuSkaicius) {
    let line = '';
    for(let i = 0; i < simboliuSkaicius; i++) {
        line = line + '* ';
    }
    return line;
}

function eiluteSuTarpu(length) {
    let line = '* ';
    for(let i = 0; i < length -2; i++) {
        line += '. ';
    }
    line += '*';
    return line;
}

function tusciasKvadratas(size) {
    console.log(eilute(size));
    for(let i = 0; i < size - 2; i++){
        console.log(eiluteSuTarpu(size));
    }
    console.log(eilute(size));
}

tusciasKvadratas(8);