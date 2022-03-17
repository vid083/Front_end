
    var result = n.reduce(function(acc,curr){
        if (operator == add){
            acc = acc + curr;
        }
        else if (operator == mul) {
            acc = acc * curr;
        }
        else if (operator == div) {
            acc = acc / curr;
        }
        else if (operator == pow) {
            acc = Math.pow(acc,curr);
        }
            return acc;
        },0);
        

    