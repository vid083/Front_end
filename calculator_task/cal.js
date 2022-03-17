var value = '2,3,A, ,4,';
        console.log(value);

        var n = value.split(",").filter(Number).map(Number);
        console.log(n);
        
        //var n = n1.map(Number);
        //console.log(n);

        //users.filter((x) => x.age < 30).map((x) => x.firstName);
        
//if (operator == add){


    var operator1 = n.reduce(function(acc,curr){
        acc = acc + curr;
        return acc;
    },);
    console.log(operator1);


    //else if (operator == mul) {
        var operator2 = n.reduce(function(acc,curr){
        acc = acc * curr;
        return acc;
        },);
        console.log(operator2);


    //else if (operator == div) {
        var operator3 = n.reduce(function(acc,curr){
    acc = acc / curr;
    return acc;
    },);
    console.log(operator3)


    //else if (operator == pow) {
        var operator4 = n.reduce(function(acc,curr){
        acc = Math.pow(acc,curr);
        return acc;
        },);
        console.log(operator4)
