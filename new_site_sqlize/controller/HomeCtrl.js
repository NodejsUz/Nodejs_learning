class HomeCtrl{
    static HomeGetCtrl(req, res, next){
        try {
            res.json({
                ok: true,
                message: "ok",
                prject: "new site",
                version: "0.0.1"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = HomeCtrl