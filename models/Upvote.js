const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create our Comment model
class Upvote extends Model {}

//create Post table and configurations
Upvote.init(
  {
    user_upvoted_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "upvote",
  }
);

module.exports = Upvote;
