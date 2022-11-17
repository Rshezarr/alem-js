function vowelDots(str) {
    const vowels = /[aeiouAEIOU]/gm;
    let res = str.replace(vowels, "$&.");
    if (res != null) {
        return res;
    }
    return "";
}

console.log(vowelDots("Algorithm"));
