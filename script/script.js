// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// let parola = prompt('Inserisci una parola');
// console.log(parolaPalindroma(parola));

// function parolaPalindroma(parola) {
//     // variabile parola palindroma
//     let parolaInversa = '';

//     // creo un ciclo affinchè la parola venga letta al contrario
//     for (let i = parola.length - 1; i >= 0; i--) {
//         parolaInversa += parola[i];
//     }

//     // se la parola è palindroma restituisco un messaggio positivo
//     if (parola == parolaInversa) {
//         return 'La parola è palindroma';
    
//     // altrimenti restituisco un messaggio negativo
//     } else {
//         return 'La parola non è palindroma';
//     }
// }



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let sceltaUtente = prompt('Scegli pari o dispari');
console.log(pariODispari(sceltaUtente));

function pariODispari(sceltaUtente) {
    // creo una variabile per il numero dell'utente 
    let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

    // creo variabile per un numero casuale estratto dal pc e lo stampo
    let numeroComputer = Math.floor(Math.random() * 5) + 1;
    console.log(numeroComputer);

    // creo variabile della somma tra i due numeri estratti e la stampo
    let somma = numeroUtente + numeroComputer;
    console.log(somma);

    // se la somma dei due numeri è pari e l'utente ha scelto pari
    if (somma % 2 == 0 && sceltaUtente == 'pari') {
        return 'Hai vinto';

    // se altrimenti se la somma è dispari e l'utente ha scelto dispari
    } else if (somma % 2 != 0 && sceltaUtente == 'dispari') {
        return 'Hai vinto';

    // altrimenti hai perso
    } else {
        return 'Hai perso';
    }
}