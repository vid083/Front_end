//var basicSalary = document.getElementById("b").value;
//var basicSalary = this.parentElement.parentElement.childNodes[3].childNodes[1].value;

function hra(basicSalary){
    var hra_value = basicSalary.value;
//var tr_obj=basicSalary.parentElement.parentElement;
//tr_obj.getElementByClassName("c")[0].value = hra_value;
basicSalary.parentElement.parentElement.getElementsByClassName('c')[0].value=hra_value;
    
    var medicalAllowance = hra_value/3;
    basicSalary.parentElement.parentElement.getElementsByClassName('d')[0].value = medicalAllowance;

    var conveyanceAllowance = basicSalary.value/2;
    basicSalary.parentElement.parentElement.getElementsByClassName('e')[0].value = conveyanceAllowance;

    var telephoneAllowance = basicSalary.value/1.5;
    basicSalary.parentElement.parentElement.getElementsByClassName('f')[0].value = telephoneAllowance;

    var otherAllowance = 0.025 * basicSalary.value;
    basicSalary.parentElement.parentElement.getElementsByClassName('g')[0].value = otherAllowance;

    var pf = 0.25 * basicSalary.value;
    basicSalary.parentElement.parentElement.getElementsByClassName('h')[0].value = pf;

    var professionalTax = 200;
    basicSalary.parentElement.parentElement.getElementsByClassName('i')[0].value = 200;

    var incomeTax = 1.04 *(basicSalary.value*12);
    basicSalary.parentElement.parentElement.getElementsByClassName('j')[0].value = incomeTax;
    
    var allowances = (basicSalary.value + hra_value + medicalAllowance + conveyanceAllowance + telephoneAllowance + otherAllowance) ;
    var deductions = pf + professionalTax + incomeTax;
    basicSalary.parentElement.parentElement.getElementsByClassName('k')[0].value = parseFloat(allowances)-parseFloat(deductions);

}



