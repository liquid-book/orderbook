export const EngineABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int128",
          "name": "tick",
          "type": "int128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "order_index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "is_buy",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "is_market",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "volume",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "remaining_volume",
          "type": "uint256"
        }
      ],
      "name": "PlaceOrder",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tick_manager_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "order_manager_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "bitmap_manager_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "matcher_manager_address",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int128",
          "name": "incoming_order_tick",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "incoming_order_volume",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "incoming_order_user",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "incoming_order_is_buy",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "incoming_order_is_market",
          "type": "bool"
        }
      ],
      "name": "placeOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "int128",
          "name": "",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;