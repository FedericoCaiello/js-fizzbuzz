
// for (var i = 1; i < 101; i++) {
//
 // var quoziente = i%3;
 // var messaggio = i;
 // var quoziente2 = i%5;
 // var quoziente3 = i%15;
//
// if (quoziente3==0) {
//   messaggio = 'FizzBuzz';
// } else if (quoziente2==0) {
//  messaggio = 'Buzz';
// } else if (quoziente==0)
//  messaggio = 'Fizz';
// console.log(messaggio);
// }


var i = 1;
while (i < 101){
  var quoziente = i%3;
  var messaggio = i;
  var quoziente2 = i%5;
  var quoziente3 = i%15;
  console.log(i);
  if (quoziente3==0){
    messaggio = 'FizzBuzz';
  }else if (quoziente2==0) {
    messaggio = 'Buzz';
  }else if (quoziente==0)
  messaggio='Fizz';
  console.log(messaggio);
  i = i + messaggio;
  i++;



}
console.log(i);
