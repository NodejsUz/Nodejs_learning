const fs = require("fs");
const { join } = require("path");

class Database {
  path = "";
  name = "";

  // initial state chaqirilganda birdaniga ishga tushadi
  constructor(name, data = []) {
    this.name = name;

    if (!fs.existsSync(join("data"))) fs.mkdirSync(join("data"));

    if (!fs.existsSync(join("data", `${this.name}.json`))) {
      fs.writeFileSync(join("data", `${this.name}.json`), JSON.stringify(data));
    }

    this.path = join("data", `${this.name}.json`);
  }

  read() {
    console.log(this.path);
    return JSON.parse(fs.readFileSync(join(this.path), { encoding: "utf-8" }));
  }

  write(data) {
    console.log("s");
    const oldData = JSON.parse(fs.readFileSync(join(this.path), {encoding: "utf-8"}))
    oldData.push({id: Date.now(), ...data});
    
    fs.writeFileSync(join(this.path), JSON.stringify(oldData));
  }

  update(id, data) {}

  delete(id) {}
}

const data = [
  {
    id: 123,
    name: "kripton",
    description: "lorem",
  },
  {
    id: 112,
    name: "samsung",
    description: "lorem",
  },
  {
    id: 312,
    name: "apple",
    description: "lorem",
  },
];

const database = new Database("data", data);

// console.log(database.read());
database.write({name: "bobur", description: "mari"})
// console.log(database.read());
