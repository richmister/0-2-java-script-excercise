"use strict";

const name = "Richard Mcintosh";
let age = 29;
const birthday = "march 30";
const detroitGc = true;
const lifeEvents = [
  "I was born in southfield michigan",
  "I love to fish",
  "I have a cat named dilly dilly",
  "My favorite beers are belgian.",
];

// Variable true or false questions can be understood by js with a ?
if (detroitGc) {
  console.log(
    `My name is ${name} and i am a student at grand circus in Detroit michigan I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  //colen is saying this is what happens when false
  console.log(
    `My name is ${name} and i am a student at grand circus in Grand rapids michigan I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5 It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
