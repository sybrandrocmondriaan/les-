const buttonAddUser = document.querySelector(".addUser");
const userList = document.querySelector(".allUsers");
console.log(buttonAddUser);
console.log(userList);

buttonAddUser.addEventListener("click", () => {
const firstName = prompt("wat is je naam");
const lastName = prompt("wat is je achternaam");
const age = prompt("hoe oud ben je");
console.log(firstName)
console.log(lastName)
console.log(age)
});

// function makeObject(firstName, lastName, age) {
//     return{
//         firstname: firstName;
//         lastname: lastName;
//         age: age;
//     }
// }

// function promptAndCheck(vraag){
//     const velue = prompt(vraag);
//     if (!velue) (

//     )
// }
