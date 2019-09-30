module.exports = function multiply(first, second) {
  let mult = BigInt(first) * BigInt(second);
  return String(mult);
}
