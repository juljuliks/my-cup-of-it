module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Socials', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Users',
          },
        },
      },
      socialTitle: {
        type: Sequelize.ENUM({
          values: ['Telegram', 'WhatsApp', 'LinkedIn'],
        }),
      },
      url: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Socials');
  },
};
