/* ESERCIZIO */

// Crea un array vuoto. 
const oddNumbers = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    
    const inputNumber = parseInt(prompt("Inserisci un numero: "));

    // Se è dispari inseriscilo nell’array
    if (inputNumber % 2 != 0) {         
        oddNumbers.push(inputNumber);
    }
    
}

// Stampa l'array
console.log("I numeri dispari che hai inserito sono: " + oddNumbers);

