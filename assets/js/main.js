/* 
    DESCRIZIONE:

    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

/* 
    Strumenti:
        - prompt x2
        - let/const
        - if statements
        - document.getElementyId('id')
        - console.log

    Pseudo Codice:
        - Richiedere all'utente il numero di chilometri che vuole percorrere
        - Richiedere all'utente l'età del passeggero
        - Calcolare il prezzo del viaggio
        - Controllare se va applicato uno sconto in base all'età
        - Mostrare il prezzo finale del biglietto con max 2 numeri decimali

*/


//TODO: Eseguire un controllo sul dato inserito
const distance = Number(prompt("Inserire il numero di chilometri che si vuole percorrere: "));
console.log("km viaggio: " + distance);

//TODO: Eseguire un controllo sul dato inserito
const age = Number(prompt("Inserire l'età del passeggero: "));
console.log("età: " + age);

const ticketPriceElement = document.getElementById('ticket_price');
console.log("👉" + ticketPriceElement);
const kmPrice = 0.21 //Prezzo al km in euro

let ticketPrice = distance * kmPrice; //prezzo del biglietto intero
console.log("Prezzo biglietto prima di controllare l'età: " + ticketPrice.toFixed(2));

if (age < 18) {
    ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
    console.log(ticketPrice);
} else if (age >= 65) {
    ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
    console.log(ticketPrice);
}

console.log("Prezzo biglietto dopo aver controllato l'età: " + ticketPrice.toFixed(2));

ticketPriceElement.innerHTML = `Il prezzo del tuo bieglietto è: <strong>${ticketPrice.toFixed(2)}€</strong>`;




