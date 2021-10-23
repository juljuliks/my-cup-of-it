const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'companyId' });
    }
  }
  Company.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Company',
  });
  return Company;
};
