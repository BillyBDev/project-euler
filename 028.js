function findDiagonalsOfSpiral(dim){
    let ceiling = dim * dim;
    
    // running total
    let sum = 1;

    // position on board
    let n = 1;

    // triggers every 4th iteration
    let counter = 1;

    let increase = 2;

    while (n < ceiling){
        n += increase;
        sum += n;
        if (counter === 4){
            increase += 2;
            counter = 0;
        }
        counter++;
    }

    return sum;
}

console.log(findDiagonalsOfSpiral(5)) // 101
console.log(findDiagonalsOfSpiral(1001))