findNonAbundantSumNumbers();

function findNonAbundantSumNumbers(){
    // our ceiling is 28123

    // find all abundant numbers up to that amount
    let abundantNums = [];

    for (let i = 12; i < 28123; i++){
        let divisors = [];

        for (let j = Math.floor(Math.sqrt(i)); j > 1; j--){
            if (i % j === 0){
                divisors.unshift(j);
                if (j === i / j) continue;
                divisors.push(i / j);
            }
        }
        divisors.unshift(1);
        let sum = divisors.reduce((prev, next) => prev + next);
        if (sum > i) abundantNums.push(i); 
    }

    let table = [];
    for (let i = 0; i <= 28123; i++) table.push(i);

    for (let i = 0; i < abundantNums.length; i++){
        for (let j = i; j < abundantNums.length; j++){
            table[abundantNums[i] + abundantNums[j]] = 0;
        }
    }

    console.log(table.reduce((prev, next) => prev + next));
}





// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.








// bin
// memoizing found divisors is silly because, after adding the nums, you now have to add logic to skip over them
// this may not be any faster than just checking them using %

// let abundantNums = [];
// // memo hold all divisors except 1 (which would be redundant since all will contain 1)
// let memo = {};

// for (let i = 1; i <= 28; i++){
//     let divisors = new Set();
//     for (let j = Math.floor(Math.sqrt(i)); j > 1; j--){
//         if (j in memo) {
//             memo[j].forEach((n) => {divisors.add(n)});
//             continue;
//         }
//         if (i % j === 0) {
//             divisors.add(j);
//             divisors.add(i / j);
//         }
//     }
//     if (divisors.size > 0) memo[i] = [...divisors]
// }