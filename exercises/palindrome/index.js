// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //Solution #1 the most obvious, split/reverse/join
    // const reversed = str.split('').reverse().join('');

    // return str === reversed;

    //Use Array every function solution #2
    //More comparisons than needed but can discuss that
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });


}

module.exports = palindrome;
