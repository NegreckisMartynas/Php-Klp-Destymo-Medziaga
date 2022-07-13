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

filterByPrice(4, filterByLength(184, data)).forEach(printFilm);

data.filter(f => f.length > 184)
    .filter(f => f.price < 4)
    .map(f => f.title)
    .forEach(printFilm)

//Pavyzdys su Ramda biblioteka:
//const cheaperThan4 = (arr) => filterByPrice(4, arr);
//const longerThan184 = (arr) => filterByLength(184, arr);
//R.compose(cheaperThan4, longerThan184)(data).forEach(printFilm);

//Paimti pirmus 5 filmus iš masyvo



//Surikiuoti pagal kainą didėjimo tvarka ( 0.50 , 0.75, 1.00 ir t.t.)



//Surikiuoti pagal pavadinimą nuo Z iki A



//Surikiuoti pagal kainą didėjimo tvarka ir, jei sutampa, pagal pavadinimą nuo A iki Z



//Paimti pirmus 10 ilgiausių filmų



//Ieškoti filmų pagal pavadinimą, paduodant tekstą, pagal kurį ieškoti. Galite patikrinimui naudoti string.contains(substr)



//Ieškoti pagal pavadinimą, aprašymą ir aktorius, naudojant tą patį parametrą. Ieškomas tekstas gali būti bet kuriame iš nurodytų laukų