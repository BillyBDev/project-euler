function findPowerSums(power){
    const resultNums = [];

    for (let i = 2; i <  3000000; i++){
        let sum = 0;
        let str = i.toString();
        for (let char of str){
            sum += Math.pow(Number(char), power);
        }
        if (sum === i) resultNums.push(i);
    }

    return resultNums.reduce((prev, curr) => prev + curr);

}

console.log(findPowerSums(4)) // 19316
console.log(findPowerSums(5))

