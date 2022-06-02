

console.log(nthPrime(100001))


function nthPrime(num){
    // build a table of primes
    const table = [];
    let numIndex = 2;

    while (table.length < num){
        if (isPrime(numIndex)) table.push(numIndex);
        numIndex++;
    }

    return table[num - 1]
}




function isPrime(num){
    for (let i = 2; i <= num / 2; i++ ){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}









//     10001st prime
// Problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
