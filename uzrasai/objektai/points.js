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

{
    const distance = 450;
    let posA = point(0,0);
    let posB1 = point(0,0);
    let posB2 = point(0,0);
    const speedA = point(60,0);
    const speedB1 = point(-30,0);
    const speedB2 = point(-120,0);
    let time1 = 0;
    let time2 = 0;
    while(lineLength(posA, posB1) < distance) {
        posA = pointAdd(posA, pointMult(speedA, 0.1));
        posB1 = pointAdd(posB1, pointMult(speedB1, 0.1));
        time1 += 0.1
    }
    posA = point(0,0);
    while(lineLength(posA, posB2) < distance) {
        posA = pointAdd(posA, pointMult(speedA, 0.5));
        posB2 = pointAdd(posB2, pointMult(speedB2, 0.5));
        time2 += 0.5;
    }
    console.log(time1, time2);
}