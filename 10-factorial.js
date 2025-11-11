const args = process.argv.slice(2);
const num = parseInt(args[0]);

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(num));