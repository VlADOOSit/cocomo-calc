import { odds } from "../Constants/Odds";

export function CocomoLaborIntensity(kloc, rft, teamType) {
  return odds[teamType].a * Math.pow(kloc, odds[teamType].b) * rft;
}
