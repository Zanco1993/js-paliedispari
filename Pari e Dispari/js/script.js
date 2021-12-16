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

function pariDispari(sommaNumeri){
    if (sommaNumeri % 2 === 0) {
        console.log("La somma è PARI");
    } else {
        console.log("La somma è DISPARI");
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

if (choosePariDispari.toLowerCase() === "pari" && sumNumber % 2 === 0) {
    console.log("L'utente ha vinto!!!")
} else if (choosePariDispari.toLowerCase() === "dispari" && sumNumber % 2 === 0) {
    console.log("La macchina ha vinto!!!")
    
} else {
    console.log("HAI SBAGLIATO AD INSERIRE I DATI!!! RITENTA!!!")
}


