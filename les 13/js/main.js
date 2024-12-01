// const buttonAddUser = document.querySelector(".addUser");
// const userList = document.querySelector(".allUsers");
// console.log(buttonAddUser);
// console.log(userList);

// buttonAddUser.addEventListener("click", () => {
// const firstName = prompt("wat is je naam");
// const lastName = prompt("wat is je achternaam");
// const age = prompt("hoe oud ben je");
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// });

// function makeObject(firstName, lastName, age) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         getFullName: function() {
//             return this.firstName + ' ' + this.lastName;
//         }
//     };
// }

// function promptAndCheck(vraag) {
//     const input = prompt(vraag);
//     if (input) {
//         return input;
//     } else {
//         alert('Please enter a valid input');
//         return promptAndCheck(vraag);
//     }
// }

// function renderUsers() {
//     allUsersList.innerHTML = '';
//     users.forEach(function(user) {
//         const li = document.createElement('li');
//         li.textContent = user.getFullName() + ' ' + user.age;
//         allUsersList.appendChild(li);
//     });

// }



// // function makeObject(firstName, lastName, age) {
// //     return{
// //         firstname: firstName;
// //         lastname: lastName;
// //         age: age;
// //     }
// // }

// // function promptAndCheck(vraag){
// //     const velue = prompt(vraag);
// //     if (!velue) (

// //     )
// // }

const addUserButton = document.querySelector('.addUser');
let users = [];

addUserButton.addEventListener('click', () => {
    console.log('button works');
    addUser ();
});

function addUser () {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const age = prompt("Enter age:");

    if (!firstName || !lastName || !age) {
        alert("All fields are required!");
        return;
    }

    if (isNaN(age) || age <= 0 ) {
        alert("Please enter a valid age.");
        return;
    }

    if (isNaN(age) || age <= 18 ) {
        alert("You are too young");
        return;
    }

    if (isNaN(age) || age >= 112  ) {
        alert("Yeah sure buddy..");
        return;
    }

        const user = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    users.push(user);
    displayUsers();
}

function displayUsers() {
    const userList = document.querySelector('.all-users');
    userList.innerHTML = '';

    users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'user-item';
        listItem.innerHTML = `${user.getFullName()} (${user.age})`;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-user';
        removeButton.onclick = () => {
            removeUser (index);
        };

        listItem.appendChild(removeButton);
        userList.appendChild(listItem);
    });
}

function removeUser (index) {
    users.splice(index, 1);
    displayUsers();
}


// if (age = !ParseInt(age)) {
//     alert("je hebt nummer nodig")
// } else {
    
// }