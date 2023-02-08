const {exec} = require("child_process");

exec("pwds", (err, stdout, stderr) => {
    if (err){
        console.log(`error ${err.message}`);
        return;
    };

    if (stderr) {
        console.log(`stderr ${stderr.message}`);
        return;
    };

    console.log(`OutPut ${stdout}`);
})
