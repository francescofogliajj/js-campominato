// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var difficolta = prompt("Scegli il livello di difficoltà tra 0, 1 o 2");

var range;

switch (difficolta) {
  case "0":
    range = 100;
  break;

  case "1":
    range = 80;
  break;

  case "2":
    range = 50;
  break;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
var numeriComputer = [];

while (numeriComputer.length < 16) {
  var numeroCasuale = numeroRandom(1, range);

  if (numeroDuplicato(numeriComputer, numeroCasuale) == false) {
    numeriComputer.push(numeroCasuale);
  }

}

console.log(numeriComputer);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var numeriUtente = []

var partitaFinita = false;

while (numeriUtente.length < (range - 16) && partitaFinita == false) {
  var numeroInserito = parseInt(prompt("Inserisci un numero tra 1 e " + range));

  if (numeroDuplicato(numeriUtente, numeroInserito) == false) {

    if (numeroDuplicato(numeriComputer, numeroInserito) == true) {
      partitaFinita = true;
    } else {
      numeriUtente.push(numeroInserito);
    }

  } else {
    alert("Numero già inserito!");
  }

}

console.log(numeriUtente)

if (partitaFinita = true) {
  alert("Hai perso! Il tuo punteggio è " + numeriUtente.length);
} else {
  alert("Hai vinto! Il tuo punteggio è " + numeriUtente.length);
}

// Funzioni---------------------------------------------------------------------
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeroDuplicato(array, elemento) {
  var trovato = false;

  for (i = 0; i < array.length ; i++) {
    if (elemento == array[i]) {
      trovato = true;
      return trovato;
    }
  }

  return trovato;
}
