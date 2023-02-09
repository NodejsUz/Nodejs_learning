module.exports = class CategoryCtrl {
    static async CategoryGetAllCtrl(req, res, next){
        try {
            const category = await req.db.categories.findAll({
                raw: true
            })
            res.json({
                ok: true,
                message: "ok",
                data: {
                    category
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async CategoryGetOneCtrl(req, res, next) {
        try {
            const category = await req.db.categories.findOne({
                where: {
                    category_slug: req.params.caregory_id
                },
                include: [
                    {
                        model: req.db.news
                    }
                ]
            })
            if (category) {
                res.json({
                    ok: true,
                    message: "ok",
                    data: {
                        category
                    }
                })
            }else {
                res.json({
                    ok: false,
                    message: "Category not found",
                })
            }
        } catch (error) {
            next(error)
        }
    }

    static async CategorySearchCtrl(req, res, next) {
        try {
            // const category = await req.db.categories
        } catch (error) {
            next(error)
        }
    }
}