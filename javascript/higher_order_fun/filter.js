const arr = [1,2,3,4,5]

// filter odd values
function isOdd(x){
    return x%2;
}
const output = arr.filter(isOdd);
console.log(output);

/*
//filter even values
const output1 = arr.filter(function isEven{
    return x%2 === 0;
});
console.log(output1)


// greater than four
const output2 = arr.filter((x) => x > 4);
console.log(output2)
*/
