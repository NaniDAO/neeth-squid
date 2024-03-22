export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "AllowanceOverflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AllowanceUnderflow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientAllowance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InsufficientBalance",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPermit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PermitExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TotalSupplyOverflow",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "spender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "DOMAIN_SEPARATOR",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "addStake",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bool",
                "name": "old"
            },
            {
                "type": "uint32",
                "name": "unstakeDelaySec"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "allowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "spender"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "daoFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint128",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "neeth"
            }
        ]
    },
    {
        "type": "function",
        "name": "depositTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "neeth"
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nonces",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "permit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "uint8",
                "name": "v"
            },
            {
                "type": "bytes32",
                "name": "r"
            },
            {
                "type": "bytes32",
                "name": "s"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "postOp",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "bytes",
                "name": "context"
            },
            {
                "type": "uint256",
                "name": "actualGasCost"
            },
            {
                "type": "uint256",
                "name": "actualUserOpFeePerGas"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "postOp",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "bytes",
                "name": "context"
            },
            {
                "type": "uint256",
                "name": "actualGasCost"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint128",
                "name": "_daoFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPostOpCost",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint128",
                "name": "postOpCost"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "unlockStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "old"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validatePaymasterUserOp",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "userOp",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "bytes32",
                        "name": "accountGasLimits"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "bytes32",
                        "name": "gasFees"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": ""
            },
            {
                "type": "uint256",
                "name": "maxCost"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "validatePaymasterUserOp",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "userOp",
                "components": [
                    {
                        "type": "address",
                        "name": "sender"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "bytes",
                        "name": "initCode"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    },
                    {
                        "type": "uint256",
                        "name": "callGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "verificationGasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "preVerificationGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxFeePerGas"
                    },
                    {
                        "type": "uint256",
                        "name": "maxPriorityFeePerGas"
                    },
                    {
                        "type": "bytes",
                        "name": "paymasterAndData"
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": ""
            },
            {
                "type": "uint256",
                "name": "maxCost"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "old"
            },
            {
                "type": "address",
                "name": "withdrawAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "old"
            },
            {
                "type": "address",
                "name": "withdrawAddress"
            },
            {
                "type": "uint256",
                "name": "withdrawAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
