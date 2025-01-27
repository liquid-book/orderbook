import { createConfig } from "ponder";
import { http } from "viem";

import { EngineABI } from "./abis/EngineABI";
import { OrderManagerABI } from "./abis/OrderManagerABI";
import { TickManagerABI } from "./abis/TickManagerABI";
import { BitmapManagerABI } from "./abis/BitmapManagerABI";
import { MatcherABI } from "./abis/MatcherABI";

import dotenv from "dotenv";
import { PoolManagerABI } from "./abis/pool-manager";
import { PoolOrderbookABI } from "./abis/pool-orderbook";
import { BalanceManagerABI } from "./abis/balance-manager";
dotenv.config();

export default createConfig({
	networks: {
		arbitrumSepolia: {
			chainId: 421614,
			transport: http(process.env.PONDER_RPC_URL_1),
		},
	},
	contracts: {
		PoolManager: {
			network: "arbitrumSepolia",
			abi: PoolManagerABI,
			address: process.env.POOL_MANAGER_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.POOL_MANAGER_BLOCK),
		},
		PoolOrderbook: {
			network: "arbitrumSepolia",
			abi: PoolOrderbookABI,
			address: process.env.POOL_ORDERBOOK_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.POOL_ORDERBOOK_BLOCK),
		},
		BalanceManager: {
			network: "arbitrumSepolia",
			abi: BalanceManagerABI,
			address: process.env.BALANCE_MANAGER_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.BALANCE_MANAGER_BLOCK),
		},
		Engine: {
			network: "arbitrumSepolia",
			abi: EngineABI,
			address: process.env.ENGINE_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.ENGINE_BLOCK),
		},
		TickManager: {
			network: "arbitrumSepolia",
			abi: TickManagerABI,
			address: process.env.TICK_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.TICK_BLOCK),
		},
		OrderManager: {
			network: "arbitrumSepolia",
			abi: OrderManagerABI,
			address: process.env.ORDER_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.ORDER_BLOCK),
		},
		BitmapManager: {
			network: "arbitrumSepolia",
			abi: BitmapManagerABI,
			address: process.env.BITMAP_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.BITMAP_BLOCK),
		},
		Matcher: {
			network: "arbitrumSepolia",
			abi: MatcherABI,
			address: process.env.MATCHER_ADDRESS as `0x${string}`,
			startBlock: Number(process.env.MATCHER_BLOCK),
		},
	},
});
