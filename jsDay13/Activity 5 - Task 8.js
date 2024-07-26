
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};

// src/main.js
import { add } from './add.js';
import multiply from './multiply.js';

console.log(add(2, 3)); // 5
console.log(multiply(4, 2)); // 8
