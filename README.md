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
- **Balance Manager**: Manages user balances
  - Handles locking and transferring balances for buyers and sellers
- **Pool Manager**: Manages the selection and operation of pools for orders
  - Handles pool selection and related balance operations
  - Supports adding new pools
- **Pool Orderbook**: Manages the orderbook within a pool
  - Configures and maintains the pool

## 📁 Project Structure

```
├── abis/                     # ABI definitions
├── balance-manager/          # Balance management
├── bitmap/                   # Bitmap management
├── engine/                   # Core matching engine
├── matcher/                  # Process matching orders
├── order/                    # Order management
├── tick/                     # Tick management
├── pool-manager/             # Pool management
├── pool-orderbook/           # Pool order book
├── deploy.sh                 # Deployment script
└── README.md                 # Documentation
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

- Balance Manager=[https://sepolia.arbiscan.io/address/0x83111037a6cdb7eb61fac556b6e068ee2b1ae721](https://sepolia.arbiscan.io/address/0x83111037a6cdb7eb61fac556b6e068ee2b1ae721)
- Engine=[https://sepolia.arbiscan.io/address/0x926e4160bee7275a038fc9a62e7a5e77ce77dde1](https://sepolia.arbiscan.io/address/0x926e4160bee7275a038fc9a62e7a5e77ce77dde1)
- Matcher=[https://sepolia.arbiscan.io/address/0x1750a6eb50c8d1f50a929858fb331bd644ae8feb](https://sepolia.arbiscan.io/address/0x1750a6eb50c8d1f50a929858fb331bd644ae8feb)
- Bitmap Manager=[https://sepolia.arbiscan.io/address/0xa108a153fbb1457ec80fe651424372f0d20caf47](https://sepolia.arbiscan.io/address/0xa108a153fbb1457ec80fe651424372f0d20caf47)
- Tick Manager=[https://sepolia.arbiscan.io/address/0xf0e9e8fcadadd430e653de90da5b2a76f30869b2](https://sepolia.arbiscan.io/address/0xf0e9e8fcadadd430e653de90da5b2a76f30869b2)
- Order Manager=[https://sepolia.arbiscan.io/address/0xd70802098d2716fc0e0879397fddbfb77983ab78](https://sepolia.arbiscan.io/address/0xd70802098d2716fc0e0879397fddbfb77983ab78)
- Pool Manager=[https://sepolia.arbiscan.io/address/0x7136afbf5ad730c1def672ea93e22cc080000185](https://sepolia.arbiscan.io/address/0x7136afbf5ad730c1def672ea93e22cc080000185)
- Pool Orderbook=[https://sepolia.arbiscan.io/address/0xbf14aaf42f960350cccc1903cbfd8a95cee9c154](https://sepolia.arbiscan.io/address/0xbf14aaf42f960350cccc1903cbfd8a95cee9c154)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
