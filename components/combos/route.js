const router = require("express").Router();
const controller = require("./controller");

router.get("/getAll", (req, res) => {
    controller.getAll()
    .then(data => {
        if(data.length == 0){
            return res.status(404).json({
                message: "No hay combos"
            })
        }

        return res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            message: "Hubo un error interno",
            err: err
        })
    });
});

module.exports = router;