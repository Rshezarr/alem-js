const clone1 = JSON.parse(JSON.stringify(person))
const clone2 = JSON.parse(JSON.stringify(person))
const samePerson = Object.assign(person)
samePerson.age++
samePerson.country = 'FR'