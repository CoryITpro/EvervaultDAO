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
