const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { as: 'Interviewer', foreignKey: 'interviewerId' });
      this.belongsTo(models.User, { as: 'Mentor', foreignKey: 'mentorId' });
    }
  }
  Meet.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    interviewerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mentorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM({
        values: ['completed', 'pending', 'cancelled', 'accepted'],
      }),
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
    modelName: 'Meet',
  });
  return Meet;
};
