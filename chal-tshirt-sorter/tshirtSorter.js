// Write your solution below:

function shirtSorter(str) {
    let s = ''
    let m = ''
    let l = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            s += 's'
        } else if (str[i] === 'm') {
            m += 'm'
        } else {
            l += 'l'
        }
    }

    return s + m + l
}

console.log(shirtSorter('ssmllmslmlmslml'))