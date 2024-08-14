const fs = require("fs");
const path = require("path");

function checkProjectName(projectName) {
  const prefix = process.cwd();
  const targetPath = path.resolve(prefix, projectName);

  if (fs.existsSync(targetPath)) {
    console.error("仓库已存在");
    return false;
  }
  return true;
}

function renameProjectName(oldName, newName) {
  const prefix = process.cwd()
  const oldPath = path.resolve(prefix, oldName)
  const newPath = path.resolve(prefix, newName)
  if (fs.existsSync(oldName)) {
    fs.renameSync(oldPath, newPath)
  }
}

(() => {
  console.log(process.argv);

  const args = process.argv.slice(2);
  if (args.length && args.length === 2 && args[0] === "--projectName") {
    const projectName = path.resolve(process.cwd(), args[1]);
    const checked = checkProjectName(projectName);
    if (checked) {
      const exec = require("child_process").exec;
      exec(
        "git clone https://github.com/supanpanCn/vue-blob.git",
        { clone: true },
        (err) => {
          if (err) {
            console.error("模板下载失败，请稍后重试", err);
          } else {
            renameProjectName('vue-blob', projectName);
            console.log("模板下载成功");
          }
        }
      );
    }
    return;
  }
  console.log("projectName 参数缺失，请使用--projectName yourname");
})();
