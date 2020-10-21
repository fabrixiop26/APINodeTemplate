//Carga el modelo
const Person = require("../models/person");

//Get all people
const findAll = () => {
    return Person.find();
};

const findOne = (id) => {
    return Person.findById(id);
}

const addPerson = (data) => {
    const newPerson = new Person({
        name: data.name,
        age: data.age
    });
    return newPerson.save()
}

//Export the functions
module.exports = {
    findAll,
    findOne,
    addPerson
}
