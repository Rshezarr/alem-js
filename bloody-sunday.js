function bloodySunday(Data) {
    const start = new Date("0001-01-01");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[((Data.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) % 6];
}

console.log(bloodySunday(new Date("0001-01-01")) === "Monday");
console.log(bloodySunday(new Date("0001-01-02")) === "Tuesday");
console.log(bloodySunday(new Date("0001-01-03")) === "Wednesday");
console.log(bloodySunday(new Date("0001-01-04")) === "Thursday");
console.log(bloodySunday(new Date("0001-01-05")) === "Friday");
console.log(bloodySunday(new Date("0001-01-06")) === "Saturday");
console.log(bloodySunday(new Date("0001-01-07")) === "Monday");
console.log(bloodySunday(new Date("0001-12-01")) === "Friday");
console.log(bloodySunday(new Date("1664-08-09")) === "Saturday");
console.log(bloodySunday(new Date("2020-01-01")) === "Monday");
console.log(bloodySunday(new Date("2048-12-08")) === "Thursday");
