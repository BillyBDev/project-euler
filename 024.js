
// console.log(findLexicographicPermutations("789", 3))
console.log(findLexicographicPermutations("0123456789", 1000000))

function findLexicographicPermutations(str, n){
    let counter = 0;

    // slightly different behavior at surface level
    // find permutations until counter reaches n
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        const remainder = str.slice(0, i) + str.slice(i + 1);
        const permutedRemainder = permute(remainder);

        for (let permutation of permutedRemainder){
            counter++;
            if (counter === n) return char + permutation;
        }
    }

    // standard "find all permutations" algorithm 
    function permute(str){
        if(str.length === 1) return [str];

        let result = [];

        // set aside each char
        for (let i = 0; i < str.length; i++){
            const char = str[i];

            // set aside remainder
            const remainder = str.slice(0, i) + str.slice(i + 1);

            // permute remainder, append each permutation to i, push to result
            const permutedRemainder = permute(remainder);

            permutedRemainder.forEach(x => {result.push(char + x)});
        }

        return result;
    }


}







// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
