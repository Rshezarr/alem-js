function sums(n) {
    if (n < 2) {
        return [];
    }
    let p = new Array(n);

    let k = 0;

    p[k] = n;
    let array = [];

    while (true) {
        let rem_val = 0;

        while (k >= 0 && p[k] == 1) {
            rem_val += p[k];
            k--;
        }

        if (k < 0) break;

        p[k]--;
        rem_val++;

        while (rem_val > p[k]) {
            p[k + 1] = p[k];
            rem_val = rem_val - p[k];
            k++;
        }

        p[k + 1] = rem_val;
        k++;
        let arr = p.slice(0, k + 1);
        arr.sort();
        array.push(arr);
    }
    array.reverse();
    return array;
}
