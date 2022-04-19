// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


let userNumber = parseInt(prompt("inserisci un numero di 4 cifre"));

let digits = [];
while (userNumber > 0) {
  digits.push(userNumber % 10);

  userNumber = parseInt(userNumber / 10);
}

console.log(digits);

let sum = 0;

for (let i = 0; i < digits.length; i++) {
  sum += digits[i];
}

console.log(sum);