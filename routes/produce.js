const express = require("express");
const router = express.Router();

const { authenticate } = require("../middlewares/auth")

const { Produce } = require('../models')

// Get all produce
router.get('/', async (req, res) => {
    try {
        const produces = await Produce.findAll()
        res.json(produces);
    } 
    catch (error) {
        res.status(500).json({ message: 'Error retrieving produce', error });
    }
});

//Get produce by id
router.get('id/:id', async (req,res) => {
    try {
        console.log(req.params.id)
        const produce = await Produce.findByPk(req.params.id)
        res.json(produce);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving produce by id', error });
    }

    
})

//Get random produce
router.get('/random', async (req,res) => {
    try {
        let num = await Produce.count()
        console.log(num)
        let i = Math.floor(Math.random() * num+1)
        const produce = await Produce.findByPk(i)
        res.json(produce)
    } catch (error) {
          res.status(500).json({ message: 'Error getting random produce', error });
        }
})

// Create a new produce using the HealthFact model/class and the data provided in the request body
router.post("/", authenticate, async (req, res) => {
    try {
          const produce = await Produce.create(req.body);
        
    
        console.log('Posting')
          res.status(201).json(produce);
          } catch (error) {
          res.status(500).json({ message: 'Error creating produce', error });
        }

      });

module.exports = router;