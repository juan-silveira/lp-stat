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
    const params = Contracts.PEN.Parameters;
    const calcPrice = (twap, totalCoupons, totalRedeemable) => calculateEmptySetChange(params, totalCoupons, totalRedeemable, twap)
    await loadDollar(Contracts.PEN, calcPrice);
}