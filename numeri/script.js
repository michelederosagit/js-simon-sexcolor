// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri il software dice quanti e quali dei numeri da indovinare sono stati individuati;
var number, list, start, clock, memo, scelta, trovato = false;

list = [];
console.log(list);
scelta = [];
console.log(scelta);


// Generiamo 5 numeri casuali
for (var i = 0; i < 5; i++) {
    number = Math.floor(Math.random() * 101);
    list.push(number);
  }

  // Mostriamo i 5 numeri
  alert("Memorizza i 5 numeri e premi OK: " + list );

  // Imposto Timer
  start = 30;
  clock = setInterval(countdown, 500);

  function countdown () {
    if (start == 0) {
      alert("Sei pronto!");
      clearInterval(clock)
      // Funzione per i prompt di inserimento numeri
      function insertNum () {
        memo = parseInt(prompt("Inserisci il numero che hai memorizzato"));
        return memo;
      }
      // Richiedo per 5 volte di inserire il numero
      for (var i = 0; i < 5; i++) {
        insertNum ()
        if (list[i] == memo) {
          trovato = true;
          scelta.push(memo);
        }
      }
      document.getElementById('risultato').innerHTML = "I numeri indovinati sono " + scelta.length + ": " + scelta;
      if (scelta.length === 0) {
        document.getElementById('risultato').innerHTML = "Nessun numero indovinato";
      }
    } else {
      start--;
      document.getElementById('mio_id').innerHTML = "Inizia il conto alla rovescia " + start;
    }
  }



// Anonymous functions
//   clock = setInterval(function() {
//     if (start == 0) {
//         alert("Sei pronto!");
//         clearInterval(clock)
//         // Richiedo per 5 volte di inserire il numero
//         for (var i = 0; i < 5; i++) {
//           insertNum ()
//           if (list[i] == memo) {
//             trovato = true;
//             scelta.push(memo);
//           }
//         }
//         document.getElementById('risultato').innerHTML = "I numeri indovinati sono " + scelta.length + ": " + scelta;
//         if (scelta.length === 0) {
//           document.getElementById('risultato').innerHTML = "Nessun numero indovinato";
//         }
//       } else {
//         start--;
//         document.getElementById('risultato').innerHTML = "Inizia il conto alla rovescia " + start;
//       }
//    }, 1000);