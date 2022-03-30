

import ccxt from '../../ccxt.js';
import log from 'ololog';

const symbol = 'ETH/BTC'
const exchanges = [ 'coinbasepro', 'hitbtc2', 'poloniex' ]

;(async () => {

    const result = await Promise.all (exchanges.map (async id => {

        const exchange = new ccxt[id] ({ 'enableRateLimit': true })
        const ticker = await exchange.fetchTicker (symbol)
        return exchange.extend ({ 'exchange': id }, ticker)

    }))

    log (result);

}) ()