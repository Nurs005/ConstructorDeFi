const preMintInput = document.getElementById('premintAmount');
const radioDeflation = document.getElementById('deflation');
const radioInflation = document.getElementById('inflation');
const connectWallet = document.getElementById('connectWallet');
let currentAddress = document.getElementById('addressOfWallet');


let DeflationABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "DeployDiflation", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let DeflationAddress = '0xa829459b895A8CcF79c255E4904e3D8b0eBfbe5B';
let InfaltionABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "InflationDeployed", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let InfaltionAddress = '0xAF323a2546ed8247145FE11A699120438E407f43';
let BurnableDeflationABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "DeployBurnableDiflation", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let BurnableAddress = '0x35A70A4B15efACbF665Acd0C4f64f0cd93ED3F81';
let BurnableInflationABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "BurnableInflationDeployed", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let BurnableInflationAddress = '0x6F40431A36494279410e6190A2059e6f50aD100a';
let PauseableDeflationBurnableABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "DeployPauseableBurnableDiflation", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let PauseableDeflationBurnableAddress = '0xe4dC223a44680bC34891193f8E3b852d454de101';
let PauseableInflationABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "PausableInflationDeployed", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let PauseableInflationAddress = '0xed5C99A58bC4549EC185bc7b4F027FF529d67DFF';
let PauseableInflationBurnableABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "PausableMintBurnDeployed", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let PauseableInflationBurnableAddress = '0x0210265B21e138f4516720cdc1353Cb735Afa667';
let PauseableDeflationABI = [[{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "instance", "type": "address" }], "name": "DeployPauseableDiflation", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "address", "name": "initialOwner", "type": "address" }], "name": "deploy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]];
let PauseableDeflationAddress = '0xD9e3300a00A987e846Ac94C7dE88826E6887FaBd';
let web3 = new Web3(window.ethereum);
let userAddress;

let contractDeflation = new web3.eth.Contract(DeflationABI, DeflationAddress);
let contractInfaltion = new web3.eth.Contract(InfaltionABI, InfaltionAddress);
let contractBurnableDeflation = new web3.eth.Contract(BurnableDeflationABI, BurnableAddress);
let contractBurnableInflation = new web3.eth.Contract(BurnableInflationABI, BurnableInflationAddress);
let contractPauseableDeflationBurnable = new web3.eth.Contract(PauseableDeflationBurnableABI, PauseableDeflationBurnableAddress)
let contractPauseableInflation = new web3.eth.Contract(PauseableInflationABI, PauseableInflationAddress);
let contractPauseableInflationBurnable = new web3.eth.Contract(PauseableInflationBurnableABI, PauseableInflationBurnableAddress);
let contractPauseableDeflation = new web3.eth.Contract(PauseableDeflationABI, PauseableDeflationAddress);


function updatePreMintVisibility() {
    if (radioDeflation.checked) {
        preMintInput.style.display = 'block';
    } else {
        preMintInput.style.display = 'none';
    }
}

async function connect() {
    console.log("Работает");
    if (window.ethereum) {
        window.ethereum.on('disconnect', (error) => {
            console.error('Потеряно соединение с провайдером Ethereum:', error);
        });
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        userAddress = accounts[0];
        web3 = new Web3(Web3.givenProvider);
        currentAddress.innerHTML = userAddress;
        currentAddress.style.display = 'block';

        console.log(userAddress);

        contractDeflation.setProvider(Web3.givenProvider);
        contractInfaltion.setProvider(Web3.givenProvider);
        contractBurnableDeflation.setProvider(Web3.givenProvider);
        contractBurnableInflation.setProvider(Web3.givenProvider);
        contractPauseableDeflationBurnable.setProvider(Web3.givenProvider);
        contractPauseableInflation.setProvider(Web3.givenProvider);
        contractPauseableInflationBurnable.setProvider(Web3.givenProvider);
        contractPauseableDeflation.setProvider(Web3.givenProvider);

        // contractFactoryOfErc20.setProvider(Web3.givenProvider);
        // proxyTodo.setProvider(Web3.givenProvider);

        // contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        console.log("Please install Metamask");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save').addEventListener('click', function (event) {
        event.preventDefault();


        const nameOfToken = document.getElementById('nameOfToken').value;
        const symbolOfToken = document.getElementById('symbolOfToken').value;
        const premintAmount = document.getElementById('premintAmount').value;
        const typeOfToken = document.querySelector('input[name="size"]:checked').value;
        console.log(typeOfToken);
        const features = document.getElementById('extensions').value;
        const features2 = document.getElementById('extenxion2').value;
        console.log(features);
        console.log(features2);

        let contractIndex = determineContractIndex(typeOfToken, features, features2);
        console.log(contractIndex);

        callContract(contractIndex, nameOfToken, symbolOfToken, premintAmount);
    });
});

