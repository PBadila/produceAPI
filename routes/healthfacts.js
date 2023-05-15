const express = require("express");
const router = express.Router();

//adds the authentication to the route
const { authenticate } = require("../middlewares/auth")


const { HealthFact } = require('../models')



// Get all health facts
router.get('/', async (req, res) => {
    try {
        const facts = await HealthFact.findAll()
        res.json(facts);
    } 
    catch (error) {
        res.status(500).json({ message: 'Error retrieving facts', error });
    }
});

//Get health fact by id
router.get('/:id', async (req,res) => {
    try {
        //console.log(req.params.id)
        const fact = await HealthFact.findByPk(req.params.id)
        res.json(fact);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving fact by id', error });
    }

    
})

//Get facts by produceID
router.get('/fk/:produceID', async (req,res) => {
    try {
        //console.log(req.params.produceID)
        const facts = await HealthFact.findAll( {
            where: {
                produceID : req.params.produceID 
            }
        })
        res.json(facts);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving facts by foreign key', error });
    }

    
})

// Create a new health fact using the HealthFact model/class and the data provided in the request body
router.post("/", authenticate, async (req, res) => {
//router.post('/', async (req, res) => { //route handler definition for the HTTP POST method with endpoint / , everything in the {} is our asynchronous function that takes in 2 parameters, req (request) and res (response) -- an asynchronous funtion is a non-blocking execution of code that enables JavaScript to perform multiple tasks without blocking the rest of the code, vs code being executed synchronously, where it waits for each operation to complete before moving on to the next one 
    try {
      const fact = await HealthFact.create(req.body);
      //creates a new basket using the HealthFact model CLASS (remember classes???) and based on the data in the req.body object (the info the user entered in)...AWAIT is used to wait for the create method to complete before moving to the next line

    console.log('Posting')
      res.status(201).json(fact);
      //if successful, response status code is 201 for CREATED and the created basket object is sent back to the client as a JSON response

    } catch (error) {
      res.status(500).json({ message: 'Error creating health fact', error });
    }
    //The try catch block is used to handle errors that may occur during the execution of the code --> try: do this if successful and catch: do this if an error occurs
  });

module.exports = router;