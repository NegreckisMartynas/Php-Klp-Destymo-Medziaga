const point1 = {x: 1, y: 1}
const point2 = {x: 3, y: 4}

// apskaiciuoti linijos ilgi
function lineLength(p1, p2) {
    // c ** 2 = a ** 2 + b ** 2
    // c = sqrt(a ** 2 + b ** 2)
    // find c
    // a = p1.x - p2.x
    // b = p1.y - p2.y
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;
    const c = Math.sqrt(a ** 2 + b ** 2);
    return c;
}

function pointAdd(p1, p2) {
    const x = p1.x + p2.x;
    const y = p1.y + p2.y;
    return {x, y};
}

function point(x, y) {
    return {x, y}
}

function pointMult(p1, num) {
    const x = p1.x * num;
    const y = p1.y * num;
    return {x, y};
}

/*
Atstumas tarp dviejų miestų 90 km. Iš jų vienu metu išvažiavo du dviratininkai.
Vienas visą kelią važiavo 10km/h greičiu, kitas 20 km/h greičiu. Po kiek laiko jie susitiks
*/

// distance = 90
// a = {pos: [90, 0], speed: [-10, 0]}
// b = {pos: [0, 0], speed: [20, 0]}
function timeUntilMeet(a, b) {
    let time = 0;
    const interval = 0.1;
    while(a.pos.x > b.pos.x && time < 10000){
        a.pos = pointAdd(a.pos, pointMult(a.speed, interval));
        b.pos = pointAdd(b.pos, pointMult(b.speed, interval));
        time += interval;
    }
    console.log('Time until meet: ', Math.round(time * 1000) /1000, ' hours')
}
let a = {pos: point(90,0), speed: point(30, 0)}
let b = {pos: point(0,0), speed: point(20, 0)}
timeUntilMeet(a, b);

// koks atstumas tarp dviratininku po 1.5 val, jei isvaziuoja priesingomis kryptimis
// vieno greitis 10 km/h, kito 20 km/h
function distanceAfterTime(time, a, b) {
    const interval = 0.1;
    while(time > 0){
        a.pos = pointAdd(a.pos, pointMult(a.speed, interval));
        b.pos = pointAdd(b.pos, pointMult(b.speed, interval));
        time -= interval;
    }
    console.log('Distance after travel: ', lineLength(a.pos, b.pos))
}
a = {pos: point(0,0), speed: point(-10,0)}
b = {pos: point(0,0), speed: point(20,0)}
let time = 1.5;
distanceAfterTime(time, a, b);
/*
Iš autobusų stoties išvyko du autobusai priešingomis kryptimis.
Vieno autobuso greitis du kartus mažesnis už kito autobuso greitį. 
Po kiek laiko atstumas tarp autobusų bus 450 km, jeigu vieno iš autobusų greitis 60km/val ?
*/
function timeUntilDistance(distance, a, b) {
    let time = 0;
    a = {pos : copyPoint(a.pos), speed: a.speed};
    b = {pos : copyPoint(b.pos), speed: b.speed};
    const interval = 0.1;
    while(lineLength(a.pos, b.pos) < distance) {
        a.pos = pointAdd(a.pos, pointMult(a.speed, interval));
        b.pos = pointAdd(b.pos, pointMult(b.speed, interval));
        time += interval;
    }
    console.log('Time until distace reached:', Math.round(time * 1000) /1000);
}
let distance = 450;
a = {pos: point(0,0), speed: point(60,0)}
b1 = {pos: point(0,0), speed: pointMult(a.speed, -0.5)}
b2 = {pos: point(0,0), speed: pointMult(a.speed, -2)}
timeUntilDistance(distance, a, b1);
timeUntilDistance(distance, a, b2);
console.log(a); // Kadangi padarom a.pos kopija, a.pos nepasikeicia originale

function copyPoint(p) {
    return {x: p.x, y: p.y}
}