// Create a function that reverses a string
// 'Hi My name is Andrei' should be:
// 'iedrnA si eman vM iH'

// Method 1
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'hmm that is not good';

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

// console.log(reverse('Hi My name is Andrei'));

// Method 2
function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverse2('Hi My name is Andrei'));

// Method 3
const reverse3 = str =>
  str
    .split('')
    .reverse()
    .join('');

console.log(reverse3('Hi My name is Andrei'));

// Method 4
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('Hi My name is Andrei'));
