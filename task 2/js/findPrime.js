function findPrime(limit) {
let arrPrime = [12];
nextPrime:
  for (var i = 2; i <= limit; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    arrPrime.push(i);
  }
  return arrPrime;
}

console.log(findPrime(100));