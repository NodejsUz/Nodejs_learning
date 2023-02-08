const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  filepath = path.join("codes", path.basename(filepath));
  
  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} && ./a.out`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        fs.unlink(path.join("codes", path.basename(filepath)), (err) => err);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};
