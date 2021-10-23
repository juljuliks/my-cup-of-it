module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Technologies', [
      {
        id: '0KXCe8xWmD',
        category: 'frontend',
        title: 'Vanilla JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'IkwcmqkuNv',
        category: 'frontend',
        title: 'React JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'l1BoZEH7FO',
        category: 'frontend',
        title: 'Vue JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'NDkWzcWQRt',
        category: 'backend',
        title: 'Node JS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'zcHv3xT8KU',
        category: 'backend',
        title: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ZiC0po-HCm',
        category: 'backend',
        title: 'Ruby',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ZiC0poCm',
        category: 'backend',
        title: 'SQL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ZiCoHCm',
        category: 'backend',
        title: 'MongoDB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'Zi0poseCm',
        category: 'frontend',
        title: 'Angular',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ZiC0sdfgHCm',
        category: 'backend',
        title: 'Express',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'Z0poerfH',
        category: 'frontend',
        title: 'Antd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ZiC0sHCm',
        category: 'backend',
        title: 'PHP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Technologies', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
