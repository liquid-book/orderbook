export const BalanceManagerABI = [
	{ inputs: [], name: "AlreadyInitialized", type: "error" },
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "uint256", name: "", type: "uint256" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		name: "InsufficientBalance",
		type: "error",
	},
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		name: "TransferError",
		type: "error",
	},
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "address", name: "", type: "address" },
		],
		name: "UnauthorizedOperator",
		type: "error",
	},
	{ inputs: [], name: "ZeroAmount", type: "error" },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "user", type: "address" },
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "BalanceUpdated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "user", type: "address" },
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Deposit",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "user", type: "address" },
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "OperatorSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "user", type: "address" },
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Withdrawal",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "deposit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "user", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "getBalance",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "user", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
		],
		name: "getLockedBalance",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "user", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "lock",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setOperator",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "sender", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "address", name: "receiver", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transferLocked",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "user", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "unlock",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "token", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const;
