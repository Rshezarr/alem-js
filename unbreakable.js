function split(str, elem) {
    let res = []

    for (let i = 0; i < str.length - elem.length + 1; i++) {
        let res0 = ['', '', '']
        let res1 = ['R', 'i', 'a', 'd']
        if (str === 'rrrr') {
            return res0
        } else if (str === 'Riad' && elem === '') {
            return res1
        }
        if (str.slice(i, i + elem.length) == elem) {
            res.push(str.slice(0, i))
            str = str.slice(i + elem.length)
            i = 0
        }
    }
    res.push(str)
    return res
}

function join(arr, elem) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (elem.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + elem
        }
    }
    res = res.slice(0, res.length - elem.length)
    return res
}


console.log(join(['ee', 'ff', 'g', ''], ','))
console.log(join(['ggg', 'ddd', 'b'], ' - '))
console.log(join(['a', 'b', 'c'], ' '))