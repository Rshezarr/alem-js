// let obj = { d: 100, t: 2, f: 100 }

function getAcceleration(obj) {
    if (obj.f && obj.m) {
        let res = obj.f / obj.m
        return res
    }
    
    if (obj.Δv && obj.Δt) {
        let res = obj.Δv / obj.Δt
        return res
    }

    if (obj.d && obj.t) {
        let res = (2 * obj.d) / (obj.t * obj.t)
        return res
    }
    
    return 'impossible'
}


// console.log(getAcceleration(obj))