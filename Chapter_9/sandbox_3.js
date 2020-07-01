// reduce method

// const scores = [10, 20, 60, 40, 70, 90, 30]

// const results = scores.reduce((acc, current) => {
//     if (current > 50){
//         acc++
//     }
//     return acc
// }, 0)
//
// console.log(results)

const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

const marioScores = scores.reduce((total, current) => {
    if (current.player === 'mario') {
        total += current.score
    }
    return total
}, 0)

console.log(marioScores)