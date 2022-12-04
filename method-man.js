// arrrr = "zap ZAP"
// arrrr2 = ["hello", "how", "are", "you"]

const words = (strArr) => strArr.split(" ");
const sentence = (strArr) => strArr.join(" ");
const yell = (strArr) => strArr.toUpperCase();
const whisper = (strArr) => "*"+strArr.toLowerCase()+"*";
const capitalize = (strArr) => {
    let s = strArr.toLowerCase()
    let str2 = s.charAt(0).toUpperCase() + s.slice(1);
    return str2
}

// console.log(words(arrrr))
// console.log(sentence(arrrr2))
// console.log(yell(arrrr))
// console.log(whisper(yell(arrrr)))
// console.log(capitalize(arrrr))