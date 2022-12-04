function filterShortStateName(arr) {
    const result = arr.filter((word) => word.length < 7);
    return result;
}

function filterStartVowel(arr) {
    const result = arr.filter((word) => {
        return /^[a|e|i|o|u]/i.test(word);
    });
    return result;
}

function filter5Vowels(arr) {
    const result = arr.filter((word) => {
        return word.match(/[aeiou]/gi).length >= 5;
    });
    return result;
}
const filter1DistinctVowel = (arr) =>
    arr.filter((str) => {
        let temp = {};
        for (const find of str.match(/(a)|(e)|(i)|(o)|(u)/gi)) {
            temp[find.toLowerCase()] = find.toLowerCase();
        }
        return Object.getOwnPropertyNames(temp).length == 1;
    });

const multiFilter = (arr) =>
    arr.filter(
        (obj) =>
            obj.capital.length >= 8 &&
            !/^[a|e|i|o|u]/i.test(obj.name) &&
            obj.tag.match(/[aeiou]/gi) != null &&
            obj.tag.match(/[aeiou]/gi).length >= 1 &&
            obj.region != "South"
    );

// console.log("1 function:");
// console.log(filterShortStateName(["spray", "limit", "elite", "exuber", "destruction", "present"]));
// console.log("=============================================================");

// console.log("2 function:");
// console.log(filterStartVowel(["spray", "limit", "elite", "exuber", "destruction", "present", "anubis"]));
// console.log("=============================================================");

// console.log("3 function:");
// console.log(filter5Vowels(["California", "Louisiana", "North Carolina", "South Carolina", "South Dakota", "West"]));
// console.log("=============================================================");

// console.log("4 function:");
// console.log(filter1DistinctVowel(["Alabama", "Alaska", "Arkansas", "Kansas", "Maryland", "Mississippi", "New Jersey", "Tennessee"]));
// console.log("=============================================================");

// console.log("5 function:");
// console.log(
//     multiFilter([
//         { tag: "CA", name: "California", capital: "Sacramento", region: "West" },
//         { tag: "HI", name: "Hawaii", capital: "Honolulu", region: "West" },
//         {
//             tag: "MO",
//             name: "Missouri",
//             capital: "Jefferson City",
//             region: "Midwest",
//         },
//         {
//             tag: "PA",
//             name: "Pennsylvania",
//             capital: "Harrisburg",
//             region: "Northeast",
//         },
//         {
//             tag: "RI",
//             name: "Rhode Island",
//             capital: "Providence",
//             region: "Northeast",
//         },
//     ])
// );
// console.log("=============================================================");
