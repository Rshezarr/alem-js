function letterSpaceNumber(str) {
    if (str !== "") {
        let res = str.match(/[a-zA-Z]\s\d\b/g);
        if (res != null) {
            return res;
        }
    }
    return [];
}

console.log(letterSpaceNumber("I like 7up."));
console.log(letterSpaceNumber("example 1, example 2"));
console.log(letterSpaceNumber("It's 20 past 3"));
console.log(letterSpaceNumber(""));
console.log(letterSpaceNumber("Definitely 9."));
