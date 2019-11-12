const fs = require("fs");
const path = require("path");

export default function getFilesFromDir(dir, fileTypes) {
  const filesToReturn = [];
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    for (let i in files) {
      const curFile = path.join(currentPath, files[i]);      
      if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
        filesToReturn.push(curFile);
      } else if (fs.statSync(curFile).isDirectory()) {
        walkDir(curFile);
      }
    }
  };
  walkDir(dir);
  return filesToReturn; 
}