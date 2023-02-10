const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", 'ejs');
app.use(express.static("views"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

const uploadFile = "upload";

if (!fs.existsSync(uploadFile)) {
  fs.mkdirSync(uploadFile, { recursive: true });
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniqueFilename = Date.now() + "-";
    cb(null, uniqueFilename + file.fieldname + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/upload", (req, res) => {
  const images = [];

  fs.readdir("upload", {encoding: "utf-8"}, (err, image) => {
    if (!err) {
      image.forEach((val) => {
        images.push(path.join("../upload", val))
      })
      console.log(images);
      res.render("upload.ejs", {images: images})
    }else {
      console.log(err);
    }
  })
})

app.post("/upload", upload.array("multipleImage", 10), (req, res) => {
  res.status(200).json({images: req.files});
});

app.listen(PORT, () => {
  console.log("server listen on ", PORT, " port");
});
