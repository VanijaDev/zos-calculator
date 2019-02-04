class CalculatorModel {
    constructor() {
        this.address = "0x3379a06bd2e69856937cbab1776ab3084af7f142";
        this.abi = [{
                "constant": true,
                "inputs": [],
                "name": "lastResult",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                        "name": "contractName",
                        "type": "string"
                    },
                    {
                        "name": "migrationId",
                        "type": "string"
                    }
                ],
                "name": "isMigrated",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "name": "_result",
                    "type": "uint256"
                }],
                "name": "Plus",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "name": "_result",
                    "type": "uint256"
                }],
                "name": "Minus",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "name": "_result",
                    "type": "uint256"
                }],
                "name": "Multiply",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                    "indexed": false,
                    "name": "_result",
                    "type": "uint256"
                }],
                "name": "Divide",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": false,
                        "name": "contractName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "migrationId",
                        "type": "string"
                    }
                ],
                "name": "Migrated",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_lastResult",
                    "type": "uint256"
                }],
                "name": "initialize",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_a",
                        "type": "uint256"
                    },
                    {
                        "name": "_b",
                        "type": "uint256"
                    }
                ],
                "name": "plus",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_a",
                        "type": "uint256"
                    },
                    {
                        "name": "_b",
                        "type": "uint256"
                    }
                ],
                "name": "minus",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_a",
                        "type": "uint256"
                    },
                    {
                        "name": "_b",
                        "type": "uint256"
                    }
                ],
                "name": "multiply",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "_a",
                        "type": "uint256"
                    },
                    {
                        "name": "_b",
                        "type": "uint256"
                    }
                ],
                "name": "divide",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
    }

    build() {
        return web3.eth.contract(this.abi).at(this.address);
    }
}