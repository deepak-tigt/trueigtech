'use strict';
const {faker} = require("@faker-js/faker")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const total = 1000;
    const games = [];
    const now = new Date();

    for(let i=0;i<total;i++){
      const name = `${i}${faker.word.words(2)}`

      games.push({
        name,
        categoryId:faker.number.int({min:1,max:111}),
        status:true,
        createdAt:now,
        updatedAt:now
      })
    }
    await queryInterface.bulkInsert("Games",games)
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Games",null)
  }
};
