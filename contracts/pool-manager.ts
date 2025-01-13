export const PoolManager = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pool_address","type":"address"},{"indexed":true,"internalType":"address","name":"asset_token","type":"address"},{"indexed":true,"internalType":"address","name":"stable_token","type":"address"},{"indexed":false,"internalType":"int128","name":"current_tick","type":"int128"},{"indexed":false,"internalType":"uint256","name":"lot_size","type":"uint256"}],"name":"PoolInitialized","type":"event"},{"inputs":[{"internalType":"address","name":"pool_address","type":"address"},{"internalType":"address","name":"asset_token","type":"address"},{"internalType":"address","name":"stable_token","type":"address"},{"internalType":"address","name":"engine_manager","type":"address"},{"internalType":"address","name":"bitmap_manager","type":"address"},{"internalType":"int128","name":"current_tick","type":"int128"},{"internalType":"uint256","name":"lot_size","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"balance_manager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool_address","type":"address"},{"internalType":"uint256","name":"incoming_order_volume","type":"uint256"},{"internalType":"int128","name":"incoming_order_tick","type":"int128"},{"internalType":"bool","name":"incoming_order_is_buy","type":"bool"},{"internalType":"bool","name":"incoming_order_is_market","type":"bool"}],"name":"placeOrder","outputs":[],"stateMutability":"nonpayable","type":"function"}];
