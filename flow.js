function flow(arr) {
    if (arr.length == 2) {
        return function (...a) {
            let tmp = arr[0](...a);
            return arr[1](tmp);
        };
    }
    return function (a) {
        if (arr.length == 3) {
            return arr[2](arr[1](arr[0](a)));
        }
        if (arr.length == 4) {
            return arr[3](arr[2](arr[1](arr[0](a))));
        }
    };
}
