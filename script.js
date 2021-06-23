const fs = require('fs');
const path = require('path');
const fileToEdit = './build/app/index.html';
const directoryPath = path.join(__dirname, 'build');
const htmlFileToEdit = path.join(directoryPath, 'app', 'index.html');

fs.readFile(htmlFileToEdit, 'utf8', function (err, data) {
  const res = data
    .replace(/dist/g, 'app/dist')
    .replace(/assets/g, 'app/assets');
  fs.writeFile(htmlFileToEdit, res, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
const jsFilesToEditPath = path.join(directoryPath, 'app', 'dist');
fs.readdir(jsFilesToEditPath, (err, files) => {
  const filesToEdits = files.filter((file) => file.endsWith('.js'));
  filesToEdits.forEach((file) => {
    fs.readFile(jsFilesToEditPath + '/' + file, 'utf8', function (err, data) {
      const res = data
        .replace(/dist/g, 'app/dist')
        .replace(/assets/g, 'app/assets');
      fs.writeFile(jsFilesToEditPath + '/' + file, res, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  });
});
