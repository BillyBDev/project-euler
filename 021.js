console.log(sumAmicableNumbers(10000))

function sumAmicableNumbers(ceiling){
    //memoize found sums
    const memo = {};
    const amicableNumbers = [];

    for (let i = 1; i < ceiling; i++){
        const sum = sumDivisors(i);

        // if i matches a previously-found sum, check for amicable pair
        if (i in memo && memo[i].includes(sum)) {
            // prevent (remote possibility of) duplicates
            if (!amicableNumbers.includes(i)) amicableNumbers.push(i);
            if (!amicableNumbers.includes(sum)) amicableNumbers.push(sum);
        }

        if (sum in memo === false){
            memo[sum] = [i];
        } else {
            memo[sum].push(i)
        }
    }

    return amicableNumbers.reduce((a, b) => a + b)

    function sumDivisors(n){
        const divisors = [];
        for (let i = Math.floor(Math.sqrt(n)); i > 1; i--){
            if ( n % i === 0){
                divisors.push(n / i);
                if (n / i === i) continue;
                divisors.unshift(i)
            }
        }
        divisors.unshift(1);
        return divisors.reduce((prev, next) => prev + next);
    }
}




// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.
