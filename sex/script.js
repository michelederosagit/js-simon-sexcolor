// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.
var nome, sesso;

nome = prompt("Inserisci il tuo nome");
sesso = prompt("Sei Maschio o Femmina?")
console.log("Mi chiamo " + nome + " e sono " + sesso);

var elemento = document.getElementById('nome');

elemento.innerHTML = "Ciao " + nome;

if (sesso == "Maschio"){
    elemento.style.color = "blue";
} else if (sesso == "Femmina"){
  elemento.style.color = "pink";
} else {
  elemento.style.color = "black";
}
