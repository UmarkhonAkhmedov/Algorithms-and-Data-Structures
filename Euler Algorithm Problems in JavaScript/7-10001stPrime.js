//By listing the first six prime numbers:
//2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

//function prime(number){
////    var listOfPrimeNum = [];
//    for (var counter = 2; counter <= number; counter++) {
//        var notPrime = false;
//        for (var i = 2; i <= counter; i++) {
//            if (counter%i===0 && i!==counter) {
//                notPrime = true;
//            }
//        }
//        if (notPrime === false) {
//           listOfPrimeNum.push(counter);
//        }
//    }
////    if (listOfPrimeNum.length === 10001){
////        console.log(listOfPrimeNum[10001])
////    }
//}
//
//prime(1000000);

function prime(n) {
  let primeList = [2];
  let i = 3;
  while(primeList.length < n){
    let j = 0;
    let isPrime = true;
    let bound = parseInt(Math.sqrt(i));
    while(primeList[j] <= bound){
      if(i % primeList[j] == 0){
        isPrime = false;
        break;
      }
      j++;
    }
    if(isPrime){
      primeList.push(i);
    }
    i+=2;
  }
  return primeList[primeList.length - 1];
}
console.log(prime(10001));