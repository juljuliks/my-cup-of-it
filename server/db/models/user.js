const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Technology, { through: 'Stacks', foreignKey: 'userId' });
      this.hasMany(models.Meet, { foreignKey: 'interviewerId' });
      this.hasMany(models.Meet, { foreignKey: 'mentorId' });
      this.belongsTo(models.Company, { foreignKey: 'companyId' });
      this.hasMany(models.Feedback, { foreignKey: 'userId' });
      this.hasMany(models.Social, { foreignKey: 'userId' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isMentor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    careerStart: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    companyId: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    position: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    userPhoto: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};
