const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Staking", function () {
    async function deployFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Inflation");
        const token = await Token.deploy('n', 'n', owner.address);


        const Staking = await ethers.getContractFactory("Staking");
        const staking = await Staking.deploy(token.target, "1000", owner.address);

        await token.mint(owner.address, "10000000000000000000");
        await token.approve(owner.address, "10000000000000000000");

        await token.mint(otherAccount.address, "10000000000000000000");
        await token.connect(otherAccount).approve(otherAccount.address, "10000000000000000000");

        await token.mint(staking.target, "10000000000000000000");
        await token.approve(staking.target, "30000000000000000000");
        await token.connect(otherAccount).approve(staking.target, "30000000000000000000");

        return { token, staking, owner, otherAccount };
    }
    it("Should set the rate", async function () {
        const { owner, staking } = await loadFixture(deployFixture);

        const newRate = "1000";
        await staking.setRate(newRate);
        expect(await staking.rate()).to.equal(newRate);
    });
    it("Should stake tokens", async function () {
        const { owner, staking, token } = await loadFixture(deployFixture);

        const amount = "10000000000000000000";
        expect(await staking.stake(amount)).not.to.be.reverted;
        const staker = await staking.stakersList(owner.address);
        expect(staker.stakedAmount).to.equal(amount);
    });
    it("Should claim rewards", async function () {
        const { owner, staking, token, otherAccount } = await loadFixture(deployFixture);

        const amount = "10000000000000000000";

        expect(await staking.connect(otherAccount).stake(amount)).not.to.be.reverted;
        await network.provider.send("evm_increaseTime", [86400]);
        await staking.connect(otherAccount).claimRewards();
        const staker = await staking.stakersList(otherAccount.address);
        expect(staker.reward).to.equal("0");
    });
    it("Should unstake tokens", async function () {
        const { owner, staking, token, otherAccount } = await loadFixture(deployFixture);

        await staking.stake("10000000000000000000");
        await network.provider.send("evm_increaseTime", [86400]);
        await staking.unstake();
        const staker = await staking.stakersList(owner.address);
        expect(staker.stakedAmount).to.equal("0");
    })
})