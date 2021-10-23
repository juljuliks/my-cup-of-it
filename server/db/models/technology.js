const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { through: 'Stacks', foreignKey: 'technologyId' });
    }
  }
  Technology.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.ENUM('frontend', 'backend'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Technology',
  });
  return Technology;
};
