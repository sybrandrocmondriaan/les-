const person = {
    name: "Jouw Naam",
    age: 25,
    hobbies: ["lezen", "programmeren", "sporten"]
    };

    const personJSON = JSON.stringify(person);
console.log(personJSON);

const jsonString = '{"name":"Jouw Naam","age":25,"hobbies":["lezen","programmeren"]}'

const parsedPerson = JSON.parse(jsonString);




// const wachtwoordenContainer = document.querySelector(".wachtwoorden");
// const button = document.querySelector(".btn");
// const password = "test";

// function makeLogObject(guess, isCorrect) {
//     const logObject = {
//         guess: guess,
//         isCorrect: isCorrect
//     }
//     return logObject;
// }

// button.addEventListener("click", gokWachtwoord)

// function gokWachtwoord() {
//     const guess = prompt("What is your password?");
//     if (guess === null) {
//         return;
//     }

//     const isCorrect = password === guess;
//     const logObject = makeLogObject(guess, isCorrect);

//     wachtwoordenContainer.innerHTML += `<li>${logObject.guess}: ${logObject.isCorrect}</li>`;

//     if (logObject.isCorrect) {
//         alert("Het wachtwoord is goed")
//     } else {
//         gokWachtwoord()
//     }
// }

// gokWachtwoord()