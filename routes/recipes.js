const express = require("express");
const router = express.Router();

const { authenticate } = require("../middlewares/auth")
const { Recipe } = require('../models')

// Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll()
        res.json(recipes);
    } 
    catch (error) {
        res.status(500).json({ message: 'Error retrieving recipes', error });
    }
});

//Get produce by id
router.get('/:id', async (req,res) => {
    try {
        console.log(req.params.id)
        const recipe = await Recipe.findByPk(req.params.id)
        res.json(recipe);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe by id', error });
    }

    
})

//Get recipe by produceID
router.get('/fk/:produceID', async (req,res) => {
    try {
        console.log(req.params.produceID)
        const recipes = await Recipe.findAll( {
            where: {
                produceID : req.params.produceID 
            }
        })
        res.json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe by foreign key', error });
    }

    
})

// Create a new recipe using the Recipe model/class and the data provided in the request body
router.post("/", authenticate, async (req, res) => {
    try {
          const recipe = await Produce.create(req.body);
        
    
        console.log('Posting')
          res.status(201).json(recipe);
          } catch (error) {
          res.status(500).json({ message: 'Error creating recipe', error });
        }

      });


module.exports = router;