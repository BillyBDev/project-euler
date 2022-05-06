







function findMinimalProductSumNumber(k){
    let increasals = 0;
    let set = Array(k).fill(1);

    return recurse(set);

    function recurse(set){
        const sum = set.reduce((prev, next) => {return Number(prev) + Number(next)}, 0);
        const product = set.reduce((prev, next) => {return prev * next}, 1)
        if (sum === product) {
            return set;
        }

        if (increasals > 0){
            for (let i = 0; i < set.length; i++){
                let newSet = set.slice();
                newSet[i]++;
                return recurse(newSet)
            }
        }
    }
}

console.log(findMinimalProductSumNumber(12))













// A natural number, N, that can be written as the sum and product of a given set of at least two natural numbers, {a1, a2, ... , ak} is called a product-sum number: N = a1 + a2 + ... + ak = a1 × a2 × ... × ak.

// For example, 6 = 1 + 2 + 3 = 1 × 2 × 3.

// For a given set of size, k, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, k = 2, 3, 4, 5, and 6 are as follows.

// k=2: 4 = 2 × 2 = 2 + 2
// k=3: 6 = 1 × 2 × 3 = 1 + 2 + 3
// k=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4
// k=5: 8 = 1 × 1 × 2 × 2 × 2 = 1 + 1 + 2 + 2 + 2
// k=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6

// Hence for 2≤k≤6, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.

// In fact, as the complete set of minimal product-sum numbers for 2≤k≤12 is {4, 6, 8, 12, 15, 16}, the sum is 61.

// What is the sum of all the minimal product-sum numbers for 2≤k≤12000?
















// function findMinimalProductSumNumber(k){
//     let currentMin = -1;
//     let set = Array(k).fill(1).join("-");
//     let memo = {};

//     // let count = 0;

//     recurse(set);

//     return currentMin;

//     function recurse(set){
//         if (set in memo) return;
//         memo[set] = true;

//         let arr = set.split("-")
//         const sum = arr.reduce((prev, next) => {return Number(prev) + Number(next)}, 0);
//         const product = arr.reduce((prev, next) => {return prev * next}, 1)
//         if (sum === product) {
//             if (currentMin === -1 || sum < currentMin) currentMin = sum;
//         }    
//         for (let i = 0; i < arr.length; i++){
//             if (arr[i] < k){
//                 // count++;
//                 // console.log(arr)
//                 // console.log(count)
//                 arr[i]++;
//                 recurse(arr.join("-"))
//             }


//         }
//     }
// }