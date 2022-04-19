//L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("inserire prima parola");
const secondWord = prompt("inserire seconda parola");

if (firstWord.length > secondWord.length) {
  console.log(secondWord, firstWord);
} else {
  console.log(firstWord, secondWord);
}