















console.log(smallestMultiple());






function smallestMultiple(){
    for (let i = 20; i > 0; i += 20){
        for (let j = 11; j <= 21; j++){
            if (j === 21) return i;
            if (i % j !== 0) break;
        }
    }
}



// Smallest multiple
// Problem 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
