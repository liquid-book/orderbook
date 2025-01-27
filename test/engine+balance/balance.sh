#!/bin/bash

source "$(dirname "$0")/../../.env"

# Check if the script is run with "dev" argument
if [ "$1" == "dev" ]; then
  private_key="$STYLUS_DEV_PK"
  rpc_url="$RPC_DEV_URL"
else
  private_key="$STYLUS_LOCAL_DEV_PK"
  rpc_url="$RPC_URL"
fi

echo "Checking balance for USER 2 Balance"
# Check balances for USER 2 after deposit (WETH)
echo "Checking balance for USER 2 after deposit (WETH)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getBalance(address,address)(uint256)" $USER_2_ADDRESS $MOCK_WETH_ADDRESS

# Check locked balances for USER 2 after deposit (WETH)
echo "Checking locked balance for USER 2 after deposit (WETH)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getLockedBalance(address,address,address)(uint256)" $USER_2_ADDRESS $POOL_ORDERBOOK_ADDRESS $MOCK_WETH_ADDRESS

# Check balances for USER 2 after deposit (USDC)
echo "Checking balance for USER 2 after deposit (USDC)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getBalance(address,address)(uint256)" $USER_2_ADDRESS $MOCK_USDC_ADDRESS

# Check locked balances for USER 2 after deposit (USDC)
echo "Checking locked balance for USER 2 after deposit (USDC)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getLockedBalance(address,address,address)(uint256)" $USER_2_ADDRESS $POOL_ORDERBOOK_ADDRESS $MOCK_USDC_ADDRESS

echo "Checking balance for USER 3 Balance"
# Check balances for USER 3 after deposit (WETH)
echo "Checking balance for USER 3 after deposit (WETH)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getBalance(address,address)(uint256)" $USER_3_ADDRESS $MOCK_WETH_ADDRESS

# Check locked balances for USER 3 after deposit (WETH)
echo "Checking locked balance for USER 3 after deposit (WETH)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getLockedBalance(address,address,address)(uint256)" $USER_3_ADDRESS $POOL_ORDERBOOK_ADDRESS $MOCK_WETH_ADDRESS

# Check balances for USER 3 after deposit (USDC)
echo "Checking balance for USER 3 after deposit (USDC)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getBalance(address,address)(uint256)" $USER_3_ADDRESS $MOCK_USDC_ADDRESS

# Check locked balances for USER 3 after deposit (USDC)
echo "Checking locked balance for USER 3 after deposit (USDC)..."
cast call --rpc-url $rpc_url $BALANCE_MANAGER_ADDRESS "getLockedBalance(address,address,address)(uint256)" $USER_3_ADDRESS $POOL_ORDERBOOK_ADDRESS $MOCK_USDC_ADDRESS

