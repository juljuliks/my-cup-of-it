const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Social extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Social.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    socialTitle: {
      type: DataTypes.ENUM({
        values: ['Telegram', 'WhatsApp', 'LinkedIn'],
      }),
    },
    url: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    sequelize,
    modelName: 'Social',
    timestamps: false,
  });
  return Social;
};
