// regular function

// const calcArea = function(radius){
//     return 3.14 * radius ** 2
// }

// arrow function
// const calcArea2 = radius => 3.14 * radius ** 2
//
// console.log(`Area is : ${calcArea(5)}`)
// console.log(`Area is : ${calcArea2(5)}`)

// practise arrow functions
const greet = function() {
    return 'hello, world'
}
const greetArrow = () => 'hello, world'

console.log(greet())
console.log(greetArrow())

const bill = function(products, tax){
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}

const billArrow = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total
}

console.log(bill([10, 15, 30], 0.2))