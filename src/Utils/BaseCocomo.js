import { baseOdds } from "../Constants/BaseOdds";

export function BaseCocomoLaborIntensity(kloc, teamType) {
  return baseOdds[teamType].a * Math.pow(kloc, baseOdds[teamType].b);
}

export function BaseCocomoDevelopmentTime(laborIntensity, teamType) {
  return baseOdds[teamType].c * Math.pow(laborIntensity, baseOdds[teamType].d);
}

export function BaseCocomoNumberOfDevelopers(laborIntensity, developmentTime) {
  return laborIntensity / developmentTime;
}
