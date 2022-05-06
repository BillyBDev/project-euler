








console.log(sumSquare(100))


function sumSquare(num){
    let squareSum = 0;
    let sumSquare = 0;

    // calculate sum of all squares
    for (let i = 1; i <= num; i++){
        squareSum += i * i;
    }

    // calculate square of sum
    for (let i = 1; i <= num; i++){
        sumSquare += i;
    }

    sumSquare *= sumSquare;

    return sumSquare - squareSum;
}



// Sum square difference
// Problem 6

// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is

// .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.