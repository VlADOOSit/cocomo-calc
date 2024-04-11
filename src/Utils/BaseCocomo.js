export function BaseCocomoLaborIntensity(a, b, kloc) {
  return a * Math.pow(kloc, b);
}

export function BaseCocomoDevelopmentTime(c, d, laborIntensity) {
  return c * Math.pow(laborIntensity, d);
}

export function BaseCocomoNumberOfDevelopers(laborIntensity, developmentTime) {
  return laborIntensity / developmentTime;
}
