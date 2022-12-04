const escapeStr = "\` \\ \/ \" \'"
const arr = [4, '2']
const obj = {
    str: "rshezarr",
    num: 21,
    bool: true,
    undef: undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "rshezarr",
        num: 21,
        bool: true
    }
}

const deepFreeze = obj => {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
       Object.freeze(obj);
       Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
     }
   return obj;
};

deepFreeze(nested);
Object.freeze(arr);
Object.freeze(obj);