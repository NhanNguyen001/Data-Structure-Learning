let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function() {
    console.log("ahhhhh!");
  }
};

console.log(user.age); // O(1)
user.spell = "ab"; // O(1)
console.log(user);
user.scream(); // O(1)

// Collisions => O(n/k) => O(n)
