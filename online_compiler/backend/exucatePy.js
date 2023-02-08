const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

function executePy(filepath) {
  filepath = path.join("codes", path.basename(filepath));

  return new Promise((res, rej) => {
    exec(`python3 ${filepath}`, (error, stdout, stderr) => {
      try {
        error && rej({ error, stderr });
        stderr && rej(stderr);
        fs.unlink(path.join("codes", path.basename(filepath)), (err) => err);
        res(stdout);
      } catch (error) {
        rej(error)
      }
    });
  });
}

module.exports = {
  executePy,
};
