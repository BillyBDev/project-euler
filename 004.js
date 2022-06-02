







largestPalindromeProduct(999);

function largestPalindromeProduct(max){
    let currentLargest = 0;
    let memo = {};

    recurse(max, max)

    console.log(currentLargest)
    // console.log(memo)

    function recurse(num1, num2){
        if (num1 < 0 || num2 < 0) return;

        const str  = (num2 > num1 ? num2 + "-" + num1 : num1 + "-" + num2);
        if (str in memo) return;
        memo[str] = true;

        const product = num1 * num2;
        if (isPalindrome(product) && product > currentLargest) currentLargest = product;

        recurse(num1 - 1, num2);
        recurse(num1, num2 - 1);
    }

    function isPalindrome(product){
        productStr = product.toString();

        for (let i = 0; i <= (productStr.length - 1) / 2; i++){
            if (productStr[i] !== productStr[productStr.length - 1 - i]) return false;
        }

        return true;
    }

}



// isPalindrome(1, 3)
// isPalindrome(11, 3)
// isPalindrome(111, 3)
// isPalindrome(12, 10)
// isPalindrome(3, 4)
// isPalindrome(9, 1111)









// Largest palindrome product


// [Show HTML problem content]  
// Problem 4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
