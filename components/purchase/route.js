const router = require("express").Router();
const controller = require("./controller");

router.post("/save", (req, res) => {
    const data = req.body;
    if(!data){
        return res.status(400).json({message: "No enviaste informacion de la compra"});
    }
    controller.savePurchase(data)
    .then(d => res.status(200).json({message: "sucess"}))
    .catch(err => res.status(500).json({message: "Error interno"}));
})

module.exports = router;