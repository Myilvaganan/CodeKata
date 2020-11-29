function conversion(r) {
  const arr = r.split('');
  const val = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (val[arr[i]] < val[arr[i + 1]]) {
      sum += val[arr[i + 1]] - val[arr[i]];
      i += 1;
    } else {
      sum += val[arr[i]];
    }
  } return sum;
}
      
console.log(conversion("VIII"));
console.log(conversion("LXXIX"));
console.log(conversion("MCMXLIV"));