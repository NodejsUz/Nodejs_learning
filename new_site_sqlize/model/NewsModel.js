const newsModel = async (Sequelize, sequelize) => {
    return await sequelize.define("news", {
        news_id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4()
        },
        news_title: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        news_text: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        news_slug: {
            type: Sequelize.STRING,
            allowNull: false
        },
        news_photos: {
            type: Sequelize.DataTypes.ARRAY(Sequelize.STRING),
            allowNull: true
        }
    })
}

module.exports = newsModel