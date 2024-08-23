#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t welocom to faria usman - currency converter\n")) ;


// difine the list of countries and their exchanges rate
let exchangeRate : any = {
    "USD": 1, //BASE CURRENCY
    "EUR" : 0.9, //EUROPEAN currency
    "JYP" : 113, //JAPENESS currency
    "CAD" : 1.3, //CANADIAN dollar
    "AUD" : 1.65, //AUSTRALIAN dollar
    "PAK" : 280,  //PAKISTAN rupess
}

let userans = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "select the currency to convert from",
        choices : ["USD" , "EUR", "JYP" , "CAD", "AUD" , "PAK"],
    },
    {
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into",
        choices : ["USD" , "EUR", "JYP" , "CAD", "AUD" , "PAK"]
    },
    {
        name:"amount",
        type: "input",
        message: "enter the amount to convert"
    }
]);

// currency converter formula
let from_amount = exchangeRate[userans.from_currency];
let to_amount = exchangeRate[userans.to_currency];
let amount =userans.amount

// formula
let Baseamount = amount/from_amount
let convertedamounnt = Baseamount * to_amount

console.log(`converted amount = ${convertedamounnt}`);
