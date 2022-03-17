const myAwesomeArray = [1, 2, 3, 4, 5]

myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//Uncaught TypeError: Cannot read property 'reduce' of undefined

myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
//return value: 55