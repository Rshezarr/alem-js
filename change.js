// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }
  
const get = (key) =>  sourceObject[key]

function set(k, val) {
    return sourceObject[k]= val
}

// console.log(get('num'))
// console.log(set('num', 55))