function findDistinctPowers(min, max){
    const table = [];
    for (let i = BigInt(min); i <= BigInt(max); i++){
        for (let j = BigInt(min); j <= BigInt(max); j++){
            // find power, check if unique
            let result = exponent(i, j);
            if (!table.includes(result)) table.push(result);
        }
    }

    return table.length;

    function exponent(n1, n2){
        let ans = n1;
        for (let i = BigInt(1); i < n2; i++){
            ans *= n1;
        }
        return ans;
    }
}


console.log(findDistinctPowers(2, 5)) // 15
console.log(findDistinctPowers(2, 100))