function citiesOnly(arr) {
    let resArr = arr.map(function (elem) {
        return `${elem.city}`;
    });
    return resArr;
}

function upperCasingStates(arr) {
    let resArr = arr.map(function (elem) {
        const arr = elem.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const elem2 = arr.join(" ");
        return elem2;
    });
    return resArr;
}

function fahrenheitToCelsius(arr) {
    let resArr = arr.map(function (elem) {
        let fahrenheit = parseInt(elem.split("°F")[0]);
        let celsius = Math.floor(((fahrenheit - 32) * 5) / 9);

        return celsius.toString() + "°C";
    });
    return resArr;
}

function trimTemp(arr) {
    let resArr = arr.map(function (elem) {
        elem.temperature = elem.temperature.replace(/\s/g, "");
        return elem;
    });
    return resArr;
}

function tempForecasts(arr) {
    let resArr = arr.map(function (elem) {
        let arr = elem.state.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const elem2 = arr.join(" ");

        let fahrenheit = parseInt(elem.temperature.split("°F")[0]);
        let celsius = Math.floor(((fahrenheit - 32) * 5) / 9);

        let c = celsius.toString() + "°Celsius in ";
        let temp;
        return (temp = c + elem.city + ", " + elem2);
    });
    return resArr;
}
// console.log("1 function:");
// console.log(
//     cititesOnly([
//         { city: "Los Angeles", temperature: "  101 °F   " },
//         { city: "San Francisco", temperature: " 84 ° F   " },
//     ])
// );
// console.log("============================================================");

// console.log("2 function:");
// console.log(upperCasingStates(["alabama", "new jersey"]));
// console.log("============================================================");

// console.log("3 function:");
// console.log(fahrenheitToCelsius(["86°F", "100°F", "41°F", "45°F", "70°F", "95°F"]));
// console.log("============================================================");

// console.log("4 function:");
// console.log(
//     trimTemp([
//         { city: "Los Angeles", temperature: "  101 °F   " },
//         { city: "San Francisco", temperature: " 84 ° F   " },
//     ])
// );
// console.log("============================================================");

// console.log("5 function:");
// console.log(
//     tempForecasts([
//         {
//             city: "Pasadena",
//             temperature: " 101 °F",
//             state: "california",
//             region: "West",
//         },
//         {
//             city: "Almaty",
//             temperature: " 123 °F",
//             state: "alma ata",
//             region: "West",
//         },
//     ])
// );
// console.log("============================================================");
