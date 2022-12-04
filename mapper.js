function map(arr, func) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        let ina = func(arr[i], i, arr);
        res.push(ina);
        i++;
    }
    return res;
}

function flatMap(arr, func) {
    let res = [];
    let mapres = map(arr, func);
    for (let map of mapres) {
        if (Array.isArray(map)) {
            for (let m of map) {
                res.push(m);
            }
        } else {
            res.push(map);
        }
    }
    return res;
}
