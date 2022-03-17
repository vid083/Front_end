const arr = [1,2,3,4,5]
 
/*
function binary(x){
    return x.toString(2);
}

//arrow functions - doubling
const output1 = arr.map((x) => x*2);
console.log(output1)
*/
//higher order functions - thripling
const output2 = arr.map(function triple(x){
    return x * 3;
});
console.log(output2)

/*
// finding binary
const output3 = arr.map(binary)

console.log(output3)
*/