function determineContractIndex(typeOfToken, features, features2) {
    let index = 0;
    if (typeOfToken == 2 && features == 1 && features2 == 3) {
        //Deflation token
        index = 1;
    }
    else if (typeOfToken == 1 && features == 1 && features2 == 3) {
        //Infaltion token
        index = 2;
    }
    else if (typeOfToken == 2 && features == 2 && features2 == 3) {
        // deflation burnable token
        index = 3;
    }
    else if (typeOfToken == 1 && features == 2 && features2 == 3) {
        // inflation burnable token 
        index = 4;
    }
    else if (typeOfToken == 2 && features == 1 && features2 == 4) {
        // diflation pauseable token
        index = 5;
    }
    else if (typeOfToken == 1 && features == 1 && features2 == 4) {
        // infaltion pauseable token
        index = 6;
    }
    else if (typeOfToken == 2 && features == 2 && features2 == 4) {
        //diflation pauseable burnable
        index = 7;
    }
    else if (typeOfToken == 1 && features == 2 && features2 == 4) {
        //infaltion pauseable burnable
        index = 8;
    }
    return index;
}

async function callContract(contractIndex, nameOfToken, symbolOfToken, premintAmount) {
    if (contractIndex == 1) {
        //deflation
        await contractDeflation.methods.deploy(premintAmount, nameOfToken, symbolOfToken).send({
            from: userAddress,
            gasPrice: '5044200000'
        }).on('receipt', (receipt) => {
            const deployedContractAddress = receipt.events.DeployDiflation.returnValues[0];
            console.log('Staking contract deployed at address:', deployedContractAddress);
            let link = document.getElementById("link");

            let newLink = link.getAttribute("href") + deployedContractAddress;

            link.setAttribute("href", newLink);

            const nameOFContract = 'Diflation';

            const sourceCodeID = document.getElementById('101')
            const sourceCode = sourceCodeID.value
        })
        if (contractIndex == 2) {
            //infaltion
            await contractInfaltion.methods.deploy(nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.InflationDeployed.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);

                const sourceCodeID = document.getElementById('102')
                const sourceCode = sourceCodeID.value
                const nameOFContract = 'Inflation';
            })
        }
        if (contractIndex == 3) {
            // deflation burnable token
            await contractBurnableDeflation.methods.deploy(premintAmount, nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.DeployBurnableDiflation.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);

                const sourceCode = document.getElementById('103').value
                const nameOFContract = 'BurnableDiflation';
            })
        }
        if (contractIndex == 4) {
            // inflation burnable token 
            await contractBurnableInflation.methods.deploy(nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.BurnableInflationDeployed.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);

                const sourceCode = document.getElementById('104').value;
                const nameOFContract = 'BurnableInflation';
            })
        }
        if (contractIndex == 5) {
            // diflation pauseable token
            await contractPauseableDeflation.methods.deploy(premintAmount, nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.DeployPauseableDiflation.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);

                const sourceCode = document.getElementById('105').value;
                const nameOFContract = 'PauseableDiflation';
            })
        }
        if (contractIndex == 6) {
            // infaltion pauseable token
            await contractPauseableInflation.methods.deploy(nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.InflationDeployed.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);

                const sourceCode = document.getElementById('106').value;
                const nameOFContract = 'PausableInflation';
            })

        }
        if (contractIndex == 7) {
            //diflation pauseable burnable
            await contractPauseableDeflationBurnable.methods.deploy(premintAmount, nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.DeployPauseableBurnableDiflation.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);
                const sourceCode = document.getElementById('107').value;
                const nameOFContract = 'PausableDiflationBurn';
            })
        }
        if (contractIndex == 8) {
            //infaltion pauseable burnable
            await contractPauseableInflationBurnable.methods.deploy(nameOfToken, symbolOfToken, userAddress).send({
                from: userAddress,
                gasPrice: '5044200000'
            }).on('receipt', (receipt) => {
                const deployedContractAddress = receipt.events.PausableMintBurnDeployed.returnValues[0];
                console.log('Staking contract deployed at address:', deployedContractAddress);
                let link = document.getElementById("link");

                let newLink = link.getAttribute("href") + deployedContractAddress;

                link.setAttribute("href", newLink);
                const sourceCode = document.getElementById('108').value;
                const nameOFContract = 'PausableMintBurn';
            })

        }
    }
}



radioDeflation.addEventListener('change', updatePreMintVisibility);
radioInflation.addEventListener('change', updatePreMintVisibility);
connectWallet.addEventListener('click', connect);

