const categoryModel = async (Sequelize, sequelize) => {
    return await sequelize.define("categories", {
        category_id: {
            type: Sequelize.UUID,
            allowNul: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4()
        },
        category_name: {
            type: Sequelize.STRING,
            allowNul: false,
        },
        category_desc: {
            type: Sequelize.TEXT,
            allowNul: false
        },
        category_slug: {
            type: Sequelize.STRING,
            allowNul: false
        }
    },{
        timestamps: true
    })
}

module.exports = categoryModel