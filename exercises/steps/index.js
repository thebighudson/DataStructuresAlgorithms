// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = "";

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }

// recursive solution
// steps(d);
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }

    //use ternary operator to shorten below if - if I want to
    //const add = stair.length <= row ? '#' : ' ';
    // then third param to steps would be stair + add
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);

}

// Lesson 15: Complexity - steps
// Non-linear, we have nested loops
// as we increase value of n we had to do significantly more things
// when was 2 we had to do 4 things, when n was 3 we had to do 9 things, etc.
// we had to do n*n things. n squared. N^2, or quadratic, runtime

module.exports = steps;
