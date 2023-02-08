const fs = require("fs");
const {join} = require('path');
const {data, config} = require("./data");

render(data, config);

function render (data, folder) {
    for (let nameF of Object.values(folder)){

        if (!fs.existsSync(nameF)) fs.mkdirSync(join(__dirname, nameF));

        nameF = nameF.split('.').join("");

        for (let file of data){
            if (file.type == "file"){
                fileGenerate(join(__dirname + nameF, file.name + `.${file.ext}`), file.content)
            }else if (file.type == "folder"){
                render(file.child, {folder: "./" + nameF + "/" + file.name})
            }
        }
    }
}

function fileGenerate(name, data){
    if (!fs.existsSync(name)) fs.writeFileSync(name, data, {encoding: "utf-8"});
}

function folderGenerate(name){

}