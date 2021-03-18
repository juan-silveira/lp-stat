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
    const params = Dollars.DAIQ.Parameters;

    const calcPrice = twap => Math.min((twap - 1) / params.SupplyChangeDivisor, params.SupplyChangeLimit);
    
    const getEpochPeriod = async (DAO) => await DAO.nextEpochStart() - await DAO.currentEpochStart();

    const getTwap = async (DAO, epoch) => await DAO.twapAtEpoch(epoch) / 1e18;
    
    loadDollar(Dollars.DAIQ, calcPrice, getEpochPeriod, getTwap);
}