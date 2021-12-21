import { Networks } from "./blockchain";

const BSC_MAINNET = {
    EVE_ADDRESS: "0xe5d08A0C671416Ca254cDAe8B8D5f08cb911f0B7",
    LOOT_ADDRESS: "0xB0fd33aaCBB8957A568bF7094DD7C4a19271AcfB",
    STAKING_ADDRESS: "0x9045e5742419D7C4589DEafFA27a0EDC812f8acC",
    TREASURY_ADDRESS: "0x0773606e445e73bc6789d420c1f8882ce5468dcb",
    STAKING_HELPER_ADDRESS: "0xeC1433D3Ad880DEDA565c8948ee1C8A2c2223bBB",
    DAO_ADDRESS: "0x346D2154337192A585c26a5210547f20979CB4B8",
    EVE_BONDING_CALC_ADDRESS: "0xb0bfa4aaaac639f957c5b149ab70cce53c205310",
    // EVE_BONDING_CALC_ADDRESS: "0x1eDD8028411D74c19C954427415942F7a51b1aED",
    BUSD_ADDRESS: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    ZAPIN_ADDRESS: "0xc669dC61aF974FdF50758d95306e4083D36f1430",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.BSC) return BSC_MAINNET;

    throw Error("Network don't support");
};
