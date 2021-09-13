// Write your solution here!

function cats() {
    return cats = ["Milo", "Otis", "Garfield"];
}
cats();

function destructivelyAppendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.push(name);
    return cats;
}
destructivelyAppendCat('Ralph');


function destructivelyPrependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.unshift(name)
    return cats;
}
destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.pop();
    return cats;
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.shift();
    return cats;
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    let appendCat = [...cats,"Broom"];//creating a copy of cat swith spread operator
    return appendCat;
}
cats;
appendCat();

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    let prepCats = cats.slice();//creating a copy of cats with .slice()
    prepCats.unshift("Arnold")
    return prepCats;
}
cats;
prependCat();

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    let rmLastCat = cats.slice();//creating a copy of cats with .slice();
    rmLastCat.pop();
    return rmLastCat;
}
cats;
removeLastCat();// => [ 'Milo', 'Otis' ]

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    let rmCat = cats.slice();//creating a copy of cats with .slice();
    rmCat.shift();
    return rmCat;
}
removeFirstCat();// => [ 'Otis', 'Garfield' ]
