const concatenateStrings = function(str1, str2) {
    const string = str1+str2;
    console.log('Concatenated string is:', string)
}

let i1= prompt('Enter first string:');
let str1= String(i1);

let i2= prompt('Enter second string:');
let str2= String(i2);

concatenateStrings(str1, str2);
