function multiplesSum(num){
    const pattern = [2, 1, 3, 1, 2, 3, 3]
    let sum = 0;
    let currentNum = 3;
    let patternPosition = 0

    while (currentNum < num){
        sum += currentNum;
        currentNum += pattern[patternPosition];
        patternPosition++;
        if (patternPosition > 6) patternPosition = 0;
    }

    return sum;
}

console.log(multiplesSum(1000))






// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
