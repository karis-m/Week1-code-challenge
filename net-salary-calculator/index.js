//Function that calculates the net salary of an employee per month
function netSalary(){
    // Input of the basic salary and  all benefits
    let basicSalary = prompt("Enter your basic salary:");
    let benefits = prompt("Enter your total allowances:");
    const personalRelief = 2400;
    let tax;
    //Calculate total taxable income
    const taxablePay = basicSalary + benefits;
    //Checks the tax category of the employee salary and calculates the PAYE.
    const PAYE = function CalculateTax(){
        if(taxablePay <= 24000){
            tax = taxablePay * 0.1 - personalRelief;
            return tax;
        }
        else if(taxablePay > 24000 && taxablePay < 32,333){
            tax = taxablePay * 0.25 - personalRelief;
            return tax;
        }
        else{
            tax = taxablePay * 0.3 - personalRelief;
            return tax;
        }

    }
    
//function to determine NHIF contribution
    function calculateNHIF(){
        if(basicSalary <= 5999){
            return 150;
        }
        else if(basicSalary <= 7999){
            return 300;
        }
        else if(basicSalary <= 11999){
            return 400;
        }        
        else if(basicSalary <= 14999){
            return 500;
        }        
        else if(basicSalary <= 19999){
            return 600;
        }        
        else if(basicSalary <= 24999){
            return 750;
        }        
        else if(basicSalary <= 29999){
            return 850;
        }        
        else if(basicSalary <= 34999){
            return 900;
        }        
        else if(basicSalary <= 39999){
            return 950;
        }
        else if(basicSalary <= 44999){
            return 1000;
        }
        else if(basicSalary <= 49999){
            return 1100;
        }
        else if(basicSalary <= 59999){
            return 1200;
        }
        else if(basicSalary <= 69999){
            return 1300;
        }
        else if(basicSalary <= 79999){
            return 1400;
        }
        else if(basicSalary <= 89999){
            return 1500;
        }
        else if(basicSalary <= 99999){
            return 1600;
        } 
        else{
            return 1700;
        }
        
    }
    // the old NSSF Act stipulates a standard charge of 400 per employee.
    let nssfContribution = 400;
    let NHIF = calculateNHIF();
    //Total Deductions is as follows
    let netSalaryPay = taxablePay - (PAYE + NHIF + nssfContribution); 
    console.log(netSalaryPay);
    
}