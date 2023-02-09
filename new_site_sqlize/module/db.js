const {Sequelize} = require("sequelize");
const { default: slugify } = require("slugify");
const categoryModel = require("../model/CategoryModel");
const newsModel = require("../model/NewsModel");
const relationModel = require("../model/RelationModel");

const url = "postgres://anvar:312@localhost:5432/datas";

const sequelize = new Sequelize(url);

async function dbSqlz() {
    try {
        await sequelize.authenticate()
            .then(() => console.log("database connecting saccess"))
            .catch((err) => console.log(`Dadabase connecting Error ${err}`))
        let db = {};

        db.categories = await categoryModel(Sequelize, sequelize);
        db.news = await newsModel(Sequelize, sequelize)

        await relationModel(db);

        // database synchronization
        // baracha databasedagi ma'lumotlar o'zgarishini taminlaydi hamma tabledagi malumotlarni o'zgartiradi
        await sequelize.sync()

        await dataFake(db);

        return db
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbSqlz

async function dataFake(db) {
    // let category = await db.categories.create({
    //     category_name: "Бир йилда 3 гигаватт янги қувват: энергетикадаги йирик лойиҳалар",
    //     category_desc: "Бу йил Ўзбекистонда салкам 3 гигаватт қувватга эга янги электр станциялари ишга тушади, бу – 2022 йилга нисбатан икки баробарга кўп. Янги станцияларнинг аксариятида энергия табиатга безарар муқобил манбалардан олинади",
    //     category_slug: slugify('Бир йилда 3 гигаватт янги қувват: энергетикадаги йирик лойиҳалар', {
    //         trim: true,
    //         replacement: "-",
    //         remove: undefined,
    //         lower: true,
    //         strict: true
    //     })
    // })
    // console.log(category);

    let news = db.news.create({
        category_id: "2b8d37fa-2948-425f-abda-8f1506b79da8",
        news_title: "Lorem ipsum bal bal bla ",
        news_text: "қувватга эга янги электр станциялари ишга тушади",
        news_slug: slugify("Lorem ipsum bal bal bla ", {
            trim: true,
            replacement: "-",
            remove: undefined,
            lower: true,
            strict: true
        })
    })

    console.log(news);
}