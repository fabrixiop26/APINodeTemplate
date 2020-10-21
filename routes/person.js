//Import the controller
const controller = require("../controllers/person");
//Create router instace
const router = require("express").Router();

//get all the people in this route
//default /person route
router.get("/", (req, res) => {
    controller.findAll()
    .then(people => {
        res.status(200).send(people);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving people"
        });
    });    
});

//:personId es placeholder para cualquier valor (query param)
router.get("/:personId", (req, res) => {
    controller.findOne(req.params.personId)
    .then(person => {
        if(!person) {
            //Stop the flow
            return res.status(404).send({
                message: "Person not found with id: " + req.params.personId
            });
        }
        res.status(200).send(person);
    })
    .catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "Person not found with id: " + req.params.personId
            })
        }
        return res.status(500).send({
            message: "Error retrieving Person with id " + req.params.personId
        });
    });
});

router.post("/", (req, res) => {
   // Validate request
   if(!req.body) {
    return res.status(400).send({
        message: "Person content can not be empty"
    });
}    
    controller.addPerson(req.body)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Person."
        })
    })

});

module.exports = router;