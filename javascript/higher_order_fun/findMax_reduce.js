arr = [1,2,3,4,5]

//max

const output = arr.reduce(function(max,curr){
    if (curr > max){
        max = curr;
    }
    return max;
}, 0);

console.log(output);