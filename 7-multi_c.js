const args = process.argv.slice(2);
const number = parseInt(args[0]);

if (isNaN(number)) {
    console.log("Missing number of occurrences");
} else {
    for (let args = 1; args <= number; args++) {
        console.log(args)
    }
}