// timestamps

const before = new Date('February 1 2019 7:30:59')
const now = new Date()

// console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime()

console.log(diff)

const mins = Math.round(diff / 1000 / 60)
const hours = mins / 60
const days = hours / 60

console.log(mins, hours, days)

// converting timestamps into date objects

const timestamp = 1675938474990
console.log(new Date(timestamp))