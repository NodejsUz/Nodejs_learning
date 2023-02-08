const express = require("express");
const cors = require("cors");

const { generateFile } = require("./generate");
const { executeCpp } = require("./exucateCpp");
const { executeShell } = require("./exucateShell");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

    const output = await executeShell(filepath);

    return res.json({ filepath, output});
  } catch (error) {
    res.status(400).json({msg: error+""})
  }

});

app.listen(5000, () => {
  console.log("listen server on 5000 port");
});
