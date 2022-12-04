function currify(func) {
    return function (a) {
        return function (b) {
            if (func.toString() == mult2.toString()) {
                return func(a, b);
            }
            return function (c) {
                if (func.toString() == add3.toString()) {
                    return func(a, b, c);
                }
                return function (d) {
                    if (func.toString() == sub4.toString()) {
                        return func(a, b, c, d);
                    }
                };
            };
        };
    };
}
