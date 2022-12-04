function dogYears(name, ageInSec) {
    let resAge = 0
    let t = 0.00
    let newT = 0.00
    if (name == "earth") {
        resAge = Number((Math.fround(ageInSec / 31557600) * 7).toFixed(2))
    } else if (name == "mercury") {
        t = 365.25 * 0.2408467
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "venus") {
        t = 365.25 * 0.61519726
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "mars") {
        t = 365.25 * 1.8808158
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "jupiter") {
        t = 365.25 * 11.862615
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "saturn") {
        t = 365.25 * 29.447498
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "uranus") {
        t = 365.25 * 84.016846
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    } else if (name == "neptune") {
        t = 365.25 * 164.79132
        newT = t * 24 * 60 * 60
        resAge = Number((Math.fround(ageInSec / newT) * 7).toFixed(2))
    }
    return resAge;
}

console.log(dogYears("earth", 1000000000))
console.log(dogYears("mercury", 2134835688))