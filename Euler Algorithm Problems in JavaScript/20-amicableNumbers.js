// First Method
function amicableNumbers(num){
    let countFirstNumber = 0;
    let countSecondNumber = 0;
    for(let i=1; i<num/2+1; i++){
        if(num % i === 0){
            countFirstNumber += i;
        }
    }
    console.log(countFirstNumber);

    for(let j=0; j<countFirstNumber/2+1; j++){
        if(countFirstNumber % j === 0){
            countSecondNumber += j
        }
    }
    console.log(countSecondNumber);
}


num = 10000;
amicableNumbers(num);

// True Way
function sumAmicableNum(n) {
  function d(n){
    let output = []
    for (let i = 1; i < n; i++){
        if (n%i===0){
            output.push(i)
        }
    }
    if (output.length === 0){
      return 0
    }else {
      return output.reduce((a,b)=> a+=b)
    }
  }

  let amicableNums = []

  for (let i = 1; i < n; i++){
    let r1 = d(i)
    let r2 = d(r1)
    if (i === r2 && i !== r1 && amicableNums.indexOf(i) === -1){
      amicableNums.push(i, r1)
    }
  }
  console.log(amicableNums.reduce((a,b)=> a+=b))
}

sumAmicableNum(10000);