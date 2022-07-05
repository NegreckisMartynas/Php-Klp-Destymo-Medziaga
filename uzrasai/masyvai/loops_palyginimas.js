const array = [100, 200, 300]

for(let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

for(const element of array) {
    console.log(element);
}

array.forEach((element) => console.log(element));