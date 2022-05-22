console.log(factorialDigitSum(100))

function factorialDigitSum(num){
    let counter = BigInt(num);
    let product = BigInt(1);

    while (counter > 1){
        product *= counter;
        counter--;
    }

    product = product.toString();

    let sum = 0;
    for (let char of product){
        sum += Number(char)
    }

    return sum;
}


// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!
