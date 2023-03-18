// Write your solution below:

function makeUnique (string) {
    let solution = ""

    for (let i = 0; i < string.length; i++) {
        if (solution.includes(string[i])) {
            continue
        } else {
            solution += string[i]
        }
    }
    return solution
}

console.log(makeUnique('twasbrilligandtheslithytoves'))