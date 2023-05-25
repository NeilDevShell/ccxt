import * as functions from './functions.js';
import { // eslint-disable-line object-curly-newline
ExchangeError, AuthenticationError, DDoSProtection, RequestTimeout, ExchangeNotAvailable, RateLimitExceeded } from "./errors.js";
import WsClient from './ws/WsClient.js';
import { Future } from './ws/Future.js';
import { OrderBook as WsOrderBook, IndexedOrderBook, CountedOrderBook } from './ws/OrderBook.js';
import { Market, Trade, Ticker, OHLCV, OHLCVC, Order, OrderBook, Balance, Balances, Dictionary, DepositAddressResponse, Currency, MinMax, IndexType, Int, OrderType, OrderSide } from './types';
export { Market, Trade, Fee, Ticker } from './types';
export default class Exchange {
    options: {
        [key: string]: any;
    };
    userAgents: any;
    headers: any;
    httpAgent: any;
    httpsAgent: any;
    agent: any;
    api: any;
    proxy: string;
    origin: string;
    minFundingAddressLength: number;
    substituteCommonCurrencyCodes: boolean;
    quoteJsonNumbers: boolean;
    number: NumberConstructor;
    handleContentTypeApplicationZip: boolean;
    reduceFees: boolean;
    fetchImplementation: any;
    AbortError: any;
    FetchError: any;
    validateServerSsl: boolean;
    validateClientSsl: boolean;
    timeout: number;
    verbose: boolean;
    debug: boolean;
    userAgent: {
        'User-Agent': string;
    } | false;
    twofa: any;
    apiKey: string;
    secret: string;
    uid: string;
    login: string;
    password: string;
    privateKey: string;
    walletAddress: string;
    token: string;
    balance: {};
    orderbooks: {};
    tickers: {};
    orders: any;
    trades: any;
    transactions: {};
    ohlcvs: any;
    myTrades: any;
    positions: {};
    urls: {
        logo?: string;
        api?: string | Dictionary<string>;
        test?: string | Dictionary<string>;
        www?: string;
        doc?: string[];
        api_management?: string;
        fees?: string;
        referral?: string;
    };
    requiresWeb3: boolean;
    requiresEddsa: boolean;
    precision: {
        amount: number | undefined;
        price: number | undefined;
    };
    enableLastJsonResponse: boolean;
    enableLastHttpResponse: boolean;
    enableLastResponseHeaders: boolean;
    last_http_response: any;
    last_json_response: any;
    last_response_headers: any;
    id: string;
    markets: Dictionary<any>;
    has: Dictionary<boolean | 'emulated'>;
    status: any;
    requiredCredentials: {
        apiKey: boolean;
        secret: boolean;
        uid: boolean;
        login: boolean;
        password: boolean;
        twofa: boolean;
        privateKey: boolean;
        walletAddress: boolean;
        token: boolean;
    };
    rateLimit: number;
    tokenBucket: any;
    throttler: any;
    enableRateLimit: boolean;
    httpExceptions: any;
    limits: {
        amount?: MinMax;
        cost?: MinMax;
        leverage?: MinMax;
        price?: MinMax;
    };
    fees: object;
    markets_by_id: Dictionary<any>;
    symbols: string[];
    ids: string[];
    currencies: Dictionary<Currency>;
    baseCurrencies: any;
    quoteCurrencies: any;
    currencies_by_id: any;
    codes: any;
    reloadingMarkets: any;
    marketsLoading: any;
    accounts: any;
    accountsById: any;
    commonCurrencies: any;
    hostname: string;
    precisionMode: number;
    paddingMode: any;
    exceptions: {};
    timeframes: Dictionary<number | string>;
    version: string;
    marketsByAltname: any;
    name: string;
    lastRestRequestTimestamp: number;
    targetAccount: any;
    stablePairs: {};
    clients: {};
    newUpdates: boolean;
    streaming: {};
    deepExtend: (...xs: any[]) => any;
    isNode: boolean;
    keys: {
        (o: object): string[];
        (o: {}): string[];
    };
    values: (x: any) => any[];
    extend: (...args: any[]) => any;
    clone: (x: any) => any;
    flatten: (x: any, out?: any[]) => any[];
    unique: (x: any) => any[];
    indexBy: (x: any, k: any, out?: {}) => {};
    sortBy: (array: any, key: any, descending?: boolean, direction?: number) => any;
    sortBy2: (array: any, key1: any, key2: any, descending?: boolean, direction?: number) => any;
    groupBy: (x: any, k: any, out?: {}) => {};
    aggregate: typeof functions.aggregate;
    uuid: (a?: any) => string;
    unCamelCase: (s: string) => string;
    precisionFromString: typeof functions.precisionFromString;
    capitalize: (s: string) => string;
    now: () => number;
    buildOHLCVC: (trades: Trade[], timeframe?: string, since?: number, limit?: number) => OHLCVC[];
    decimalToPrecision: (x: any, roundingMode: any, numPrecisionDigits: any, countingMode?: number, paddingMode?: number) => any;
    safeValue: (o: any, k: string | number, $default?: any) => any;
    safeValue2: (o: any, k1: string | number, k2: string | number, $default?: any) => any;
    safeString: (o: any, k: string | number, $default?: string) => string;
    safeString2: (o: any, k1: string | number, k2: string | number, $default?: string) => string;
    safeFloat: (o: any, k: string | number, $default?: number) => number;
    safeFloat2: (o: any, k1: string | number, k2: string | number, $default?: number) => number;
    seconds: () => number;
    milliseconds: () => number;
    binaryToBase16: (data: Uint8Array) => string;
    numberToBE: (n: number, padding: number) => Uint8Array;
    base16ToBinary: (str: string) => Uint8Array;
    iso8601: (timestamp: any) => string;
    omit: (x: any, ...args: any[]) => any;
    isJsonEncodedObject: (object: any) => boolean;
    safeInteger: (o: any, k: string | number, $default?: number) => number;
    sum: (...xs: any[]) => any;
    omitZero: typeof functions.omitZero;
    implodeParams: (string: any, params: any) => any;
    extractParams: (string: any) => any[];
    json: (data: any, params?: any) => string;
    vwap: typeof functions.vwap;
    merge: (target: any, ...args: any[]) => any;
    binaryConcat: typeof import("../static_dependencies/noble-curves/abstract/utils.js").concatBytes;
    hash: (request: import("../static_dependencies/noble-hashes/utils.js").Input, hash: {
        (message: import("../static_dependencies/noble-hashes/utils.js").Input): Uint8Array;
        outputLen: number;
        blockLen: number;
        create(): import("../static_dependencies/noble-hashes/utils.js").Hash<import("../static_dependencies/noble-hashes/utils.js").Hash<any>>;
    }, digest?: "binary" | "hex" | "base64") => any;
    arrayConcat: (a: any, b: any) => any;
    encode: (str: string) => Uint8Array;
    urlencode: (object: any) => string;
    hmac: (request: import("../static_dependencies/noble-hashes/utils.js").Input, secret: import("../static_dependencies/noble-hashes/utils.js").Input, hash: {
        (message: import("../static_dependencies/noble-hashes/utils.js").Input): Uint8Array;
        outputLen: number;
        blockLen: number;
        create(): import("../static_dependencies/noble-hashes/utils.js").Hash<import("../static_dependencies/noble-hashes/utils.js").Hash<any>>;
    }, digest?: "binary" | "hex" | "base64") => any;
    numberToString: typeof functions.numberToString;
    parseTimeframe: (timeframe: string) => number;
    safeInteger2: (o: any, k1: string | number, k2: string | number, $default?: number) => number;
    safeStringLower: (o: any, k: string | number, $default?: string) => string;
    parse8601: (x: any) => number;
    yyyymmdd: (timestamp: any, infix?: string) => string;
    safeStringUpper: (o: any, k: string | number, $default?: string) => string;
    safeTimestamp: (o: any, k: string | number, $default?: number) => number;
    binaryConcatArray: (arr: any) => Uint8Array;
    uuidv1: () => string;
    numberToLE: (n: number, padding: number) => Uint8Array;
    ymdhms: (timestamp: any, infix?: string) => string;
    yymmdd: (timestamp: any, infix?: string) => string;
    stringToBase64: (string: any) => string;
    decode: (data: Uint8Array) => string;
    uuid22: (a?: any) => string;
    safeIntegerProduct2: (o: any, k1: string | number, k2: string | number, $factor: number, $default?: number) => number;
    safeIntegerProduct: (o: any, k: string | number, $factor: number, $default?: number) => number;
    base58ToBinary: (str: string) => Uint8Array;
    base64ToBinary: (str: string) => Uint8Array;
    safeTimestamp2: (o: any, k1: string | number, k2: string | number, $default?: any) => number;
    rawencode: (object: any) => string;
    keysort: (x: any, out?: {}) => {};
    inArray: (needle: any, haystack: any) => any;
    safeStringLower2: (o: any, k1: string | number, k2: string | number, $default?: string) => string;
    safeStringUpper2: (o: any, k1: string | number, k2: string | number, $default?: string) => string;
    isEmpty: (object: any) => boolean;
    ordered: (x: any) => any;
    filterBy: (x: any, k: any, value?: any, out?: any[]) => any[];
    uuid16: (a?: any) => string;
    urlencodeWithArrayRepeat: (object: any) => string;
    microseconds: () => number;
    binaryToBase64: (data: Uint8Array) => string;
    strip: (s: string) => string;
    toArray: (object: any) => unknown[];
    safeFloatN: (o: any, k: (string | number)[], $default?: number) => number;
    safeIntegerN: (o: any, k: (string | number)[], $default?: number) => number;
    safeIntegerProductN: (o: any, k: (string | number)[], $factor: number, $default?: number) => number;
    safeTimestampN: (o: any, k: (string | number)[], $default?: number) => number;
    safeValueN: (o: any, k: (string | number)[], $default?: any) => any;
    safeStringN: (o: any, k: (string | number)[], $default?: string) => string;
    safeStringLowerN: (o: any, k: (string | number)[], $default?: string) => string;
    safeStringUpperN: (o: any, k: (string | number)[], $default?: string) => string;
    urlencodeNested: (object: any) => string;
    parseDate: (x: any) => number;
    ymd: (timestamp: any, infix: any, fullYear?: boolean) => string;
    isArray: (arg: any) => arg is any[];
    base64ToString: (string: any) => string;
    crc32: typeof functions.crc32;
    describe(): {
        id: any;
        name: any;
        countries: any;
        enableRateLimit: boolean;
        rateLimit: number;
        certified: boolean;
        pro: boolean;
        alias: boolean;
        has: {
            publicAPI: boolean;
            privateAPI: boolean;
            CORS: any;
            spot: any;
            margin: any;
            swap: any;
            future: any;
            option: any;
            addMargin: any;
            cancelAllOrders: any;
            cancelOrder: boolean;
            cancelOrders: any;
            createDepositAddress: any;
            createLimitOrder: boolean;
            createMarketOrder: boolean;
            createOrder: boolean;
            createPostOnlyOrder: any;
            createReduceOnlyOrder: any;
            createStopOrder: any;
            createStopLimitOrder: any;
            createStopMarketOrder: any;
            editOrder: string;
            fetchAccounts: any;
            fetchBalance: boolean;
            fetchBidsAsks: any;
            fetchBorrowInterest: any;
            fetchBorrowRate: any;
            fetchBorrowRateHistory: any;
            fetchBorrowRatesPerSymbol: any;
            fetchBorrowRates: any;
            fetchCanceledOrders: any;
            fetchClosedOrder: any;
            fetchClosedOrders: any;
            fetchCurrencies: string;
            fetchDeposit: any;
            fetchDepositAddress: any;
            fetchDepositAddresses: any;
            fetchDepositAddressesByNetwork: any;
            fetchDeposits: any;
            fetchTransactionFee: any;
            fetchTransactionFees: any;
            fetchFundingHistory: any;
            fetchFundingRate: any;
            fetchFundingRateHistory: any;
            fetchFundingRates: any;
            fetchIndexOHLCV: any;
            fetchL2OrderBook: boolean;
            fetchLastPrices: any;
            fetchLedger: any;
            fetchLedgerEntry: any;
            fetchLeverageTiers: any;
            fetchMarketLeverageTiers: any;
            fetchMarkets: boolean;
            fetchMarkOHLCV: any;
            fetchMyTrades: any;
            fetchOHLCV: string;
            fetchOpenInterest: any;
            fetchOpenInterestHistory: any;
            fetchOpenOrder: any;
            fetchOpenOrders: any;
            fetchOrder: any;
            fetchOrderBook: boolean;
            fetchOrderBooks: any;
            fetchOrders: any;
            fetchOrderTrades: any;
            fetchPermissions: any;
            fetchPosition: any;
            fetchPositions: any;
            fetchPositionsRisk: any;
            fetchPremiumIndexOHLCV: any;
            fetchStatus: string;
            fetchTicker: boolean;
            fetchTickers: any;
            fetchTime: any;
            fetchTrades: boolean;
            fetchTradingFee: any;
            fetchTradingFees: any;
            fetchTradingLimits: any;
            fetchTransactions: any;
            fetchTransfers: any;
            fetchWithdrawAddresses: any;
            fetchWithdrawal: any;
            fetchWithdrawals: any;
            reduceMargin: any;
            setLeverage: any;
            setMargin: any;
            setMarginMode: any;
            setPositionMode: any;
            signIn: any;
            transfer: any;
            withdraw: any;
        };
        urls: {
            logo: any;
            api: any;
            www: any;
            doc: any;
            fees: any;
        };
        api: any;
        requiredCredentials: {
            apiKey: boolean;
            secret: boolean;
            uid: boolean;
            login: boolean;
            password: boolean;
            twofa: boolean;
            privateKey: boolean;
            walletAddress: boolean;
            token: boolean;
        };
        markets: any;
        currencies: {};
        timeframes: any;
        fees: {
            trading: {
                tierBased: any;
                percentage: any;
                taker: any;
                maker: any;
            };
            funding: {
                tierBased: any;
                percentage: any;
                withdraw: {};
                deposit: {};
            };
        };
        status: {
            status: string;
            updated: any;
            eta: any;
            url: any;
        };
        exceptions: any;
        httpExceptions: {
            '422': typeof ExchangeError;
            '418': typeof DDoSProtection;
            '429': typeof RateLimitExceeded;
            '404': typeof ExchangeNotAvailable;
            '409': typeof ExchangeNotAvailable;
            '410': typeof ExchangeNotAvailable;
            '451': typeof ExchangeNotAvailable;
            '500': typeof ExchangeNotAvailable;
            '501': typeof ExchangeNotAvailable;
            '502': typeof ExchangeNotAvailable;
            '520': typeof ExchangeNotAvailable;
            '521': typeof ExchangeNotAvailable;
            '522': typeof ExchangeNotAvailable;
            '525': typeof ExchangeNotAvailable;
            '526': typeof ExchangeNotAvailable;
            '400': typeof ExchangeNotAvailable;
            '403': typeof ExchangeNotAvailable;
            '405': typeof ExchangeNotAvailable;
            '503': typeof ExchangeNotAvailable;
            '530': typeof ExchangeNotAvailable;
            '408': typeof RequestTimeout;
            '504': typeof RequestTimeout;
            '401': typeof AuthenticationError;
            '407': typeof AuthenticationError;
            '511': typeof AuthenticationError;
        };
        commonCurrencies: {
            XBT: string;
            BCC: string;
            BCHABC: string;
            BCHSV: string;
        };
        precisionMode: number;
        paddingMode: number;
        limits: {
            leverage: {
                min: any;
                max: any;
            };
            amount: {
                min: any;
                max: any;
            };
            price: {
                min: any;
                max: any;
            };
            cost: {
                min: any;
                max: any;
            };
        };
    };
    constructor(userConfig?: {});
    encodeURIComponent(...args: any[]): string;
    checkRequiredVersion(requiredVersion: any, error?: boolean): boolean;
    checkAddress(address: any): any;
    initRestRateLimiter(): void;
    throttle(cost?: any): any;
    setSandboxMode(enabled: any): void;
    defineRestApiEndpoint(methodName: any, uppercaseMethod: any, lowercaseMethod: any, camelcaseMethod: any, path: any, paths: any, config?: {}): void;
    defineRestApi(api: any, methodName: any, paths?: any[]): void;
    log(...args: any[]): void;
    fetch(url: any, method?: string, headers?: any, body?: any): Promise<any>;
    parseJson(jsonString: any): any;
    getResponseHeaders(response: any): {};
    handleRestResponse(response: any, url: any, method?: string, requestHeaders?: any, requestBody?: any): any;
    onRestResponse(statusCode: any, statusText: any, url: any, method: any, responseHeaders: any, responseBody: any, requestHeaders: any, requestBody: any): any;
    onJsonResponse(responseBody: any): any;
    loadMarketsHelper(reload?: boolean, params?: {}): Promise<Dictionary<any>>;
    loadMarkets(reload?: boolean, params?: {}): Promise<Dictionary<Market>>;
    fetchCurrencies(params?: {}): Promise<unknown>;
    fetchMarkets(params?: {}): Promise<Market[]>;
    checkRequiredDependencies(): void;
    parseNumber(value: any, d?: number): number;
    checkOrderArguments(market: any, type: any, side: any, amount: any, price: any, params: any): void;
    handleHttpStatusCode(code: any, reason: any, url: any, method: any, body: any): void;
    remove0xPrefix(hexData: any): any;
    findTimeframe(timeframe: any, timeframes?: any): string;
    spawn(method: any, ...args: any[]): Future;
    delay(timeout: any, method: any, ...args: any[]): void;
    orderBook(snapshot?: {}, depth?: number): WsOrderBook;
    indexedOrderBook(snapshot?: {}, depth?: number): IndexedOrderBook;
    countedOrderBook(snapshot?: {}, depth?: number): CountedOrderBook;
    handleMessage(client: any, message: any): void;
    client(url: any): WsClient;
    watch(url: any, messageHash: any, message?: any, subscribeHash?: any, subscription?: any): any;
    onConnected(client: any, message?: any): void;
    onError(client: any, error: any): void;
    onClose(client: any, error: any): void;
    close(): Promise<void>;
    handleDelta(bookside: any, delta: any, nonce?: any): void;
    loadOrderBook(client: any, messageHash: any, symbol: any, limit?: any, params?: {}): Promise<void>;
    handleDeltas(orderbook: any, deltas: any, nonce?: any): void;
    getCacheIndex(orderbook: any, deltas: any): number;
    convertToBigInt(value: string): bigint;
    valueIsDefined(value: any): boolean;
    arraySlice(array: any, first: any, second?: any): any;
    filterByLimit(array: object[], limit?: Int, key?: IndexType): any;
    filterBySinceLimit(array: object[], since?: Int, limit?: Int, key?: IndexType): any;
    filterByValueSinceLimit(array: object[], field: IndexType, value?: any, since?: Int, limit?: Int, key?: string): any;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {};
    fetchAccounts(params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchDepositAddresses(codes?: string[], params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchTime(params?: {}): Promise<number>;
    fetchTradingLimits(symbols?: string[], params?: {}): Promise<any>;
    parseTicker(ticker: object, market?: any): Ticker;
    parseDepositAddress(depositAddress: any, currency?: any): void;
    parseTrade(trade: object, market?: any): Trade;
    parseTransaction(transaction: any, currency?: any): void;
    parseTransfer(transfer: any, currency?: any): void;
    parseAccount(account: any): void;
    parseLedgerEntry(item: any, currency?: any): void;
    parseOrder(order: any, market?: any): Order;
    fetchBorrowRates(params?: {}): Promise<any>;
    parseMarketLeverageTiers(info: any, market?: any): void;
    fetchLeverageTiers(symbols?: string[], params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): void;
    parseFundingRateHistory(info: any, market?: any): void;
    parseBorrowInterest(info: any, market?: any): void;
    fetchFundingRates(symbols?: string[], params?: {}): Promise<any>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<any>;
    createDepositAddress(code: string, params?: {}): Promise<DepositAddressResponse>;
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    parseToInt(number: any): number;
    getDefaultOptions(): {
        defaultNetworkCodeReplacements: {
            ETH: {
                ERC20: string;
            };
            TRX: {
                TRC20: string;
            };
            CRO: {
                CRC20: string;
            };
        };
    };
    safeLedgerEntry(entry: object, currency?: object): {
        id: string;
        timestamp: number;
        datetime: string;
        direction: string;
        account: string;
        referenceId: string;
        referenceAccount: string;
        type: string;
        currency: any;
        amount: number;
        before: number;
        after: number;
        status: string;
        fee: any;
        info: object;
    };
    safeCurrencyStructure(currency: object): any;
    setMarkets(markets: any, currencies?: any): Dictionary<any>;
    safeBalance(balance: object): Balances;
    safeOrder(order: object, market?: object): any;
    parseOrders(orders: object, market?: object, since?: Int, limit?: Int, params?: {}): Order[];
    calculateFee(symbol: string, type: string, side: string, amount: number, price: number, takerOrMaker?: string, params?: {}): {
        type: string;
        currency: any;
        rate: number;
        cost: number;
    };
    safeTrade(trade: object, market?: object): Trade;
    reduceFeesByCurrency(fees: any): any[];
    safeTicker(ticker: object, market?: any): Ticker;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    watchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    convertTradingViewToOHLCV(ohlcvs: any, timestamp?: string, open?: string, high?: string, low?: string, close?: string, volume?: string, ms?: boolean): any[];
    convertOHLCVToTradingView(ohlcvs: any, timestamp?: string, open?: string, high?: string, low?: string, close?: string, volume?: string, ms?: boolean): {};
    marketIds(symbols: any): any;
    marketSymbols(symbols: any): any;
    marketCodes(codes: any): any;
    parseBidsAsks(bidasks: any, priceKey?: IndexType, amountKey?: IndexType): any[];
    fetchL2OrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    filterBySymbol(objects: any, symbol?: string): any;
    parseOHLCV(ohlcv: any, market?: any): any;
    getNetwork(network: string, code: string): string;
    networkCodeToId(networkCode: any, currencyCode?: any): string;
    networkIdToCode(networkId: any, currencyCode?: any): string;
    handleNetworkCodeAndParams(params: any): any[];
    defaultNetworkCode(currencyCode: any): any;
    selectNetworkCodeFromUnifiedNetworks(currencyCode: any, networkCode: any, indexedNetworkEntries: any): any;
    selectNetworkIdFromRawNetworks(currencyCode: any, networkCode: any, indexedNetworkEntries: any): any;
    selectNetworkKeyFromNetworks(currencyCode: any, networkCode: any, indexedNetworkEntries: any, isIndexedByUnifiedNetworkCode?: boolean): any;
    safeNumber2(dictionary: any, key1: any, key2: any, d?: any): number;
    parseOrderBook(orderbook: object, symbol: string, timestamp?: number, bidsKey?: string, asksKey?: string, priceKey?: IndexType, amountKey?: IndexType): OrderBook;
    parseOHLCVs(ohlcvs: object[], market?: any, timeframe?: string, since?: Int, limit?: Int): OHLCV[];
    parseLeverageTiers(response: any, symbols?: string[], marketIdKey?: any): {};
    loadTradingLimits(symbols?: string[], reload?: boolean, params?: {}): Promise<Dictionary<any>>;
    safePosition(position: any): any;
    parsePositions(positions: any, symbols?: string[], params?: {}): any;
    parseAccounts(accounts: any, params?: {}): any[];
    parseTrades(trades: any, market?: object, since?: Int, limit?: Int, params?: {}): Trade[];
    parseTransactions(transactions: any, currency?: object, since?: Int, limit?: Int, params?: {}): any;
    parseTransfers(transfers: any, currency?: object, since?: Int, limit?: Int, params?: {}): any;
    parseLedger(data: any, currency?: object, since?: Int, limit?: Int, params?: {}): any;
    nonce(): number;
    setHeaders(headers: any): any;
    marketId(symbol: string): string;
    symbol(symbol: string): string;
    resolvePath(path: any, params: any): any[];
    filterByArray(objects: any, key: IndexType, values?: any, indexed?: boolean): any;
    fetch2(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any, config?: {}): Promise<any>;
    request(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any, config?: {}): Promise<any>;
    loadAccounts(reload?: boolean, params?: {}): Promise<any>;
    fetchOHLCVC(symbol: any, timeframe?: string, since?: any, limit?: Int, params?: {}): Promise<OHLCVC[]>;
    parseTradingViewOHLCV(ohlcvs: any, market?: any, timeframe?: string, since?: Int, limit?: Int): OHLCV[];
    editLimitBuyOrder(id: any, symbol: any, amount: any, price?: any, params?: {}): Promise<Order>;
    editLimitSellOrder(id: any, symbol: any, amount: any, price?: any, params?: {}): Promise<Order>;
    editLimitOrder(id: any, symbol: any, side: any, amount: any, price?: any, params?: {}): Promise<Order>;
    editOrder(id: string, symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<Order>;
    fetchPermissions(params?: {}): Promise<void>;
    fetchPosition(symbol: string, params?: {}): Promise<any>;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    fetchPositionsRisk(symbols?: string[], params?: {}): Promise<void>;
    fetchBidsAsks(symbols?: string[], params?: {}): Promise<void>;
    parseBidAsk(bidask: any, priceKey?: IndexType, amountKey?: IndexType): number[];
    safeCurrency(currencyId?: string, currency?: any): any;
    safeMarket(marketId?: any, market?: any, delimiter?: any, marketType?: any): any;
    checkRequiredCredentials(error?: boolean): boolean;
    oath(): string;
    fetchBalance(params?: {}): Promise<Balances>;
    watchBalance(params?: {}): Promise<Balances>;
    fetchPartialBalance(part: any, params?: {}): Promise<Balance>;
    fetchFreeBalance(params?: {}): Promise<Balance>;
    fetchUsedBalance(params?: {}): Promise<Balance>;
    fetchTotalBalance(params?: {}): Promise<Balance>;
    fetchStatus(params?: {}): Promise<any>;
    fetchFundingFee(code: string, params?: {}): Promise<any>;
    fetchFundingFees(codes?: string[], params?: {}): Promise<any>;
    fetchTransactionFee(code: string, params?: {}): Promise<any>;
    fetchTransactionFees(codes?: string[], params?: {}): Promise<any>;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    fetchDepositWithdrawFee(code: string, params?: {}): Promise<any>;
    getSupportedMapping(key: any, mapping?: {}): any;
    fetchBorrowRate(code: string, params?: {}): Promise<any>;
    handleOptionAndParams(params: any, methodName: any, optionName: any, defaultValue?: any): any[];
    handleOption(methodName: any, optionName: any, defaultValue?: any): any;
    handleMarketTypeAndParams(methodName: any, market?: any, params?: {}): any;
    handleSubTypeAndParams(methodName: any, market?: any, params?: {}, defaultValue?: any): any[];
    handleMarginModeAndParams(methodName: any, params?: {}, defaultValue?: any): any[];
    throwExactlyMatchedException(exact: any, string: any, message: any): void;
    throwBroadlyMatchedException(broad: any, string: any, message: any): void;
    findBroadlyMatchedKey(broad: any, string: any): string;
    handleErrors(statusCode: any, statusText: any, url: any, method: any, responseHeaders: any, responseBody: any, response: any, requestHeaders: any, requestBody: any): any;
    calculateRateLimiterCost(api: any, method: any, path: any, params: any, config?: {}): any;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    watchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<Dictionary<Ticker>>;
    watchTickers(symbols?: string[], params?: {}): Promise<Dictionary<Ticker>>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOrderStatus(id: string, symbol?: string, params?: {}): Promise<string>;
    fetchUnifiedOrder(order: any, params?: {}): Promise<Order>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    cancelUnifiedOrder(order: any, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTransactions(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDeposits(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLastPrice(price: any, market?: any): any;
    fetchDepositAddress(code: string, params?: {}): Promise<any>;
    account(): Balance;
    commonCurrencyCode(currency: string): string;
    currency(code: any): any;
    market(symbol: string): any;
    handleWithdrawTagAndParams(tag: any, params: any): any;
    createLimitOrder(symbol: string, side: OrderSide, amount: any, price: any, params?: {}): Promise<Order>;
    createMarketOrder(symbol: string, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    createLimitBuyOrder(symbol: string, amount: any, price: any, params?: {}): Promise<Order>;
    createLimitSellOrder(symbol: string, amount: any, price: any, params?: {}): Promise<Order>;
    createMarketBuyOrder(symbol: string, amount: any, params?: {}): Promise<Order>;
    createMarketSellOrder(symbol: string, amount: any, params?: {}): Promise<Order>;
    costToPrecision(symbol: string, cost: any): any;
    priceToPrecision(symbol: string, price: any): string;
    amountToPrecision(symbol: string, amount: any): any;
    feeToPrecision(symbol: string, fee: any): any;
    currencyToPrecision(code: string, fee: any, networkCode?: any): any;
    isTickPrecision(): boolean;
    isDecimalPrecision(): boolean;
    isSignificantPrecision(): boolean;
    safeNumber(obj: object, key: IndexType, defaultNumber?: number): number;
    safeNumberN(obj: object, arr: IndexType[], defaultNumber?: number): number;
    parsePrecision(precision?: string): string;
    loadTimeDifference(params?: {}): Promise<any>;
    implodeHostname(url: string): any;
    fetchMarketLeverageTiers(symbol: string, params?: {}): Promise<any>;
    createPostOnlyOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price: any, params?: {}): Promise<Order>;
    createReduceOnlyOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price: any, params?: {}): Promise<Order>;
    createStopOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, stopPrice?: any, params?: {}): Promise<Order>;
    createStopLimitOrder(symbol: string, side: OrderSide, amount: any, price: any, stopPrice: any, params?: {}): Promise<Order>;
    createStopMarketOrder(symbol: string, side: OrderSide, amount: any, stopPrice: any, params?: {}): Promise<Order>;
    safeCurrencyCode(currencyId?: string, currency?: any): any;
    filterBySymbolSinceLimit(array: any, symbol?: string, since?: Int, limit?: Int): any;
    filterByCurrencySinceLimit(array: any, code?: any, since?: Int, limit?: Int): any;
    parseLastPrices(pricesData: any, symbols?: string[], params?: {}): any;
    parseTickers(tickers: any, symbols?: string[], params?: {}): any;
    parseDepositAddresses(addresses: any, codes?: string[], indexed?: boolean, params?: {}): {};
    parseBorrowInterests(response: any, market?: any): any[];
    parseFundingRateHistories(response: any, market?: any, since?: Int, limit?: Int): any;
    safeSymbol(marketId: any, market?: any, delimiter?: any, marketType?: any): any;
    parseFundingRate(contract: string, market?: any): void;
    parseFundingRates(response: any, market?: any): {};
    isTriggerOrder(params: any): any[];
    isPostOnly(isMarketOrder: boolean, exchangeSpecificParam: any, params?: {}): boolean;
    handlePostOnly(isMarketOrder: boolean, exchangeSpecificPostOnlyOption: boolean, params?: any): any[];
    fetchLastPrices(symbols?: string[], params?: {}): Promise<void>;
    fetchTradingFees(params?: {}): Promise<any>;
    fetchTradingFee(symbol: string, params?: {}): Promise<any>;
    parseOpenInterest(interest: any, market?: any): any;
    parseOpenInterests(response: any, market?: any, since?: Int, limit?: Int): any;
    fetchFundingRate(symbol: string, params?: {}): Promise<any>;
    fetchMarkOHLCV(symbol: any, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchIndexOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchPremiumIndexOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    handleTimeInForce(params?: {}): string;
    convertTypeToAccount(account: any): any;
    checkRequiredArgument(methodName: any, argument: any, argumentName: any, options?: any[]): void;
    checkRequiredMarginArgument(methodName: string, symbol: string, marginMode: string): void;
    checkRequiredSymbol(methodName: string, symbol: string): void;
    parseDepositWithdrawFees(response: any, codes?: string[], currencyIdKey?: any): any;
    parseDepositWithdrawFee(fee: any, currency?: any): any;
    depositWithdrawFee(info: any): any;
    assignDefaultDepositWithdrawFees(fee: any, currency?: any): any;
    parseIncome(info: any, market?: any): void;
    parseIncomes(incomes: any, market?: any, since?: Int, limit?: Int): any;
    getMarketFromSymbols(symbols?: string[]): any;
}
export { Exchange, };
