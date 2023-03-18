// Write your code below this line

function decoder(code) {
    let shiftBy = Number(code[0])
    let solution = ""

    for (let i = 1; i < code.length; i++) {
        let newLetter = code[i].charCodeAt() + shiftBy
        solution += String.fromCharCode(newLetter)
    }

    return solution
}

console.log(decoder('2fcjjm'))