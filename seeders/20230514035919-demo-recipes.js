'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        name: 'Artichoke Bruschetta',
        time: '20 minutes',
        ingredients: 'French baguette, olive oil, garlic, salt, pepper, artichoke hearts',
        directions: '1. Preheat the oven to 375°F (190°C). 2. Arrange the bread slices on a baking sheet and brush them with olive oil. 3. In a bowl, mix the chopped artichoke hearts with garlic, olive oil, salt, and pepper. 4. Spoon the artichoke mixture onto each bread slice. 5. Bake for 10-15 minutes, until the bread is toasted and the topping is hot.',
        produceID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artichoke and Tomato Pasta',
        time: '30 minutes',
        ingredients: 'Pasta, artichoke hearts, diced tomatoes, olive oil, garlic, salt, pepper',
        directions: '1. Cook the pasta according to package directions. 2. In a pan, heat olive oil over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant. 3. Add the chopped artichoke hearts and diced tomatoes to the pan and stir until heated through. 4. Season with salt and pepper. 5. Toss the pasta with the artichoke and tomato mixture and serve.',
        produceID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artichoke and Spinach Dip',
        time: '30 minutes',
        ingredients: 'Artichoke hearts, frozen spinach, vegan mayo, vegan parmesan cheese, garlic',
        directions: '1. Preheat the oven to 350°F (175°C). 2. In a bowl, mix together the chopped artichoke hearts, spinach, vegan mayo, vegan parmesan cheese, and minced garlic. 3. Spread the mixture into a small baking dish. 4. Bake for 20-25 minutes, until the dip is hot and bubbly. 5. Serve with pita chips or crackers.',
        produceID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artichoke and White Bean Salad',
        time: '15 minutes',
        ingredients: '1 can of white beans, drained and rinsed, 1 can of artichoke hearts, drained and chopped, 1/4 cup chopped red onion, 1/4 cup chopped fresh parsley, 1/4 cup olive oil, 2 tbsp. red wine vinegar, Salt and pepper to taste',
        directions: '1. In a large bowl, combine the white beans, chopped artichoke hearts, chopped red onion, and chopped fresh parsley. 2. In a separate bowl, whisk together the olive oil, red wine vinegar, salt, and pepper. 3. Pour the dressing over the salad and toss to coat. 4. Serve cold or at room temperature.',
        produceID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Creamy Artichoke Dip',
        time: '20 minutes',
        ingredients: '1 can of artichoke hearts, drained and chopped, 1 cup vegan cream cheese, 1/4 cup vegan mayonnaise, 1/4 cup grated vegan parmesan cheese, 1/4 cup chopped fresh parsley, 2 cloves garlic, minced, Salt and pepper to taste',
        directions: '1. Preheat the oven to 375°F (190°C). 2. In a mixing bowl, combine the chopped artichoke hearts, vegan cream cheese, vegan mayonnaise, grated vegan parmesan cheese, chopped fresh parsley, minced garlic, salt, and pepper. 3. Transfer the mixture to an oven-safe dish. 4. Bake for 15-20 minutes, until hot and bubbly. 5. Serve with chips or crackers.',
        produceID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Artichoke and Tomato Pasta',
        time: '25 minutes',
        ingredients: '8 oz. pasta, 1 can of artichoke hearts, drained and chopped, 1 pint cherry tomatoes, halved, 2 tbsp. olive oil, 2 cloves garlic, minced, Salt and pepper to taste',
        directions: '1. Cook the pasta according to package directions. 2. In a large pan, heat the olive oil over medium heat. 3. Add minced garlic to the pan and cook until fragrant. 4. Add chopped artichoke hearts and halved cherry tomatoes to the pan and cook until the tomatoes are slightly softened. 5. Drain the cooked pasta and add it to the pan with the artichokes and tomatoes. 6. Toss to combine and season with salt and pepper to taste. 7. Serve hot.',
        produceID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado Toast",
        time: "5 minutes",
        ingredients: "1 ripe avocado, sea salt, red pepper flakes, bread",
        directions: "Mash the avocado and spread it on toasted bread. Sprinkle with sea salt and red pepper flakes.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Tomato Salad",
        time: "10 minutes",
        ingredients: "2 ripe avocados, 2 medium-sized tomatoes, 1 tablespoon olive oil, 1 tablespoon balsamic vinegar, sea salt, black pepper",
        directions: "Dice the avocados and tomatoes. Toss with olive oil and balsamic vinegar. Sprinkle with sea salt and black pepper.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Black Bean Tacos",
        time: "15 minutes",
        ingredients: "1 ripe avocado, 6 warm tortillas, 1 can black beans, 2 medium-sized tomatoes, salsa",
        directions: "Mash the avocado and spread it on the tortillas. Top with black beans, diced tomatoes, and salsa.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Chickpea Salad",
        time: "10 minutes",
        ingredients: "1 ripe avocado, 1 can chickpeas, 1 tablespoon lemon juice, sea salt",
        directions: "Mash the avocado and toss with the chickpeas. Add lemon juice and a pinch of sea salt.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Cucumber Soup",
        time: "10 minutes + chilling time",
        ingredients: "2 ripe avocados, 1 peeled cucumber, 1 cup vegetable broth",
        directions: "Puree the avocados and cucumber in a blender. Add the vegetable broth and blend until combined. Chill in the refrigerator for at least 1 hour before serving.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Mango Smoothie",
        time: "5 minutes",
        ingredients: "1 ripe avocado, 1 ripe mango, 1 cup almond milk, ice cubes",
        directions: "Blend the avocado, mango, and almond milk in a blender until smooth. Add ice cubes and blend until combined.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Hummus Wrap",
        time: "10 minutes",
        ingredients: "1 ripe avocado, 2 tablespoons hummus, 1 whole-grain wrap, grated carrot, sprouts",
        directions: "Spread the hummus on the wrap. Top with sliced avocado, grated carrot, and sprouts. Roll up and enjoy.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Quinoa Bowl",
        time: "20 minutes",
        ingredients: "1 ripe avocado, 1 cup quinoa, 1 tablespoon chopped cilantro, lime juice",
        directions: "Cook the quinoa according to package instructions. Dice the avocado and add it to the cooked quinoa. Top with chopped cilantro and a squeeze of lime juice.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Avocado and Edamame Dip",
        time: "10 minutes",
        ingredients: "1 ripe avocado, 1 cup shelled edamame, 1 tablespoon lime juice, sea salt",
        directions: "Puree the avocado and edamame in a food processor until smooth. Add lime juice and a pinch of sea salt. Serve with raw vegetables or pita chips.",
        produceID: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth Porridge',
        time: '15 minutes',
        ingredients: '1 cup amaranth, 2 cups water, 1/4 tsp salt, 1/2 tsp cinnamon, 1/4 cup almond milk, 1/4 cup chopped nuts',
        directions: 'In a pot, bring amaranth, water, salt, and cinnamon to a boil. Reduce heat, cover and simmer for 15 minutes. Stir in almond milk and top with chopped nuts.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth Salad',
        time: '20 minutes',
        ingredients: '1 cup cooked amaranth, 1/4 cup diced cucumber, 1/4 cup diced tomato, 1/4 cup diced red onion, 1 tbsp olive oil, 1 tbsp lemon juice',
        directions: 'In a bowl, combine cooked amaranth, cucumber, tomato, and red onion. Drizzle with olive oil and lemon juice. Toss to combine.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth Patties',
        time: '25 minutes',
        ingredients: '1 cup cooked amaranth, 1/2 cup mashed black beans, 1/4 cup diced onion, 1 tsp cumin, 1/4 tsp chili powder, 1/4 tsp salt',
        directions: 'In a bowl, mix together cooked amaranth, mashed black beans, onion, cumin, chili powder, and salt. Form into patties and cook in a pan over medium heat until crispy on both sides.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth and Lentil Soup',
        time: '30 minutes',
        ingredients: '1 cup cooked amaranth, 1 cup cooked lentils, 1/4 cup diced onion, 1/4 cup diced carrot, 1/4 cup diced celery, 3 cups vegetable broth',
        directions: 'In a pot, combine cooked amaranth, cooked lentils, onion, carrot, celery, and vegetable broth. Bring to a boil, reduce heat and simmer for 20 minutes.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth Stir-Fry',
        time: '20 minutes',
        ingredients: '1 cup cooked amaranth, 1/4 cup sliced bell pepper, 1/4 cup sliced onion, 1/2 cup sliced mushrooms, 1 tbsp soy sauce, 1 tbsp sesame oil',
        directions: 'In a pan, sauté bell pepper, onion, and mushrooms in sesame oil until tender. Add cooked amaranth and soy sauce, stir until well combined and heated through.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth and Sweet Potato Bowl',
        time: '30 minutes',
        ingredients: '1 cup cooked amaranth, 1/2 cup mashed sweet potato, 1/4 cup sliced avocado, 1/4 cup diced tomato, 1 tbsp olive oil, 1 tbsp lemon juice',
        directions: 'In a bowl, combine cooked amaranth, mashed sweet potato, avocado, and tomato. Drizzle with olive oil and lemon juice. Toss to combine.',
        produceID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
