let fs = require("fs");
let path = require("path");

const viewer = (dirName, mode) => {
  if (mode == "tree") {
    viewTree(dirName, "\t");
  } else if (mode == "flat") {
    viewFlat(dirName);
  } else {
    console.log(`wrong mode type help for commands`);
  }
};

function isFileorNot(src) {
  return fs.lstatSync(src).isFile();
}

function readContent(src) {
  return fs.readdirSync(src);
}

function viewFlat(src) {
  let isFile = isFileorNot(src);
  if (isFile == true) {
    console.log(src + "*");
  } else {
    console.log(src);
    let fDirnames = readContent(src);
    for (let i = 0; i < fDirnames.length; i++) {
      let child = fDirnames[i];
      let dirNamespath = path.join(src, child);
      viewFlat(dirNamespath);
    }
  }
}

function viewTree(src, indent) {
  let isFile = isFileorNot(src);
  if (isFile == true) {
    console.log(indent + src + "*");
  } else {
    console.log(indent + src);
    let fDirnames = readContent(src);
    for (let i = 0; i < fDirnames.length; i++) {
      let child = fDirnames[i];
      let dirNamespath = path.join(src, child);
      viewTree(dirNamespath, indent + "\t");
    }
  }
}

module.exports = {
  viewer: viewer,
};
