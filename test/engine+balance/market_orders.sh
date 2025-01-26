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

sum=0
count=0

process_gas() {
    local output=$1
    local gas=$(echo "$output" | grep "^cumulativeGasUsed" | awk '{print $2}')
    
    echo "$output"

    if [ ! -z "$gas" ]; then
        if [[ $gas == 0x* ]]; then
            gas=$((gas))
        fi
        sum=$((sum + gas))
        count=$((count + 1))
        echo "Gas used: $gas"
    fi
}

# Set operator
echo "Setting operator of user 2.."
cast send --rpc-url $rpc_url --private-key $USER_2_PK $BALANCE_MANAGER_ADDRESS "setOperator(address,bool)" $POOL_ORDERBOOK_ADDRESS true  > /dev/null 2>&1

echo "Setting operator of user 3.."
cast send --rpc-url $rpc_url --private-key $USER_3_PK $BALANCE_MANAGER_ADDRESS "setOperator(address,bool)" $POOL_ORDERBOOK_ADDRESS true  > /dev/null 2>&1

echo "Market orders..."

echo "Place sell order..."
output=$(cast send --gas-limit 8000000 --rpc-url $rpc_url --private-key $USER_2_PK $POOL_MANAGER_ADDRESS "placeOrder(address,int128,uint256,bool,bool)" $POOL_ORDERBOOK_ADDRESS 81200 10000000000000000 false true 2>&1)
process_gas "$output"

echo "Place buy order..."
output=$(cast send --gas-limit 8000000 --rpc-url $rpc_url --private-key $USER_3_PK $POOL_MANAGER_ADDRESS "placeOrder(address,int128,uint256,bool,bool)" $POOL_ORDERBOOK_ADDRESS 81200 10000000000000000 true true 2>&1)
process_gas "$output"
