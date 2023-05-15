// Deklarera (skapa) variabeln ( lådan)

let number = 1337; // Number
let boolean = true; // Boolean ( true eller false )
let string = "I am a cool string!"; // String

let name = 'Rachel';

let greeting = `Hello ${name}, din gamle get!`;

let html = `<p>${name}</p>`; // template strings
html = "<p>" + name + "</p>";

// FOR LOOP
// krav 1: Vart börjar vi? ( let i = 0; )
// Krav 2: Hur ska den fortsätta?
// krav 3: iterator, räkna upp
/*
i = i + 1
0 = 0 + 1
1 = 1 + 1
2 = 2 + 1
3 = 3 + 1
*/
/*
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i * j)
    }
}
*/

// Klassisk forloop
for(let i = 0; i<100; i++ ){
    document.write(`<p>${words[0]} ${i}</p>`)
}

// Loopa ut Array
let words = ['Yo', 'Tjena', 'Hej', 'goddag', 'Hallå', "näämen tjeeena"]; // Array

for(let i = 0; i < words.length; i++){
    for(let j = 0; j<10; j++){
        console.log(`${words[i]} ${j}`)
    }
}


// document.write(greeting, greeting, greeting)

