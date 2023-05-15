# Javascript introduktion

## Variabler / Datatyper

### Variabler

**Variabler = informationsbehållare ( låda )**

```js
let box = 1;
box = "Hello there";
```

### Datatyper

**string** är text
**numbers** är numeriska värden ( siffror )

```js
let text = `Hello there!`;
let num = 1337;
```

Du kan också blanda variabler ( om du använder ``).

```js
let name = `Johan`;
let greeting = `Hello ${name}, din gamle get!`;
```

## For-loopar

Loopar används när kod behöver upprepas, vilket är OTROLIGT vanligt.

```js
for (let i = 0; i < 100; i++) {
  document.write(`<p>${words[0]} ${i}</p>`);
}
```

**Loopa ut Array**

```js
let words = ["Yo", "Tjena", "Hej", "goddag", "Hallå", "näämen tjeeena"]; // Array
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}
```

**Loop i loopen**

```js
let words = ["Yo", "Tjena", "Hej", "goddag", "Hallå", "näämen tjeeena"]; // Array

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${words[i]} ${j}`);
  }
}
```
