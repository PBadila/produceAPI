'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HealthFacts', [
        {
          fact: 'Artichokes are a good source of fiber, vitamin C, folate, and magnesium.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Artichokes have been shown to help improve digestion and lower cholesterol levels.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'The antioxidants in artichokes may help protect against certain cancers and oxidative stress.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Artichokes are a good source of fiber, vitamin C, and folate.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'To prepare artichokes, cut off the stem and top, remove the tough outer leaves, trim the thorny tips, and steam or boil until tender.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Artichokes can be eaten as a side dish or used in dips, salads, or on pizza.',
          produceID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Avocados are a great source of heart-healthy monounsaturated fats.',
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Avocados are high in fiber and contain more potassium than bananas.',
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Eating avocados may help improve heart health, lower cholesterol levels, and reduce inflammation.',
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Avocados are high in heart-healthy monounsaturated fats and fiber.',
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: "'To select a ripe avocado, gently press the skin near the stem, which should give slightly if it's ripe.'",
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Avocado can be mashed and used as a spread, added to salads or smoothies, or used as a substitute for butter or oil in baked goods.',
          produceID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Amaranth is a good source of protein, fiber, and micronutrients such as magnesium and iron.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Amaranth is gluten-free and has been shown to have anti-inflammatory effects.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'The antioxidants in amaranth may help protect against chronic diseases such as heart disease and cancer.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Amaranth is a good source of protein, fiber, and minerals like iron and calcium.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'To cook amaranth, rinse it in cold water and then simmer in a 2:1 ratio of water to amaranth until tender.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Amaranth can be used as a gluten-free substitute for grains in porridge, salads, or as a side dish.',
          produceID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Broccoli is a good source of fiber, vitamin C, and vitamin K.',
          produceID: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Eating broccoli may help improve digestion, lower inflammation, and reduce the risk of certain cancers.',
          produceID: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Broccoli is rich in antioxidants such as sulforaphane and kaempferol.',
          produceID: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Brussel sprouts are a good source of fiber, vitamin C, and vitamin K.',
          produceID: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Eating brussel sprouts may help improve digestion, lower inflammation, and reduce the risk of certain cancers.',
          produceID: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fact: 'Brussel sprouts are rich in antioxidants such as kaempferol and quercetin.',
          produceID: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
  )},
        
async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HealthFacts', null, {});
  },
};

