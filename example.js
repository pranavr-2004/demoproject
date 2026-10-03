// let area="BTM"
// console.log(area)

// //re-initialisation

// area="HSR Layout"
// console.log(area)

let pincode="670142"

//using let re-declaration is not possible

// let pincode="670141"
console.log(pincode)



// const 
// only initialisation is possible,declaration cannot be done.we have to do it together

const area="BTM"
console.log(area)

const name="bengalore"
{
    console.log("inside the block ",name)
}

// {
//     const c="thejus"
// }
// console.log("value outside the block ",c)

// we can access the value which is initialised and declared outside the block and we can access it inside the block.but we cannot initialise a value inside a block and access it outside the block.


const a="abc"
function display(){
    console.log("value inside the function ",a)
}
display()

// we can access the value which is defined outside the block and can access it inside the function.


//-> hoisting

// console.log(a)
// var a=15
// if we give a statement like this we will get an error named undefined in var

//-> temperoroy dead zone(TDZ)

// console.log(a)
// let a=20
// if we give a statement like this using let we will get an error(refferenceError)

// 

// console.log(a)
// const a=25
// if we give a statement like this we will get error(referrenceError)