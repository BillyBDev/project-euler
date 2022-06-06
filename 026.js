 let one = BigInt(10000000);
 one = one * one * one * one;
 one = one * one * one * one;
 one = one * one * one * one;
 one = one * one * one * one;
 one = one * one * one;

console.log(findLongestRepeatingDecimal(1000))

function findLongestRepeatingDecimal(ceiling){
    let longest = [0]

    for (let i = 1; i < ceiling; i++){
        let num = one / BigInt(i);
        num = num.toString();
        if (i > 10) num = "0" + num;
        if (i > 100) num = "0" + num;

        // j is pattern length
        for (let j = 1; j <=  num.length / 2; j++){
            // k is index of num
            for (let k = 0; k < num.length - j; k++){
                let pattern = num.slice(k, k + j);
                if (pattern === num.slice(k + j, k + j + j) && pattern === num.slice(k + j + j, k + j + j + j) && pattern === num.slice(k + j + j + j, k + j + j + j + j)){
                    if (pattern.length > longest[0]) longest = [pattern.length, i, pattern];
                    j = Infinity;
                    break;
                }
            }
        }
    }

    return longest;
}



// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1 

// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
