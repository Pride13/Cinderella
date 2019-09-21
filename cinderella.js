// first variant with 2 princ
class Popeliushka {
    constructor(name, age, sizeLeg){
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }
}

let Oksana = new Popeliushka('Oksana', 17, 37);
let Olena = new Popeliushka('Olena', 20, 44);
let Ira = new Popeliushka('Ira', 27, 43);
let Roksolana = new Popeliushka('Roksolana', 19, 35);
let Natalia = new Popeliushka('Natalia', 18, 38);
let Marta = new Popeliushka('Marta', 21, 36);
let Anna = new Popeliushka('Anna', 23, 40);
let Halyna = new Popeliushka('Halyna', 25, 39);
let Ksenia = new Popeliushka('Ksenia', 24, 34);
let Ivanka = new Popeliushka('Ivanka', 29, 41);

// console.log(Oksana);

class Princ {
    constructor(name, age, foundShoes){
        this.name = name;
        this.age = age;
        this.foundShoes = foundShoes;
    }
}

let Petro = new Princ('Petro', 27, 37);
let Ivan = new Princ('Ivan', 27, 44);
let Mykola = new Princ('Mykola', 27, 43);
let Roman = new Princ('Roman', 27, 35);
let Vasyl = new Princ('Vasyl', 27, 38);
let Andtiy = new Princ('Andtiy', 27, 36);
let Misha = new Princ('Misha', 27, 40);
let Oleg = new Princ('Oleg', 27, 39);
let Ihor = new Princ('Ihor', 27, 34);
let Danylo = new Princ('Danylo', 27, 41);

let arrSinderela = [Oksana, Olena, Ira, Roksolana, Natalia, Marta, Anna, Halyna, Ksenia, Ivanka];
let arrPrinc = [Petro, Ivan, Mykola, Roman, Vasyl, Andtiy, Misha, Oleg, Ihor, Danylo];

arrPrinc.forEach(value1 => {
    let PC = arrSinderela.find(value2 => value2.sizeLeg === value1.foundShoes);
    console.log((JSON.stringify(PC)+ JSON.stringify(value1)));
});


// second variant Cinderela /1princ
class Popeliushka {
    constructor(name, age, sizeLeg){
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }
}

let Oksana = new Popeliushka('Oksana', 17, 37);
let Olena = new Popeliushka('Olena', 20, 44);
let Ira = new Popeliushka('Ira', 27, 43);
let Roksolana = new Popeliushka('Roksolana', 19, 35);
let Natalia = new Popeliushka('Natalia', 18, 38);
let Marta = new Popeliushka('Marta', 21, 36);
let Anna = new Popeliushka('Anna', 23, 40);
let Halyna = new Popeliushka('Halyna', 25, 39);
let Ksenia = new Popeliushka('Ksenia', 24, 34);
let Ivanka = new Popeliushka('Ivanka', 29, 41);

// console.log(Oksana);

class Princ {
    constructor(name, age, foundShoes){
        this.name = name;
        this.age = age;
        this.foundShoes = foundShoes;
    }
}

let Petro = new Princ('Petro', 27, 37);

let arrSinderela = [Oksana, Olena, Ira, Roksolana, Natalia, Marta, Anna, Halyna, Ksenia, Ivanka];
let arrPrinc = [Petro];

function searchCinderela(Sinderela, sizeOfLeg) {
    for (let i = 0; i < Sinderela.length; i++) {
        if (arrSinderela[i].sizeLeg === sizeOfLeg)
            console.log(JSON.stringify(arrPrinc[i]) + JSON.stringify(arrSinderela[i]));
    }
}
searchCinderela(arrSinderela, Petro.foundShoes);