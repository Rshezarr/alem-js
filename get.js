function get(src, path) {
    let pathArr = path.split('.')
    let temp = src
    pathArr.forEach((elem) => {
        if (temp === undefined) {
            return temp
        }
        temp = temp[elem]
    })
    return temp
}

