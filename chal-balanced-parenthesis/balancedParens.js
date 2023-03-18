// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function balancedParen(str) {
    let openingCount = 0
    let closingCount = 0    

    for (i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openingCount++
        } else if (str[i] === ')') {
            closingCount++ 
        }
    }

    return openingCount === closingCount
}

console.log(balancedParen(sample2))