const data = require('./data.js')

//Atspausdinti duoto filmo pavadinimą, žanrą, aktorius, kainą
function takeFilmData(film) {
    return {
        title: film.title,
        category: film.category,
        actors: film.actors,
        price: film.price
    }
}

function printFilm(film) {
    console.log(film);
}

data.map(takeFilmData).forEach(printFilm);
//Paimti tik filmus, ilgesnius už nurodytą ilgį
console.log('===========', 'filter by length')
function filterByLength(length, data) {
    return data.filter(film => film.length > length);
}

//false ==
// 0,
// null,
// undefined,
// false,
// '',
// NaN

filterByLength(184, data).forEach(printFilm);

//Paimti tik filmus, pigesnius už nurodytą kainą
console.log('===========', 'filter by price')
function filterByPrice(price, data) {
    return data.filter(film => film.price < price)
}

filterByPrice(4, filterByLength(184, data));//.forEach(printFilm);

data.filter(f => f.length > 184)//[ film ]
    .filter(f => f.price < 4)//[ film ]
    .map(f => f.title)//[ string ]
    .forEach(f => console.log(f));

//Pavyzdys su Ramda biblioteka:
//const cheaperThan4 = (arr) => filterByPrice(4, arr);
//const longerThan184 = (arr) => filterByLength(184, arr);
//R.compose(cheaperThan4, longerThan184)(data).forEach(printFilm);

//Paimti pirmus 5 filmus iš masyvo

console.log('===========', 'limit 5')
data.slice(0,5) //[film]
    .map(f => f.title)//[string]; string neturi title, category ir t.t.
    .forEach(f => console.log(f))


//Surikiuoti pagal kainą didėjimo tvarka ( 0.50 , 0.75, 1.00 ir t.t.)
console.log('===========', 'sort by price')
data.sort((a,b) => a.price-b.price) //[film]
    .slice(0,20)
    .map(f => f.title + ' ' + f.price)
    .forEach(printFilm);

//Surikiuoti pagal pavadinimą nuo Z iki A
console.log('===========', 'sort by title')
data.sort((b,a) => a.title.localeCompare(b.title)) //[film]
    .slice(0,20)
    .map(f => f.title + ' ' + f.price)
    .forEach(printFilm);

//Surikiuoti pagal kainą didėjimo tvarka ir, jei sutampa, pagal pavadinimą nuo A iki Z
console.log('===========', 'sort by price and title')
function compareByPriceAndName(a, b) {
    let compPrice = a.price - b.price;
    if(compPrice === 0) {
        return a.title.localeCompare(b.title);
    }
    return compPrice;
    // return -1 | 0 | 1
}
function printFilmPretty(f) { console.log(f.title + ' ' + f.price);}
function filmPretty(f) { return f.title + ' ' + f.price;}
// data.sort(compareByPriceAndName) //[film]
//     .slice(0,20)
//     .map(filmPretty)
//     .forEach(f => console.log(f));

data.sort(compareByPriceAndName) //[film]
    .slice(0,20)
    .forEach(printFilmPretty);

//Paimti pirmus 10 ilgiausių filmų
function sortByLength(a, b) {
    return a.length - b.length;
}

data.sort((b, a) => sortByLength(a, b))
    .slice(0, 10)
    .forEach(printFilm);

//Ieškoti filmų pagal pavadinimą, paduodant tekstą, pagal kurį ieškoti. 
// Galite patikrinimui naudoti string.includes(substr)
console.log('==========', 'filter by title')

function filterByTitle(data, phrase) {
    return data.filter(film => film.title.includes(phrase))
}
filterByTitle(data, 'AB').forEach(f => console.log(f));

//Ieškoti pagal pavadinimą, aprašymą ir aktorius, 
//naudojant tą patį parametrą. 
//Ieškomas tekstas gali būti bet kuriame iš nurodytų laukų
console.log('===========', 'Film Search')
function filterByTitleDescActors(data, phrase) {
    return data.filter(film => film.title.toLowerCase().includes(phrase.toLowerCase()) ||
                               film.description.toLowerCase().includes(phrase.toLowerCase()) ||
                               film.actors.toLowerCase().includes(phrase.toLowerCase()));
}
filterByTitleDescActors(data, 'john').slice(0, 10).forEach(printFilm);