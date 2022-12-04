function invert(obj) {
    var retobj = {};
    for (let key of Object.keys(obj)) {
        let v = obj[key];
        retobj[v] = key;
    }
    return retobj;
}
