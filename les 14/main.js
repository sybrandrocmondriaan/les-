const button = document.querySelector(".button");
button.addEventListener("click", () => {
    const firstName = prompt("Wat is je naam?");
    const besteming = prompt("Kies een bestemming, wilt u naar de bergen of het strand? (type bergen of strand)");

    if(besteming === 'bergen'){ // Use '===' for strict comparison
        alert('Geweldig, de bergen wachten op je!');
    } else if(besteming === 'strand'){ // Use '===' for strict comparison
        alert('Zonnen op het strand is altijd een goed idee!');
    } else {
        alert('Onbekende keuze, probeer opnieuw');
    }
});

const bestemmingen = ["Parijs", "New York", "Tokyo", "Sydney", "Kaapstad"];

for (let i = 0; i < bestemmingen.length; i++) {
    alert(bestemmingen[i]);
}

const lijstElement = document.querySelector(".bestemmingen-lijst");

// Voeg elke bestemming toe als een lijstitem (<li>)
for (let i = 0; i < bestemmingen.length; i++) {
    const lijstItem = document.createElement("li");
    lijstItem.textContent = bestemmingen[i]; // Zet de bestemming als tekst
    lijstElement.appendChild(lijstItem); // Voeg het <li> element toe aan de <ul>
}