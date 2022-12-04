function flat(arr, d = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return d > 0
        ? arr.reduce((acc, val) => acc.concat(flat(val, d - 1)), [])
        : arr.slice();
}
