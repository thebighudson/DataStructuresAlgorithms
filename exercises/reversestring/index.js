// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse();
    
//     var reversed = reverseArray.join("");
    
//     return reversed;
// }

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;
}

// Lesson 15 reversstring: Complexity
// as we added 1 character to the algorithm we had to do 1 additional step of work
// This would be linear runtime
// there is a direct 1 to 1 relationship between the number of inputs and the amount if
// work we had to do to process it


// }

// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');
// }

//reverse('asdf');

module.exports = reverse;
