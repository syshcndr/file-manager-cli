let fs = require("fs");
let path = require("path");

types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

function isDirectory(currentPath) {
  return fs.lstatSync(currentPath).isDirectory();
}
function getChildrens(currentPath) {
  return fs.readdirSync(currentPath);
}
function createOrganizeFolder(currentPath) {
  let folder = path.join(currentPath, "organize");
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  for (subFolder in types) {
    let subFolderPath = path.join(folder, subFolder);
    if (!fs.existsSync(subFolderPath)) {
      fs.mkdirSync(subFolderPath);
    }
  }
  let otherPath = path.join(folder, "others");
  if (!fs.existsSync(otherPath)) {
    fs.mkdirSync(otherPath);
  }
}
function checkExtension(file) {
  for (category in util.types) {
    let extension = util.types[category];
    if (extension.includes(path.extname(file).substr(1))) {
      return category;
    }
  }
  return "others";
}
function copyFilesToOrganizeFolder(src, root) {
  let children = getChildrens(src);
  for (let i = 0; i < children.length; i++) {
    if (isDirectory(path.join(src, children[i]))) {
      copyFilesToOrganizeFolder(path.join(src, children[i]), root);
    } else {
      let copyFile = path.join(src, children[i]);
      // console.log("im here");
      let destinationFolder = path.join(
        root,
        path.join("organize", checkExtension(children[i]))
      );
      console.log(destinationFolder);
      fs.copyFileSync(copyFile, destinationFolder);
    }
  }
}
function organizefn(src) {
  createOrganizeFolder(src);
  copyFilesToOrganizeFolder(src, src);
}

module.exports = {
  fn: organizefn,
};
