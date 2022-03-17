const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "vidya", lastName: "ramagiri", age: 26},
]

//{ '26': 2, '50': 1, '75': 1 }

const output = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output);