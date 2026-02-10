"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // indexing for user table
    // index on email
    await queryInterface.addIndex("Users", ["email"], {
      name: "users_email_index",
      unique: true,
    });

    // index for sorting with created at
    await queryInterface.addIndex("Users", ["createdAt"], {
      name: "users_createdAt_index",
    });

    // indexing for games 
    // index for categoryId
    await queryInterface.addIndex("Games", ["categoryId"], {
      name: "games_category_status_index",
    });

    // index for game name 
    await queryInterface.addIndex("Games", ["name"], {
      name: "games_name_index",
    });

    // indexing for gameCategory 
    // index for category name 
    await queryInterface.addIndex("GameCategories", ["name"], {
      name: "gamecategories_name_index",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Users", "users_email_index");
    await queryInterface.removeIndex("Users", "users_createdAt_index");

    await queryInterface.removeIndex("Games", "games_category_status_index");
    await queryInterface.removeIndex("Games", "games_name_index");

    await queryInterface.removeIndex("GameCategories", "gamecategories_name_index");

  },
};
