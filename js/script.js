// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Cerchiamo di capire se la parola inserita dall'utente è uguale anche 
// leggendola al contrario (esempio anna, radar ecc.)

//facciamo inserire all'utente parola

function palindroma(parolaDritta, parolaRovescia){
    if (parolaDritta === parolaRovescia) {
        console.log('Le due parole sono Palindroma')
    } else {
        console.log('Le due parole NON sono Palindroma')
    }
}

//dichiaro le variabili che mi interessano
let word = prompt("Inserisci una parola");
let wordStraight = "";
let wordReverse = "";

// chiedo al for di stamparmi tutti i caratteri della parola

for(let i = 0; i < word.length; i++){
    wordStraight += word[i];
}

console.log(wordStraight);

// chiedo al for di restituirmi i caratteri rovesciati della parola

for(let i = word.length - 1; i >= 0; i--){
    wordReverse += word[i];
}

console.log(wordReverse);

//richiamo la funzione creata in precedenza che mi andrà a dire
// se la parola è Palindroma oppure no
palindroma(wordStraight, wordReverse);


