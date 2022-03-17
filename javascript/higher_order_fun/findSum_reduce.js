const arr = [1,2,3,4];
// sum or max

/*
// traditional way
function findSum(arr){
    let sum = 0;
    for (let i =0; i < arr.length; i++){
    sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

*/
// using reduce
const output = arr.reduce(function (sum, arr){
    console.log("arr"+ " "+ arr+" " +"sum"+" "+sum) ;
    sum = sum+arr;
    
    return sum;
},);
console.log(output) 