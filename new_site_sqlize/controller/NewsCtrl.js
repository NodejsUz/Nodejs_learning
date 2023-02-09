module.exports = class NewsCtrl {
    static async NewsGetAllCtrl(req, res, next) {
        try {
            const news = await req.db.news.findAll({})
            res.json({
                ok: true,
                message: "ok",
                data: {
                    news
                }
            })
        } catch (error) {
            next(error)
        }
    }

    static async NewsGetOneCtrl(req, res, next){
        try {
            const news = await req.db.news.findOne({
                news_slug: req.params.news_id
            })

            res.json({
                ok: true,
                message: "ok",
                data: {
                    news
                } 
            })
        } catch (error) {
            next(error)
        }
    }
}