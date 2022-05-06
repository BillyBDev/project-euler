



// check 3-4-5s ?

// are there other integer triplets?
// let's find out.

// YES!!!  =)
// 5, 12, 13


function findTripletsSum(num){

    let tempArr = [];
    let memo = {};


    // plug potential c values into findTriplets function
    // for c values with valid pythagorean children, look for sum of exactly num.

    // handle case where a given c value has more than one set of pythagorean children
    for (let i = num - 1; i > 0; i--){
        if (findTriplets(i)){
            if (tempArr[0] + tempArr[1] + tempArr[2] == num){
                console.log(tempArr)
                return tempArr[0] * tempArr[1] * tempArr[2];
            } else {
                tempArr = [];
                i++;
            }
        }
    }

    function findTriplets(recNum){
        tempArr.unshift(recNum);
        //recursive base case
        if (tempArr.length === 3){
            if (tempArr[0] ** 2 + tempArr[1] ** 2 === tempArr[2] ** 2){
                let combination = tempArr.join("-");
                if (combination in memo) {
                    tempArr.shift();
                    return false;
                }
                memo[combination] = true;
                return true;
            } else {
                tempArr.shift();
                return false;
            }
        }
    
        for (let i = recNum - 1; i > 0; i--){
            if (findTriplets(i)) return true;
        }
    
        // finished checking digits.  no valid options found.
        tempArr.shift();
        return false;
    
    }
}

console.log(findTripletsSum(1000)) // 31875000















// let tempArr = [];

// function findTriplets(num){
//     tempArr.unshift(num); // tempArr = [10];
//     console.log(tempArr)
//     //recursive base case
//     if (tempArr.length === 3){
//         if (tempArr[0] ** 2 + tempArr[1] ** 2 === tempArr[2] ** 2){
//             return true;
//         } else {
//             tempArr.shift();
//             return false;
//         }
//     }

//     for (let i = num - 1; i > 0; i--){
//         if (findTriplets(i)) return true;
//     }

//     // finish checking digits, no trues found, remove first elem and return false.
//     tempArr.shift();
//     return false;

// }



// new idea
// use Math.sqrt
// 


// console.log(findTriplets(1000))


// function test(){
//     if (tempArr[0] ** 2 + tempArr[1] ** 2 === tempArr[2] ** 2){
//         return true;
//     }
//     return false
// }
// let tempArr = [3, 4, 56];
// console.log(test())








// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
