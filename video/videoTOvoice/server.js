const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {exec} = require("child_process")
const app = express();


const PORT = 5000;

app.use(express.static("public"))
const dir = "public";
const subDir = "public/uploads";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)

    fs.mkdirSync(subDir);
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads")
    },

    filename:function(req, file, cb){
        // takrorlanmaydigan nom berish 
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})

app.post("/convert", upload.single("file"), (req, res) => {
    if(req.file) {
        const output = Date.now() + "output.mp3";

        exec(`ffmpeg -i ${req.file.path} ${output}`, (error, stdout, stderr) => {
            if (error){
                console.log(`Error: ${error.message}`);
            }else {
                res.download(output, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    };

                    fs.unlinkSync(req.file.path)
                    fs.unlinkSync(output);
                })
            }
        })
    }
})

app.listen(PORT, () => {
    console.log("Server listen on ", PORT, " port");
})