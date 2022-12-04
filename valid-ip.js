const regex = /((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}\:?([0-9]{1,5})?/gm;

function findIP(dataSet) {
    let arr = dataSet.match(regex);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "0.0.0.0:68768") {
            arr.splice(i, 1);
        }
    }
    return arr;
}
