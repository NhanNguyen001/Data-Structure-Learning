function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooooo!");
  }
}

boooo([1, 2, 3, 4, 5, 6]); // O(1) - Space Complexity

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) - Space Complexity
