function adminMiddleware (req, res, next) {
    if (req.query.user == "Ada" || req.query.user == "Ariel" || req.query.user == "David" || req.query.user == "Julio"){
        next()
    } else {
        res.send("Raja de acá")
    }
}

module.exports = adminMiddleware;