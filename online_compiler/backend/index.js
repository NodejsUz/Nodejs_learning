const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require('path');

const { generateFile } = require("./generate");
const { executeCpp } = require("./exucateCpp");
const { executePy } = require("./exucatePy");
const { exucateJs } = require("./exucateJs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cors({
//   origin: ["http://localhost:5173"],
// }));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ msg: "Hello compiler" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }

  try {
    // generate
    const filepath = await generateFile(language, code);

    let output;

    if (language == 'cpp'){
      output = await executeCpp(filepath);
    }else if (language == "py"){
      output = await executePy(filepath)
    }else if (language == "js"){
      output = await exucateJs(filepath)
    }

    return res.json({ output});
  } catch (error) {
    res.status(400).json({msg: error})
  }

});

app.listen(5000, () => {
  console.log("listen server on 5000 port");
});
