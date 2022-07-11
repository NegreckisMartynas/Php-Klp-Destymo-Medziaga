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
{
    let time = 0;
    let posA = point(90, 0);
    let posB = point(0,0);
    let speedA = point(-10,0);
    let speedB = point(20,0);
    while(posA.x > posB.x){
        posA = pointAdd(posA, pointMult(speedA, 0.1));
        posB = pointAdd(posB, pointMult(speedB, 0.1));
        time += 0.1;
        //console.log('Time', time, posA, posB);
    }
}

// koks atstumas tarp dviratininku po 1.5 val, jei isvaziuoja priesingomis kryptimis
// vieno greitis 10 km/h, kito 20 km/h
{
    let time = 1.5;//
    let posA = point(0,0);
    let posB = point(0,0);
    let speedA = point(-10,0);//
    let speedB = point(20,0);//
    while(time > 0){
        posA = pointAdd(posA, pointMult(speedA, 0.1));
        posB = pointAdd(posB, pointMult(speedB, 0.1));
        time -= 0.1;
        console.log('Time', time, posA, posB);
    }
    console.log(lineLength(posA, posB))
}

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