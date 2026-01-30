'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [
      {
        firstName: 'ravi',
        lastName: 'gautam',
        email: 'example1@example.com',
        password:'1234',
        createdAt:new Date(),
        updatedAt :new Date()
        
      },
      {
        firstName: 'gaurav',
        lastName: 'bro',
        email: 'example2@example.com',
        password:'1234',
        createdAt:new Date(),
        updatedAt :new Date()
        
      },

      {
        firstName: 'krish',
        lastName: 'bro',
        email: 'example3@example.com',
        password:'1234',
        createdAt:new Date(),
        updatedAt :new Date()
        
      },
      


    ]);
  },

  async down (queryInterface, Sequelize) {
   
     await    queryInterface.bulkInsert('Users')
  }
};
