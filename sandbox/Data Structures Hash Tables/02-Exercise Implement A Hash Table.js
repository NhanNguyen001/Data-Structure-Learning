class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Hash function => O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // O(1)
  // In the bad case time complexity will O(n)
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(30);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
