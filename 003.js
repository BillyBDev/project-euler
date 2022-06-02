function largestPrimeFactor(input){

    for (let i = 2; i < input / 2; i++ ){
        if (input % i === 0){
            let factor = input / i;
            // console.log(factor)
            // console.log(checkIfPrime(factor))
            if (checkIfPrime(factor)) return factor;
        }
    }

    return null;

    function checkIfPrime(num){
        for (let i = 2; i <= num / 2; i++ ){
            if (num % i === 0){
                return false;
            }
        }
        return true;
    }
}

console.log(largestPrimeFactor(600851475143)) // 6857



// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
