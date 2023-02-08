//Loading the required modules in node.js
var crypto = require("crypto");
var fs = require("fs");


// create hash function
var algorithm = "sha512";

var hash = crypto.createHash(algorithm);


var filename = "data.txt";
const writeHash = 'hash.txt';

var file_data = fs.ReadStream(filename);

file_data.on("data", function (data) {
  hash.update(data);
});

file_data.on("end", function () {
  var gen_hash = hash.digest("hex");
  
  console.log(
    "Hash generated using " +
      algorithm +
      " \nHashed output is :  " +
      gen_hash +
      " \nFile name is :  " +
      filename
  );

  fs.writeFileSync(writeHash, gen_hash);
});


// decrypt

const decrypt = crypto.createVerify(algorithm);

console.log(decrypt);