module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      interviewerId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      mentorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM({
          values: ['completed', 'pending', 'cancelled', 'accepted'],
        }),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Meets');
  },
};
