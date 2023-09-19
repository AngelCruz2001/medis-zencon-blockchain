export const medisAbi = [
    {
        "inputs": [],
        "name": "getData",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "patient",
        "outputs": [
            {
                "internalType": "string",
                "name": "Data",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "LastModify",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_Data",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_LastModify",
                "type": "string"
            }
        ],
        "name": "saveData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]