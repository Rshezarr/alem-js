const arrToSet = (v) => new Set(v)
const arrToStr = (v) => v.join("")
const setToArr = (v) => Array.from(v)
const setToStr = (v) => Array.from(v).join("")
const strToArr = (v) => v.split("")
const strToSet = (v) => new Set(v)
const mapToObj = (v) => Object.fromEntries(v)
const objToArr = (v) => Object.values(v)
const objToMap = (v) => new Map(Object.entries(v))
const arrToObj = (v) => Object.assign({}, v)
const strToObj = (v) => Object.assign({}, v)

function superTypeOf(m) {
    if (m instanceof Map) {
        return 'Map'
    } else if (m instanceof Set) {
        return 'Set'
    }else if (typeof m === 'string') {
        return 'String'
    } else if (typeof m === 'number') {
        return 'Number'
    } else if (Number.isNaN(m)) {
        return 'Number'
    } else if (Array.isArray(m)) {
        return 'Array'
    } else if (typeof m == 'undefined') {
        return 'undefined'
    } else if (m == null) {
        return 'null'
    } else if (typeof m === 'function') {
        return 'Function'
    } else if (typeof m === 'object') {
        return 'Object'
    }
}

// console.log(superTypeOf(new Map()))
// console.log(superTypeOf(new Set()))
// console.log(superTypeOf({}))
// console.log(superTypeOf(''))
// console.log(superTypeOf(666))
// console.log(superTypeOf(NaN))
// console.log(superTypeOf([]))
// console.log(superTypeOf(null))
// console.log(superTypeOf(undefined))
// console.log(superTypeOf(superTypeOf))


// const ob = { a: 1, b: ctv }

// console.log(strToObj(`2${"hel"}2`))