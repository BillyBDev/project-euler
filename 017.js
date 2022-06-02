console.log(addUpLetters(1000))

function addUpLetters(ceiling){
    let total = 0;

    for (let counter = 1; counter <= ceiling; counter++ ){
        total += numOfLetters(counter)
    }

    return total;
}

function numOfLetters(num){
    let sum = 0;

    const ones = {
        "0": "",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine"
    }

    const tens = {
        "0": "",
        "1": "", // special logic needed for teens
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
    }

    // going from right-to-left
    const set = num.toString().split("").reverse();

    sum += ones[set[0]].length;

    if (set[1]) {
        if (set[1] === "1"){
            if (set[0].match(/[012358]/)){
                sum += 3;
            } else {
                sum += 4;
            }    
        } 
        sum += tens[set[1]].length;
    }

    if (set[2]){
        let hundredsLength = ones[set[2]].length + 10;

        // handle special case where "and" gets omitted
        if (set[0] === "0" && set[1] === "0") hundredsLength -= 3;
        sum += hundredsLength;
    }

    if (set[3]) sum = 11;

    return sum;

}





// **********
// **********
// **********
// **********
// **********


// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

