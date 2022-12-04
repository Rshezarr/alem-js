function chunk(slice, size) {
    if (size == 0) {
        return arr
    }

    let j = 0
    let temp = []
    let res = []
    for (let i = 0; i < slice.length; i++) {
        temp.push(slice[i])
        j++
        if (j == size) {
            res.push(temp)
            j = 0
            temp = []
        }
    }
    if (j != 0) {
        res.push(temp)
    }
    return res
}

// console.log(chunk(['a', 'b', 'c', 'd'], 2))
// console.log(chunk(['a', 'b', 'c', 'd'], 3))