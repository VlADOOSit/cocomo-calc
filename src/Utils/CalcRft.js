export default function calcRft(attr) {
  let result = 1;
  for (let key in attr) {
    result *= parseFloat(attr[key]);
  }
  return result;
}
