console.log("Hello World")


console.log("Hello World")//Single line
/*
Multi line comment
*/

var a = 100//var a = 100
console.log(a, typeof a)
// var a = "Web700"
// console.log(a, typeof a)
// var a = true
// console.log(a, typeof a)
// a =  function(){ 100 }//null {}
// console.log(a, typeof a)

let b = 200
const c = 30

b = 200 //valid
// c = 300 //invalid

console.log(`A 1: ${a}`)
console.log(`B 1: ${b}`)
function add(x, y){
    a = 1000
    let b = 2000
    console.log(`A f() ${a}`) //"A f() " + a
    console.log(`B f() ${b}`)
}
add()
console.log(`A 2: ${a}`)
console.log(`B 2: ${b}`)