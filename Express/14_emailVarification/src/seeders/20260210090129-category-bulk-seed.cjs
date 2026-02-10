'use strict';
const {faker} = require("@faker-js/faker")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const total = 100;
    const categories = [];
    const now = new Date();

    for(let i=0;i < total ; i++){
      const name=`${i}${faker.commerce.department()}`

      categories.push({
        name,
        description:`${name} games are in this category`,
        status:true,
        createdAt:now,
        updatedAt:now
      })
    }
    await queryInterface.bulkInsert("GameCategories",categories)
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameCategories",null)
  }
};
