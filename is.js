const is = {}
is.num = function (a) {
        if (typeof a === 'number') {
            return true
        }
        return false
    }
is.nan =  function (a) {
        if (Number.isNaN(a)) {
            return true
        }
        return false
    }
is.str = function (a) {
        if (typeof a === 'string')  {
            return true
        }
        return false
    }
is.bool = function (a) {
        if (typeof a === 'boolean') {
            return true
        }
        return false
    }
is.undef = function (a) {
        if (typeof a === 'undefined') {
            return true
        }
        return false
    }
is.def = function (a) {
        if (typeof a !== 'undefined') {
            return true
        }
        return false
    }
is.arr = function (a) {
        if (Array.isArray(a)) {
            return true
        }
        return false
    }
is.obj = function (a) {
        if (typeof a === 'object' && a !== null && !Array.isArray(a)) {
            return true
        }
        return false
    }
is.fun =  function (a) {
        if (typeof a === 'function') {
            return true
        }
        return false
    }
is.truthy = function (a) {
        if (a) {
            return true
        }
        return false
    }
is.falsy = function (a) {
        if (!a) {
            return true
        }
        return false
    }


// const obj = {
//     name: "rshezarr"
// }
// function d() {
//     return
// }
// console.log("is num " + is.num(5))
// console.log("is nan " + is.nan("ad"))
// console.log("is str " + is.str("str"))
// console.log("is bool " + is.bool(true))
// console.log("is undef " + is.undef(undefined))
// console.log("is def " + is.def(5))
// console.log("is arr " + is.arr([1, 2]))
// console.log("is obj " + is.obj(obj))
// console.log("is fun " + is.fun(d))
// console.log("is truthy " + is.truthy(5))
// console.log("is falsy " + is.falsy(5))

