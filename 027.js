
console.log(findQuadraticPrimeFormula(1000))

function findQuadraticPrimeFormula(coefficientCeiling){

    let highest = [0];
    const memo = {};

    // test all coefficient combinations
    // check for a streak of primes.
    for (let a = (coefficientCeiling * -1) + 1; a < coefficientCeiling; a++){
        for (let b = (coefficientCeiling * -1); b <= coefficientCeiling; b++){
            let counter = 0;
            let n = 0;
            while (n !== -1){
                if (isPrime((n * n) + (a * n) + b)){
                    counter++;
                    n++;
                } else {
                    n = -1;
                }
            }
            if (counter > highest[0]) highest = [counter, a, b];
        }
    }

    return highest[1] * highest[2];
    // return highest;

    function isPrime(num){
        if (num < 0) return false;
        if (num in memo) return memo[num];
        for (let i = Math.floor(Math.sqrt(num)); i > 1; i--){
            if (num % i === 0) {
                memo[num] = false;
                return false;
            }
        }
        memo[num] = true;
        return true;
    }
}