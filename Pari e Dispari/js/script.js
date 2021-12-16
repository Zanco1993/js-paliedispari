// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function number(min, max){
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}

function pari(sommaNumeri){
    if (sommaNumeri % 2 === 0) {
        console.log("Complimenti la somma è PARI quindi hai vinto!!!");
    } else {
        console.log(`Non sei stato fortunato, la macchina ha vinto!!!`);
}
}

function dispari(sommaNumeri){
    if (sommaNumeri % 2 === 0) {
        console.log("Non sei stato fortunato, la macchina ha vinto!!!");
    } else {
    console.log("Complimenti la somma è DISPARI quindi hai vinto!!!");
}
}


const choosePariDispari = prompt("Inserisci la tua scelta: Pari o Dispari?");
console.log(`L'utente ha scelto ${choosePariDispari}`);

const numUser = parseInt(prompt("Inserisci un numero da  1 a 5"));

// verifico che l'utente digiti un numero positivo tra 1 e 5
// voglio escludere i negativi, lo 0 ed i numeri maggiori di 5
if (numUser < 1 || numUser > 5) {
    console.log("Il numero inserito è maggiore di 5. RITENTA!!!")
} 

console.log(`Il numero inserito dall'utente è ${numUser}`);
const numMachine = number(1, 5);
console.log(`Il numero inserito dalla macchina casualmente è ${numMachine}`);

let sumNumber = numUser + numMachine;
console.log(`La somma dei numeri inseriti è ${sumNumber}`);


if (choosePariDispari.toLowerCase() === "pari") {
    pari(sumNumber);
} else if (choosePariDispari.toLowerCase() === "dispari") { 
    dispari(sumNumber);
} else {
    console.log("HAI SBAGLIATO AD INSERIRE I DATI!!! RITENTA!!!");
}

