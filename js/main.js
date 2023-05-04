/* ESERCIZIO */

// Crea un array vuoto. 
const oddNumbers = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    
    const inputNumber = parseInt(prompt());

    // Se è dispari inseriscilo nell’array
    if (inputNumber % 2) {         
        oddNumbers.push(inputNumber);
    }
    
}

console.log(oddNumbers);


// Stampa l'array