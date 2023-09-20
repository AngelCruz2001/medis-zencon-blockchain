import { ethers } from "ethers";
import { medisAbi } from "./medisAbi";
import { zscSigner } from "ethersjs-nomo-plugins/dist/ethersjs_provider";


// Dirección del contrato de Medis
const MedisContractAddress = "0xbDc9cE5eB4AD9A7a847a6ecc806eB435d51C7c97";

export async function getInfo() {
    console.log('Fetching Info...')
    const contract = new ethers.Contract(MedisContractAddress, medisAbi, zscSigner);
    var data = await contract.getData();
    data = JSON.parse(data);
    return data;
}

export async function saveData(data){
    console.log('Saving info to contract')
    const contract = new ethers.Contract(MedisContractAddress, medisAbi, zscSigner);
    const tx = await contract.saveData(data,'2021-05-20');
    console.log('x')
}
