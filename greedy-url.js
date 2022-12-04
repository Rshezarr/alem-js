const regexUrl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!-\/]))?/g

function getURL(dataset) {
    let data = dataset.split(/[\s|\n]+/g)
    let res = [];
    data.forEach((elem) => {
        if (elem.match(regexUrl)) {
            res.push(elem.match(regexUrl).join(''))
        }
    })
    return res;
}

function greedyQuery(dataSet) {
    let arr = getURL(dataSet)
    let res = []
    arr.forEach((elem) => {
        let tmp1 = elem.split('?')
        if (tmp1.length >= 2) {
            let tmp2 = tmp1[1].split('&')
            if (tmp2.length >= 3) {
                res.push(tmp1.join('?'))
            }
        }
    })
    return res
}

function notSoGreedy(dataSet) {
    let arr = getURL(dataSet)
    let res = []
    arr.forEach((elem) => {
        let tmp1 = elem.split('?')
        if (tmp1.length >= 2) {
            let tmp2 = tmp1[1].split('&')
            if (tmp2.length <= 3 && tmp2.length >= 2) {
                res.push(tmp1.join('?'))
            }
        }
    })
    return res
}

// console.log(getURL(dataSet))
// console.log(greedyQuery(dataSet))
// console.log(notSoGreedy(dataSet))


