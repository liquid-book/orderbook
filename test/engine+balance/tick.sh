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

# Get current tick
echo "Getting current tick..."
current_tick=$(cast call --rpc-url $rpc_url $BITMAP_ADDRESS "getCurrentTick()(int128)")

echo "Current tick: $current_tick"

# Check top N best ticks for buy
echo "Checking top N best ticks for buy..."
best_ticks_buy=$(cast call --rpc-url $rpc_url $BITMAP_ADDRESS "topNBestTicks(bool)(int128[])" true)

echo "Top N best ticks for buy: $best_ticks_buy"

# Check top N best ticks for sell
echo "Checking top N best ticks for sell..."
best_ticks_sell=$(cast call --rpc-url $rpc_url $BITMAP_ADDRESS "topNBestTicks(bool)(int128[])" false)

echo "Top N best ticks for sell: $best_ticks_sell"

# Convert tick to price for buy
echo "Converting tick to price..."
price_buy=$(cast call --rpc-url $rpc_url $BITMAP_ADDRESS "convertFromTickToPrice(int128)(uint256)" 81260)

echo "Price at tick 81260: $price_buy"

