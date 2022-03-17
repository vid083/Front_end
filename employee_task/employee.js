//var hra_value = document.getElementById("b").value;
//var basicSalary = this.parentElement.parentElement.childNodes[3].childNodes[1].value;

function hra(that){
    var hra_value = that.value;
    that.parentElement.parentElement.getElementByClassName('c')[0].value = hra_value;

    var medicalAllowance = hra_value/3;
    that.parentElement.parentElement.getElementByClassName('d')[0].value = medicalAllowance;

    var conveyanceAllowance = hra_value/2;
    that.parentElement.parentElement.getElementByClassName('e')[0].value = conveyanceAllowance;

    var telephoneAllowance = hra_value/1.5;
    that.parentElement.parentElement.getElementByClassName('f')[0].value = telephoneAllowance;

    var otherAllowance = 0.025 * hra_value;
    that.parentElement.parentElement.getElementByClassName('g')[0].value = otherAllowance;

    var pf = 0.25 * hra_value;
    that.parentElement.parentElement.getElementByClassName('h')[0].value = pf;

    var professionalTax = 200;
    that.parentElement.parentElement.getElementByClassName('i')[0].value = professionalTax;

    var incomeTax = 1.04 *(hra_value*12);
    that.parentElement.parentElement.getElementByClassName('j')[0].value = incomeTax;
    
    var allowances = (hra_value + hra_value + medicalAllowance + conveyanceAllowance + telephoneAllowance + otherAllowance) ;
    var deductions = pf + professionalTax + incomeTax;
    that.parentElement.parentElement.getElementByClassName('k')[0].value = parseFloat(allowances)-parseFloat(deductions);

}


