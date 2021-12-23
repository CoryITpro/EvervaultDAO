# How to deploy Contracts

1. Deploy `Eve` and Mint many Eves.
2. Deploy `Loot`
3. Deploy `EveStaking(EveAddress, LootAddress, 21600, 1, endTime)`
4. Call `Loot > initialize(EveStakingAddress)` and Call `Loot > SetIndex(1)`
5. Deploy `StakingWarmup(EveStakingAddress, LootAddress)`
6. Deploy `EveTreasury(EveAddress, BUSDAddress, 0)`
7. Deploy `Distributor(EveTreasuryAddress, EveAddress, 21600, endTime)`
8. Deploy `StakingHelper(EveStakingAddress, EveAddress)`
9. Deploy `MultiSigWalletWithDailyLimit(ownersArray, required, dailyLimit)`
10. Deploy `EveBondingCalculator(EveAddress)`
11. Add Eve-Busd LP Pair in Pancakeswap and take address
12. Deploy `BUSDBond(Eve, BUSDAddress, Trasury, DAO, "")`
13. Deploy `BondDepository(Eve, LPPairAddress, Trasury, DAO, Calculator)` for Eve-BUSD
14. Run `BusdBond > initializeBondTerms(0, 0, 75, 10000, 16000000000000000, 0, 432000)`
    And `BusdBond > setAdjustment(false, 0, 178, 2160)`
    And `BusdBond > setStaking(EveStakingAddress, false)`
    And `BusdBond > setStaking(StakingHelperAddress, true)`
    After first mint then set terms to 178
    Do same for Eve-Busd Bond
15. Run `BusdEveBond > InitializeBondTerms(111, 0, 75, 10000, 2000000000000000, 0, 432000)`
    And `BusdEveBond > setAdjustment(false, 0, 111, 3600)`
16. Run `EveStaking > setContract(0, DistributorAddress)` and `EveStaking > setContract(1, StakingWarmupAddress)`
17. Run `Eve > setVault(TreasuryAddress)`
18. Run `EveTreasury > queue(5, Eve-Busd Pair Address)` and `EveTreasury > toggle(5, Eve-Busd Pair Address, EveBondingCalculatorAddress)`
19. Run `EveTreasury > queue(0, BUSDBondAddress)` and `EveTreasury > toggle(0, BusdBondAddress)`

    EveTreasury > toggle
    Distributor > addRecipient

# Information seen on screens

-   ## Dashboard

    -   ### EVE Price

        Means MarketPrice of EVE
        From BUSD-EVE Lp token
        Get count ratio regarding BUSD and multiply BUSD token price

    -   ### Market Cap

        (MarketPrice of EVE) \* (totalSupply of EVE)

    -   ### TVL

        (MarketPrice of EVE) \* (amount of EVE which is can be returned to users as staking rewards from LOOT)

    -   ### APY

        Math.pow(1 + rebased EVE amount / EVE for stake rewards, 365 \* 3) - 1;

    -   ### Current Index

            Means an increased LOOT amount compared to the standard amount (1) set before.

    -   ### Treasury Balance

            Means total $ amount of treasury assets bonded from Bonding
            1. Stable Coin
                Just get amount
            2. Other token
                Amount * Price of token
            3. EVE-StableCoin LP Token
                (LP / Total LP) * 2sqrt(Constant Product) * (Markdown of EVE-StableCoin LP Token)
            4. EVE-OtherToken LP Token
                (LP / Total LP) * 2sqrt(Constant Product) * (Markdown of EVE-StableCoin LP Token) * (OtherToken Price)

    -   ### Backing per $EVE

            (Reserve Coin Asset + LP Bond Asset) / (Eve Amount in LP)

    -   ### Runway

            (3 * (1 + APY)) ^ Runway = (Reserve Coin Asset + LP Bond Asset) / (amount of EVE which is can be returned to users as staking rewards from LOOT)

-   ## Stake
