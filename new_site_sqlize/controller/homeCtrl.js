module.exports = class HomeCtrl{
    static async HomeGetCtrls(req, res, next) {
        try {
            res.json({msg: "ok"})
        } catch (error) {
            next(error)
        }
    }
}