// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
    //iterative solution

    //Runtime Complexity: for ever increase in n we have to do 1 more calculation
    // So, linear runtime O(n)
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// }

//**Using memoize makes it almost instant! fib(15) took 1002ms before but now is less than 1ms
function memoize(fn) {
    const cache = {};
    // ...args means I don't know how many args, just assign them to an array
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function fib(n) {
    //Recusive solution

    //Runtime complexity: 2 ^ n - exponential runtime!
    //for each element added to a collection the call count dramatically increases
    // We do not want to accept an exponential time algorith to an interview question
    if (n < 2){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }

    //Performance is real bad. How can we make this better.
    //fib is being called multiple times with the same arguments
    //Memoization - store result of call with what the paramter was
}

fib = memoize(fib);

module.exports = fib;
