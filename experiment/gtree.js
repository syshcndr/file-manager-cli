let fs = require("fs");
function checkFileOrFolder(path) {
  return fs.lstatSync(path).isFile();
}

function contentReader(path) {
  return fs.readdirSync(path);
}

function printFile(path) {
  let isFile = checkFileOrFolder(path);
  if (isFile) {
    console.log(path, "*");
  } else {
    console.log(path);
    let childrens = contentReader(path);
    for (let i = 0; i < childrens.length; i++) {
      printFile(path + "/" + childrens[i]);
    }
  }
}

printFile("/Users/syshcndr/Dev/git/file-manager-cli/testcase");
