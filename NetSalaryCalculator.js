//Variables used in the program are declared here
let grossSalary, taxRate, nhif, nssf, t_tax, netSalary, totalnetsalary;

// This takes the basic salary as the input before execution
const basicSalary = prompt("Enter basic salary:");
//This converts the input into a valid number
const parsedSalary = parseFloat(basicSalary);

// This checks if the entered input is a valid number or else returns an error
if (isNaN(parsedSalary)) {
    console.log("Invalid input. Please enter a valid number.");
} else {

// This calls the function of the inputed salary
    calculateNetSalary(parsedSalary);

    // This displays the output after execution
    console.log("Gross Salary: " + grossSalary);
    console.log("Tax: " + t_tax);
    console.log("NHIF: " + nhif);
    console.log("NSSF: " + nssf);
    console.log("Total Net Salary: " + totalnetsalary);
}
//This is a function that calculates the tax and all the deductions
function calculateNetSalary(basicSalary) {
    const allowances = 2000;
    grossSalary = basicSalary + allowances;
    const housingLevy = 0.015 * grossSalary;
    nssf = 0.06 * grossSalary;
// Calculates nssf deductions
    if (nssf > 6000) {
        nssf = 6000;
    }
//Calculates the tax to be deducted according to the gross salary
    if (grossSalary <= 24000) {
        taxRate = 0.100;
    } else if (grossSalary <= 32333) {
        taxRate = 0.250;
    } else if (grossSalary <= 500000) {
        taxRate = 0.300;
    } else if (grossSalary <= 800000) {
        taxRate = 0.325;
    } else {
        taxRate = 0.350;
    }
//Calculates the nhif amount to be deducted according to the gross salary
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
//Declares the variables of taxableSalary, contributionBenefit and relief
    const taxableSalary = grossSalary - (housingLevy + nssf + nhif);
    const ContributionBenefit = 500;
    const relief = 1080;

    // Calculates the  netSalary
    t_tax = taxRate * grossSalary;
    netSalary = taxableSalary - t_tax;
    totalnetsalary = netSalary + (relief + ContributionBenefit);
}