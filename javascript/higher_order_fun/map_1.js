const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "vidya", lastName: "ramagiri", age: 26},
]

// list of full names
//[ 'akshay saini', 'donald trump', 'elon musk', 'vidya ramagiri' ]

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output)
