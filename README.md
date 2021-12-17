# How to deploy Contracts

1. Deploy `Eve`
2. Deploy `Loot`
3. Deploy `StakingWarmup(EveStakingAddress, LootAddress)`
4. Deploy `EveStaking(EveAddress, LootAddress, 21600, 1, endTime)`
5. Call `Loot > initialize(EveStakingAddress)`
6. Deploy `EveTreasury(EveAddress, BEP20USDTAddress, 0)`
7. Deploy `Distributor(EveTreasuryAddress, EveAddress, 21600, endTime)`
8. Deploy `StakingHelper(EveStakingAddress, EveAddress)`
9. Deploy `MultiSigWalletWithDailyLimit(ownersArray, required, dailyLimit)`
10. Deploy `EveBondingCalculator(EveAddress)`

    Loot > SetIndex
    EveStaking > SetContract
    EveStaking > setWarmup
    EveTreasury > toggle
    Distributor > addRecipient
