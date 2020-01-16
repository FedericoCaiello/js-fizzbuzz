

for (var i = 1; i < 101; i++) {

 var quoziente = i%3;
 var messaggio = i;
 var quoziente2 = i%5;
 var quoziente3 = i%15;

if (quoziente3==0) {
  messaggio = 'FizzBuzz';
} else if (quoziente2==0) {
 messaggio = 'Buzz';
} else if (quoziente==0)
 messaggio = 'Fizz';
console.log(messaggio);
}


// var i = 1;
// while (i <= 100){
//   quoziente = i%3;
//   quoziente2 = i%5;
//   quoziente3 = i%15;
//   if (quoziente3 == 0){
//     messaggio = 'FizzBuzz';
//     console.log('FizzBuzz');
//   }else if (quoziente2 == 0) {
//     messaggio = 'Buzz';
//     console.log('Buzz');
//   }else if (quoziente == 0){
//     messaggio='Fizz';
//     console.log('Fizz');
//   }
//   else {
//     messaggio = i;
//     console.log(messaggio);
//   }
//   i++;
//
//
// }
// console.log(i);
