function sumSquareDifference(num){
    let SumSquare = 0;
    let countForSquareSum = 0;
    let SquareSum = 0;
    let finalResult = 0;

    for(i=1; i<=num; i++){
        SumSquare += i**2;
        countForSquareSum += i;
    }

    SquareSum = countForSquareSum ** 2;
    finalResult = SquareSum - SumSquare;
    console.log(finalResult);
}

sumSquareDifference(100);