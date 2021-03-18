/*!
* LP STAT
* Retrieve a complete information about farms in a DeFi protocol
* https://lap-stat.web.app
* @author Juan Silveira -- https://github.com/juan-silveira
* Copyright 2021. MIT Licensed.
*/

const fetch = require('node-fetch');

const lookUpTokenPrices = async function(id_array) {
    let ids = id_array.join('%2C')
    const url = 'https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=' + ids + '&vs_currencies=usd'
    const res = await fetch(url);
    const text = await res.text();
    return JSON.parse(text);
}

function getParameterCaseInsensitive(object, key) {
    return object[Object.keys(object)
        .find(k => k.toLowerCase() === key.toLowerCase())
    ];
}

module.exports = { lookUpTokenPrices, getParameterCaseInsensitive };