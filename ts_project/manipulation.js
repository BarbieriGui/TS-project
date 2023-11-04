// file manipulation using nodejs

const fs = require('fs');

fs.readFile('./file/file_manipulation.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

