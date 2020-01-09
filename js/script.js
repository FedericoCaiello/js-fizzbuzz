
// var divisione = 100 / 3;
// console.log(divisione);
for (var i = 1; i < 101; i++) {
console.log(i);
var contenuto = document.getElementById('lista_numeri').innerHTML;
document.getElementById('lista_numeri').innerHTML = contenuto + '<li>' + i + '</li>';
console.log(document.getElementById('lista_numeri').innerHTML);
}
