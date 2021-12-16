import EveImg from "../assets/tokens/EVE.png";
import LootImg from "../assets/tokens/LOOT.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name == "EVE") {
        return toUrl(EveImg);
    }
    if (name === "LOOT") {
        return toUrl(LootImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
