const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.out`);

  return exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out`, 
  (error, stdout, stderr) => {
    if (error){
        return error;
    }
    if (stderr){
        return stderr;
    }
    console.log(stdout);
    return stdout;
  })
};


module.exports = {
  executeCpp,
};