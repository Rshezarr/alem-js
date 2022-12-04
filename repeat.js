function repeat(s, n) {
    let temp = ''
    while (n !== 0) {
        n--
        temp = temp + s
    }
    return temp
}