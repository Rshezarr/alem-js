function letterSpaceNumber(str) {
    if (str !== "") {
        let res = str.match(/[a-zA-Z]\s\d\b/g);
        if (res != null) {
            return res;
        }
    }
    return [];
}