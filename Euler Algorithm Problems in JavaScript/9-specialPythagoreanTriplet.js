let specialPythagoreanTriplet = (targetValue) => {
    let product;

    for(let a = 1; a < targetValue - 2; a ++){

        for(let b = a + 1; b < targetValue - 1; b++){
            let cSquared = Math.pow(a, 2) + Math.pow(b, 2)
            let c = Math.sqrt(cSquared)

            if(Number.isInteger(c) && (a + b + c) === targetValue){
                product = a * b * c
                console.log('a is ' + a)
                console.log('b is '+ b)
                console.log('c is ' + c)
                return product
            }
        }
    }

    return product
}


console.log('Result is ' + specialPythagoreanTriplet(1000))