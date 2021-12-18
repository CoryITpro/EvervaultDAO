import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2,olympus,magic-internet-money,tether,safeshiba,busd&vs_currencies=usd";
    const { data } = await axios.get(url);
    console.log(data);
    cache["AVAX"] = data["avalanche-2"].usd;
    cache["MIM"] = data["magic-internet-money"].usd;
    cache["OHM"] = data["olympus"].usd;
    cache["USDT"] = data["tether"].usd;
    cache["SAFESHIB"] = data["safeshiba"].usd;
    cache["BUSD"] = data["busd"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
