// Function Definition
const containsCharacter = (str, char) => str.includes(char);

// How it works in practice:
console.log(containsCharacter("Hello World", "World")); // true
console.log(containsCharacter("Hello World", "z"));     // false
console.log(containsCharacter("Hello World", "h"));     // false (Case sensitive!)
