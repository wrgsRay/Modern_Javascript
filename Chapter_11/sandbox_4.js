const now = new Date()

// console.log(dateFns.isToday(now))

// formatting options
// reference: https://date-fns.org/v2.14.0/docs/format
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMM').toLocaleUpperCase())
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'Do'))
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'))

// comparing dates
const before = new Date('February 1 2019 12:00:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))