// rest parameter
const double = (...nums) => {
    console.log(nums)
    return nums.map(num => num * 2)
    // do something
}

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8)
console.log(result)
// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal']
const members = ['mario', 'chun-li', ...people]
console.log(members)


// spread syntax (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'}
const personClose = {...person}
personClose.age = 25

console.log(personClose)

// sets

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun']
// console.log(namesArray)
//
// const namesSet = new Set(...namesArray)

const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames)

const ages = new Set()
ages.add(20).add(30).add(40)

console.log(ages, ages.size)
console.log(ages.has(30))

ages.clear()