const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('postgres://anvar:312@localhost:5432/datas')

async function psql(){
    try {
        await sequelize.authenticate()
        .then(() => {
            console.log('database connecting');
        }).catch((err) => {
            console.log(`Error db not connecting ${err}`);
        })
    } catch (error) {
        console.log("SQL_ERROR", error);
    }
}

module.exports = psql