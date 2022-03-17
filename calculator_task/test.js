if (operator == add){
    var result = n.reduce(function(acc,curr){
        acc = acc + curr;
        return acc;
    },0);
    }

    else if (operator == mul) {
        var result = n.reduce(function(acc,curr){
        acc = acc * curr;
        return acc;
        },);
    }

    else if (operator == div) {
        var result = n.reduce(function(acc,curr){
    acc = acc / curr;
    return acc;
    },);
    }

    else if (operator == pow) {
        var result = n.reduce(function(acc,curr){
        acc = Math.pow(acc,curr);
        return acc;
        },);
    }