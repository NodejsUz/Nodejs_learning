// databaselarni bir biriga bog'lash
// ikkita yul bor bitta ma'lumotga bir nechta malumotlarni ulash
// va bitta ma'lumotga bitta ma'lumot ulash
// 1) hasMony 2) belongTo va yana boshqalari bor

const relationModel = async (db) => {
    await db.categories.hasMany(db.news, {
        foreignKey: {
            name: "category_id",
            allowNull: false
        }
    });

    await db.news.belongsTo(db.categories, {
        foreignKey: {
            name: "category_id",
            allowNull: false
        }
    })
}

module.exports = relationModel