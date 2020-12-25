let prompt = require('prompt-sync')({sigint: true});
 let total_money= prompt("Total amount of money you have ? :");
 let bitcoin= prompt("Bitcoin price :");
 let ethereum= prompt ("Ethereum price :");
 let litecoin= prompt("Litecoin price:");
 
 total_money = parseFloat(total_money);
 bitcoin = parseFloat(bitcoin-48);
 ethereum = parseFloat(ethereum-21);
 litecoin = parseFloat(litecoin);
 
 

console.log(`With 100$ you can buy:  ${bitcoin} Bitcoins  ${ethereum} Ethereum  ${litecoin} Litecoin`)