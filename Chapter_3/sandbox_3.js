// if statements
// const age = 25
//
// if(age > 20){
//     console.log('You are over 20')
// }
//
// const ninjas = ['shaun', 'ryuji', 'chun-li', 'yoshi']
//
// if(ninjas.length > 3){
//     console.log('That\'s a lot of ninjas')
// }

// logical operators - OR || and AND &&

// const password = 'pass@22223'
//
// if(password.length >= 8 && password.includes('@')){
//     console.log('That password is long enough')
// } else if(password.length === 4){
//     console.log('4 long')
// } else {
//     console.log('Too short')
// }

// logical NOT (!)
// let user = false
//
// if(!user){
//     console.log('false')
// }

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10]
// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue
//     }
//     console.log(`Your score: ${scores[i]}`)
//
//     if(scores[i] === 100){
//         console.log('Grats, you got 100')
//         break
//     }
// }

// switch statements
const grade = 'D'

switch(grade){
    case 'A':
        console.log('You\'ve got an A')
        break
    case 'B':
        console.log('You\'ve got an B')
        break
    case 'C':
        console.log('You\'ve got an C')
        break
    case 'D':
        console.log('You\'ve got an D')
        break
    case 'E':
        console.log('You\'ve got an E')
        break
    default:
        console.log('invalid')
        break
}