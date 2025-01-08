// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('Inserisci una parola');
console.log(parolaPalindroma(parola));

function parolaPalindroma(parola) {
    // variabile parola palindroma
    let parolaInversa = '';

    // creo un ciclo affinchè la parola venga letta al contrario
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i];
    }

    // se la parola è palindroma restituisco un messaggio positivo
    if (parola == parolaInversa) {
        return 'La parola è palindroma';
    
    // altrimenti restituisco un messaggio negativo
    } else {
        return 'La parola non è palindroma';
    }
}
