const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "vidya", lastName: "ramagiri", age: 26},
]


// [ 'akshay', 'vidya' ]
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output) 

/*
// not executed
const output = users.reduce(function(acc,curr){
    if (acc[curr.age] > 30){
    }
    return curr.map((x) => x.firstName) 
}, []);
console.log(output)
*/
