const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    admin: {
      type: DataTypes.STRING,
    },
    adminPhoto: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Admin',
  });
  return Admin;
};
