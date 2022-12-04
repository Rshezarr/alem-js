const vowels = /[aeiouAEIOU]/gm;

function vowelDots(str) {
    let res = str.replace(vowels, "$&.");
    if (res != null) {
        return res;
    }
    return "";
}