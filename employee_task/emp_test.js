var basicSalary = document.getElementById('b').value;
/*function salary(basicSalary){*/
function hra(basicSalary){
    var hra = basicSalary;

    
    var medicalAllowance = basicSalary/3;
    var conveyanceAllowance = basicSalary/2;
    var telephoneAllowance = basicSalary/1.5;
    var otherAllowance = 0.025 * basicSalary;
    var pf = 0.25 * basicSalary;
    var professionalTax = 200;
    var incomeTax = 1.04 * (basicSalary*12);
    
    var x = basicSalary + hra + medicalAllowance + conveyanceAllowance + telephoneAllowance + otherAllowance ;
    var y = pf + professionalTax + incomeTax ;
    var netSalary = x-y ;
    return netSalary;
}
const output = salary(basicSalary);
console.log(output);