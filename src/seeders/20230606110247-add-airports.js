'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        cityId: 4,
        address:'KIAL Rd, Devanahalli',
        code:'BLR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 4,
        address:'6MH5+479, Kozhikode-Mysore-Kollegal Hwy',
        code:'MYQ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengaluru International Airport',
        cityId: 4,
        address:'Bajpe Main Rd, Kenjar HC',
        code:'IXE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 12,
        address:'New Delhi',
        code:'DEL',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
