'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produces', [
      {
        name: 'Artichoke',
        description: 'A type of thistle with edible parts like the heart and leaves.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Avocado',
        description: 'A fruit that is high in healthy fats and used in many recipes, from guacamole to smoothies.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amaranth',
        description: 'A gluten-free, high-protein grain used in many cultures for its nutritional value.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Broccoli',
        description: 'A cruciferous vegetable high in fiber, vitamins, and minerals, with many health benefits.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brussels Sprouts',
        description: 'A cruciferous vegetable similar to broccoli, high in fiber, vitamins, and minerals.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bell Pepper',
        description: 'A sweet or spicy vegetable that is a good source of vitamins A and C.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )},


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produces', null, {});
  },
};
  

