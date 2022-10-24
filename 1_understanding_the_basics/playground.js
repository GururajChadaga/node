const fs = require('fs');
console.log('hello from nodejs');

fs.writeFileSync('hello.txt', 'Hello to file from nodejs');
