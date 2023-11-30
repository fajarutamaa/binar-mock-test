'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n')

    main()
});

function readLine() {
    return inputString[currentLine++]
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    /* 
    if i is a multiple of both 3 and 5, print FizzBuzz
    if i is a multiple of 3(but not 5), print Fizz
    if i is a multiple of 5(but not 3), print Buzz
    if i is not a multiple of 3 or 5, print thr value of i
    */

    for (let i = 1; i <= n; i++) {
        
        const mod3 = i % 3
        const mod5 = i % 5

        if (mod3 == 0 && mod5 == 0) {
            console.log('FizzBuzz')
        } else if (mod3 == 0) {
            console.log('Fizz')
        } else if (mod5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10)
    fizzBuzz(n)
}

main()