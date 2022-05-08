function longestCollatzChain(ceiling){
    let longestSequence = [0, 0]
    const memo = {};

    for (let i = 2; i < ceiling; i++){
        const length = findCollatzSequenceLength(i);
        if (length > longestSequence[0]) longestSequence = [length, i]
    }

    return longestSequence[1];

    function findCollatzSequenceLength(num){
        if (num === 1) return 1;
        if (num in memo) return memo[num];

        let length;

        if (num % 2 === 0){
            length = findCollatzSequenceLength(num / 2) + 1;
        } else {
            length =  findCollatzSequenceLength(num * 3 + 1) + 1;
        }
        memo[num] = length;
        return length;
    }
}

console.log(longestCollatzChain(1000000))

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.
