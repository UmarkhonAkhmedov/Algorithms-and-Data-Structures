// My Own inefficient solution
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//var smallestMultiple = function(){
//    for(let i=100000000; i<300000000; i+=20){
//        if(i % 11 == 0 && i % 12 == 0 && i % 13 == 0 && i % 14 == 0 && i % 15 == 0 && i % 16 == 0 && i % 17 == 0 && i % 18 == 0 && i % 19 == 0 && i % 20 == 0){
//            console.log(i);
//
//        } else {
//            continue;
//        }
//    }
//}
//
//smallestMultiple();


// Efficient solution
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

let smallestMultiple = (largestDivisor) => {
    let solution;
    let potentialSolution = largestDivisor;
    let unsolved = true;

    while(unsolved){
        let currentDivisor;
        for(currentDivisor = 1; currentDivisor <= largestDivisor; currentDivisor++){
            if(potentialSolution % currentDivisor !=0){
                break
            } else {
                if(currentDivisor === largestDivisor){
                solution = potentialSolution;
                unsolved = false;
                }
            }
        }

        potentialSolution += 1;
    }

    return solution;
}

console.log('Result is ' + smallestMultiple(5));

















