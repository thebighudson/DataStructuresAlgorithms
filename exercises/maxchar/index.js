// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// NOTE:
// This technique can also be used for questions like 'Most common character in a string', 
//'Does string A have the same characters as string B (is it an anagram)?, 
// Does the given string have any repeated characters...

// take string and convert to object: key is letter and value is number of times it has occured

function maxChar(str) {
    str = str;
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        //chars[char] = chars[char] + 1 || 1;
        if(!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    }

    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    // console.log(chars);

    return maxChar;

}

module.exports = maxChar;
