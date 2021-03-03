let fs = require("fs");
let path = require("path");
let types = {
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
function isFileOrNot(src) {
  return fs.lstatSync(src).isFile();
}

function readContent(src) {
  return fs.readdirSync(src);
}
function copyFile(src, destFolder) {
  if (fs.existsSync(destFolder) == false) {
    fs.mkdirSync(destFolder);
  }
  let fileName = path.basename(src);
  fs.copyFileSync(src, path.join(destFolder, fileName));
}
function getdestName(src) {
  let ext = src.split(".").pop();
  for (let key in types) {
    for (let i = 0; i < types[key].length; i++) {
      if (ext == types[key][i]) {
        return key;
      }
    }
  }
  return "others";
}

function organize(src, dest) {
  let isFile = isFileOrNot(src);
  if (isFile == true) {
    let folderName = getdestName(src);
    copyFile(src, path.join(dest, folderName));
  } else {
    let fDirnames = readContent(src);
    for (let i = 0; i < fDirnames.length; i++) {
      let child = fDirnames[i];
      let dirNamepath = path.join(src, child);
      organize(dirNamepath, dest);
    }
  }
}

function organizeFiles(src, dest) {
  let destFolderPath = path.join(src, "Organized_files");
  if (fs.existsSync(destFolderPath) == false) {
    fs.mkdirSync(destFolderPath);
  }
  organize(src, destFolderPath);
}

organizeFiles(process.argv[2]);
