// dates & times

const now = new Date()

console.log(now)

// years, months, day, times

console.log('getFullYear:', now.getFullYear())
console.log('getFullMonth:', now.getMonth())
console.log('getFullDate:', now.getDate())
console.log('getFullDay:', now.getDay())
console.log('getFullHours:', now.getHours())
console.log('getFullMinutes:', now.getMinutes())
console.log('getFullSeconds:', now.getSeconds())

// timestamps

console.log('timestamp:', now.getTime())

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())