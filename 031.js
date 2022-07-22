console.log(poundPermutations(200));

function poundPermutations(n){
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const table = Array(n + 1).fill(0);
    table[0] = 1;

    // seed table with each coin
    // diagram in images folder
    for (let coin of coins){
        for (let i = 1; i <= n; i++){
            const prev = i - coin;
            if (prev < 0) continue;
            table[i] += table[prev];
        }
    }

    return table[n];

}
