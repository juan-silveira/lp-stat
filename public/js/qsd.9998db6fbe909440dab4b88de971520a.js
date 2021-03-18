/*!
* LP STAT
* Retrieve a complete information about farms in a DeFi protocol
* https://lap-stat.web.app
* @author Juan Silveira -- https://github.com/juan-silveira
* Copyright 2021. MIT Licensed.
*/

$(function() {
    consoleInit();
    start(main);
});

async function main() {  
    const params = Dollars.QSD.Parameters;
    const calcPrice = twap => Math.min(twap - 1, params.SupplyChangeLimit);
    loadDollar(Dollars.QSD, calcPrice);
}