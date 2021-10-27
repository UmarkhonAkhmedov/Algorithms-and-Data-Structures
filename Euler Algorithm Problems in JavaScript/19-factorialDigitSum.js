function factorialDigitSum(num){
    let factorialCount = 1;
    let NumArray = [];
    let count = 0;
    for(let i=2; i<=num; i++){
        factorialCount *= i;
    }

    let myFunc = any => Number(any);
    var numArray = Array.from(String(factorialCount), myFunc);

    for(let j=0; j<numArray.length; j++){
        count += numArray[j];
    }

    return count;
}


num = 19;
console.log(factorialDigitSum(num));