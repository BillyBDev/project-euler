













console.log(summationOfPrimes(2000000))






function summationOfPrimes(ceiling){
    let table = Array(ceiling).fill(true);
    let sum = 2;
    for (let i = 3; i < ceiling; i+= 2){
        // loop thru table
        // if find true, seed multiples as false
        if (table[i]){
            sum += i;
            for (let j = i * 2; j < ceiling; j += i){
                table[j] = false;
            }
        }
    }

    return sum;
}


// function isPrime(num){
//     for (let i = 2; i <= num / 2; i++){
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(21))
// console.log(isPrime(23))














// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
 