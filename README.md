# Liquidbook Contracts

LiquidBook is a decentralized orderbook implementation written in Rust using Arbitrum Stylus technology. This project implements an efficient on-chain orderbook system.

## 📋 Overview

The project consists of several core components

- **ABIS**: Application Binary Interface 
- **Bitmap**: Memory-efficient order tracking system (inspired by Uniswap's bitmap implementation)
- **Engine**: Handles order placement and matching logic
  - Places new orders
  - Searches for matching orders
  - Forwards orders to the orderbook if no immediate matches are found
- **Matcher**: Handles the execution of matched orders
- **Order**: Efficient order data management
  - Direct slot storage for optimal gas efficiency
  - Tracks all tick-related order data
- **Tick**: Price tick management implementation
  - Manages current tick information
  - Stores tick-specific data:
    - Total size at each tick
    - Buy/Sell designation
    - Number of orders per tick


## 📁 Project Structure

```
├── abis/           # ABI definitions
├── bitmap/         # Bitmap management
├── engine/         # Core matching engine
├── matcher/        # Process matching orders
├── order/          # Order management
├── tick/           # Tick management
├── deploy.sh       # Deployment script
└── README.md       # Documentation
```

## 🛠️ Technical Stack

- **Language**: Rust
- **Deployment**: Arbitrum Stylus for EVM compatibility
- **Target**: WebAssembly
- **Network**: Any EVM-compatible chain with Stylus support

## 🚀 Development Setup

### Prerequisites

Please follow the Arbitrum Stylus Development Environment Setup Guide to set up your development environment. [https://docs.arbitrum.io/stylus/quickstart#setting-up-your-development-environment]

### Building

1. Clone the repository:
```bash
git clone https://github.com/liquid-book/orderbook.git
cd orderbook
```

2. Build the project:
```bash
cargo build
```

3. Deploy using the provided script:
```bash
./deploy.sh
```

## ⭐ Features

- Fully on-chain orderbook implementation
- Written in Rust for enhanced performance
- Efficient order matching algorithm
- Optimized data structures
- Secure transaction handling
- Price tick management
- Bitmap-based order tracking


## 📍 Deployed Contracts

- Engine=[https://sepolia.arbiscan.io/address/0x43bfc1eb838b0984284bff4f45f5fee7ee5e4c0c](https://sepolia.arbiscan.io/address/0x43bfc1eb838b0984284bff4f45f5fee7ee5e4c0c)
- Matcher=[https://sepolia.arbiscan.io/address/0x25c75f0143dfce41a3071d597aafbdc31ca5a913](https://sepolia.arbiscan.io/address/0x25c75f0143dfce41a3071d597aafbdc31ca5a913)
- Bitmap Manager=[https://sepolia.arbiscan.io/address/0x62b08044904c239a40f881e56ba51e56d2db6bd3](https://sepolia.arbiscan.io/address/0x62b08044904c239a40f881e56ba51e56d2db6bd3)
- Tick Manager=[https://sepolia.arbiscan.io/address/0xc8ca0685bd25ea1187efae70c2516a2b4a4573a2](https://sepolia.arbiscan.io/address/0xc8ca0685bd25ea1187efae70c2516a2b4a4573a2)
- Order Manager=[https://sepolia.arbiscan.io/address/0x48cc7aec39f9cd70d3e052f18f80d3a6e0de4e34](https://sepolia.arbiscan.io/address/0x48cc7aec39f9cd70d3e052f18f80d3a6e0de4e34)
- Pool Manager=[https://sepolia.arbiscan.io/address/0x98b3ad3c472e950c7b626d1767a7b8e13faa4e9e](https://sepolia.arbiscan.io/address/0x98b3ad3c472e950c7b626d1767a7b8e13faa4e9e)
- Pool Orderbook=[https://sepolia.arbiscan.io/address/0x9ef3148194d50d51a1da8c0d9c9bbb16905a14a7](https://sepolia.arbiscan.io/address/0x9ef3148194d50d51a1da8c0d9c9bbb16905a14a7)
- Balance Manager=[https://sepolia.arbiscan.io/address/0xa5fc98cb45a18673a61b9237cb14128b33f95d7a](https://sepolia.arbiscan.io/address/0xa5fc98cb45a18673a61b9237cb14128b33f95d7a)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.