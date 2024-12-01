
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    const firstName = prompt("wat is je naam");
    const besteming = prompt("kies een bestming, wilt u naar de bergen of het strand? (type bergen of strand)");

    if(besteming = 'bergen'){
        alert('Geweldig, de bergen wachten op je!');
    }else if(besteming = 'strand'){
        alert('Zonnen op het strand is altijd een goed idee!');
    }else{
        alert('onbekende keuze, probeer opnieuw');
    }

    
});
// const buttonAddUser = document.querySelector(".addUser");
// const userList = document.querySelector(".allUsers");
// console.log(buttonAddUser);
// console.log(userList);

// buttonAddUser.addEventListener("click", () => {
// const firstName = prompt("wat is je naam");
// const lastName = prompt("wat is je achternaam");
// const age = prompt("hoe oud ben je");