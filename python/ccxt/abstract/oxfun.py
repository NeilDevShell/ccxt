from ccxt.base.types import Entry


class ImplicitAPI:
    public_get_v3_markets = publicGetV3Markets = Entry('v3/markets', 'public', 'GET', {'cost': 1})
    public_get_v3_assets = publicGetV3Assets = Entry('v3/assets', 'public', 'GET', {'cost': 1})
    public_get_v3_tickers = publicGetV3Tickers = Entry('v3/tickers', 'public', 'GET', {'cost': 1})
    public_get_v3_funding_estimates = publicGetV3FundingEstimates = Entry('v3/funding/estimates', 'public', 'GET', {'cost': 1})
    public_get_v3_candles = publicGetV3Candles = Entry('v3/candles', 'public', 'GET', {'cost': 1})
    public_get_v3_depth = publicGetV3Depth = Entry('v3/depth', 'public', 'GET', {'cost': 1})
    public_get_v3_markets_operational = publicGetV3MarketsOperational = Entry('v3/markets/operational', 'public', 'GET', {'cost': 1})
    public_get_v3_exchange_trades = publicGetV3ExchangeTrades = Entry('v3/exchange-trades', 'public', 'GET', {'cost': 1})
    public_get_v3_funding_rates = publicGetV3FundingRates = Entry('v3/funding/rates', 'public', 'GET', {'cost': 1})
    public_get_v3_leverage_tiers = publicGetV3LeverageTiers = Entry('v3/leverage/tiers', 'public', 'GET', {'cost': 1})
    private_get_v3_account = privateGetV3Account = Entry('v3/account', 'private', 'GET', {'cost': 1})
    private_get_v3_account_names = privateGetV3AccountNames = Entry('v3/account/names', 'private', 'GET', {'cost': 1})
    private_get_v3_wallet = privateGetV3Wallet = Entry('v3/wallet', 'private', 'GET', {'cost': 1})
    private_get_v3_transfer = privateGetV3Transfer = Entry('v3/transfer', 'private', 'GET', {'cost': 1})
    private_get_v3_balances = privateGetV3Balances = Entry('v3/balances', 'private', 'GET', {'cost': 1})
    private_get_v3_positions = privateGetV3Positions = Entry('v3/positions', 'private', 'GET', {'cost': 1})
    private_get_v3_funding = privateGetV3Funding = Entry('v3/funding', 'private', 'GET', {'cost': 1})
    private_get_v3_deposit_addresses = privateGetV3DepositAddresses = Entry('v3/deposit-addresses', 'private', 'GET', {'cost': 1})
    private_get_v3_deposit = privateGetV3Deposit = Entry('v3/deposit', 'private', 'GET', {'cost': 1})
    private_get_v3_withdrawal_addresses = privateGetV3WithdrawalAddresses = Entry('v3/withdrawal-addresses', 'private', 'GET', {'cost': 1})
    private_get_v3_withdrawal = privateGetV3Withdrawal = Entry('v3/withdrawal', 'private', 'GET', {'cost': 1})
    private_get_v3_withdrawal_fees = privateGetV3WithdrawalFees = Entry('v3/withdrawal-fees', 'private', 'GET', {'cost': 1})
    private_get_v3_orders_status = privateGetV3OrdersStatus = Entry('v3/orders/status', 'private', 'GET', {'cost': 1})
    private_get_v3_orders_working = privateGetV3OrdersWorking = Entry('v3/orders/working', 'private', 'GET', {'cost': 1})
    private_get_v3_trades = privateGetV3Trades = Entry('v3/trades', 'private', 'GET', {'cost': 1})
    private_post_v3_transfer = privatePostV3Transfer = Entry('v3/transfer', 'private', 'POST', {'cost': 1})
    private_post_v3_withdrawal = privatePostV3Withdrawal = Entry('v3/withdrawal', 'private', 'POST', {'cost': 1})
    private_post_v3_orders_place = privatePostV3OrdersPlace = Entry('v3/orders/place', 'private', 'POST', {'cost': 1})
    private_delete_v3_orders_cancel = privateDeleteV3OrdersCancel = Entry('v3/orders/cancel', 'private', 'DELETE', {'cost': 1})
    private_delete_v3_orders_cancel_all = privateDeleteV3OrdersCancelAll = Entry('v3/orders/cancel-all', 'private', 'DELETE', {'cost': 1})
