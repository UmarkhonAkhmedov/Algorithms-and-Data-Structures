function sequence(num){
    let allNumbers = [num, ];
    let count = 0;

    while(true){
        if(allNumbers[count] === 1){
            break;
        }else if(allNumbers[count] % 2 === 0){
            let next = allNumbers[count] / 2;
            allNumbers.push(next);
            count++
        } else {
            let multipleNums = allNumbers[count] * 3 + 1;
            allNumbers.push(multipleNums);
            count++;
        }
    }

    console.log(allNumbers.length);
}


sequence(1000000);