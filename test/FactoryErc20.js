const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Deploy', function () {
    async function deploy() {
        const [owner, other] = await ethers.getSigners();
        const factoryContractFactory = await ethers.getContractFactory('FactoryOfERC20Tokens');
        const factory = await factoryContractFactory.deploy();
        const inflation = await ethers.getContractFactory('Inflation');
        const deflation = await ethers.getContractFactory('Diflation');
        const burnableInflation = await ethers.getContractFactory('BurnableInflation');
        const burnableDiflation = await ethers.getContractFactory('BurnableDiflation');
        const pauseableDiflation = await ethers.getContractFactory('PauseableDiflation');
        const pausableDiflationBurn = await ethers.getContractFactory('PausableDiflationBurn');
        const pausableMintBurn = await ethers.getContractFactory('PausableMintBurn');
        const pausableInflation = await ethers.getContractFactory('PausableInflation');
        return {
            owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation
        };
    }
    it('Should deploy ERC20 inflation', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_InflationInstance('n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed_InflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = inflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_DiflationInstance(100, 'n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed_DiflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = deflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy burnable infilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_BurnableInflationInstance('n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed_BurnableInflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = burnableInflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy burnable defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_BurnableDiflationInstance(100, 'n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed__PauseableDiflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = burnableDiflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy pauseable defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_PauseableDiflationInstance(100, 'n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed__PauseableDiflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = pauseableDiflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_PausableDiflationBurnInstance(100, 'n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deploed_PausableDiflationBurnInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = pausableDiflationBurn.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_PausableMintBurnInstance('n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deployed_PausableMintBurnInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = pausableMintBurn.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
    it('Should deploy defilation ERC20', async function () {
        const { owner, other, factory, inflation,
            deflation, burnableInflation, burnableDiflation,
            pauseableDiflation, pausableDiflationBurn, pausableMintBurn,
            pausableInflation } = await loadFixture(deploy)
        const reciep = await factory.deploy_PausableInflationInstance('n', 'n');
        const tx = await reciep.wait();
        const events = tx.logs.map(log => factory.interface.parseLog(log));
        const eventReq = events.find(event => event && event.name === 'Deployed_PausableInflationInstance');
        const emittedNewValue = eventReq.args[0];
        const justDeployed = pausableInflation.attach(emittedNewValue);
        expect(await justDeployed.name()).to.be.eq('n');
    })
})