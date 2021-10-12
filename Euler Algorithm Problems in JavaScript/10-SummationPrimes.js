function summationPrimes(num){
    allPrimes = [2, 3];
    sum = 5;

    for(let i=5; i<num; i+=2){
        isPrime = true;
        for(let j=3; j<i; j+=2){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            sum = sum + i;
        }
    }
    console.log(sum);

}


summationPrimes(2000000);