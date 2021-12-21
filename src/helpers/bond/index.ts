import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import BUSDIcon from "../../assets/tokens/BUSD.svg";
// import AvaxIcon from "../../assets/tokens/AVAX.svg";
import BUSDEVEIcon from "../../assets/tokens/BUSD-EVE.svg";
// import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

// import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";
import { StableBondContract, LpBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const busd = new StableBond({
    name: "busd",
    displayName: "BUSD",
    bondToken: "BUSD",
    bondIconSvg: BUSDIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "0xc15f9d988fff2871886a1083b6e1f035862716d3",
            reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
        },
    },
});

// export const wavax = new CustomBond({
//     name: "wavax",
//     displayName: "wAVAX",
//     bondToken: "AVAX",
//     bondIconSvg: AvaxIcon,
//     bondContractABI: WavaxBondContract,
//     reserveContractAbi: StableReserveContract,
//     networkAddrs: {
//         [Networks.BSC]: {
//             bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
//             reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
//         },
//     },
// });

export const busdeve = new LPBond({
    name: "busd_eve_lp",
    displayName: "BUSD-EVE LP",
    bondToken: "BUSD",
    bondIconSvg: BUSDEVEIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "0xf2073f81869133Ad4558C5F284E583C2CA54C266",
            reserveAddress: "0xf1428fa2075584048db7e82A1D01E1f1A8e7A5B2",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

// export const avaxTime = new CustomLPBond({
//     name: "avax_time_lp",
//     displayName: "TIME-AVAX LP",
//     bondToken: "AVAX",
//     bondIconSvg: AvaxTimeIcon,
//     bondContractABI: LpBondContract,
//     reserveContractAbi: LpReserveContract,
//     networkAddrs: {
//         [Networks.BSC]: {
//             bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
//             reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
//         },
//     },
//     lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
// });

export default [busd, busdeve];
