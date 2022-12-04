function hasCity(country, citiesArr) {
    return function (city) {
        if (citiesArr.includes(city)) {
            return city + " is a city from " + country;
        }
        return city + " is not a city from " + country;
    };
}

// console.log(hasCity("France", ["Bordeaux", "Paris", "Lille", "Lyon", "Marseille", "Saint-Étienne"])("Paris"));
