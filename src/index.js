module.exports = function getZerosCount(number) {
  let numberOfZeros = 0;
  let myNumber = number;

  while (myNumber = Math.floor(myNumber/5)) {
      numberOfZeros += myNumber;
  }

  return numberOfZeros;
}
