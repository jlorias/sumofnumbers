let forLoopSum = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
      sum += data[i];
  }
  return sum;
};

console.log(forLoopSum([1,2,3]));

let whileLoopSum = (data) => {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

console.log(whileLoopSum([1,2,3]));

let recursionSum = (data) => {
  if (data.length === 1) {
    return data[0];
  }
  else {
    return data.pop() + recursionSum(data);
  }
}

console.log(recursionSum([1, 2, 3]));

let underscoreSum = (data) => {
  return _.reduce(data, (memo, entry) => memo + entry);
}

console.log(underscoreSum([1,2,3]));