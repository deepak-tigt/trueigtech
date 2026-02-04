import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Administration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // many admins can belongs to one role 
      Administration.belongsTo(models.Role,{
        foreignKey:"role_id",
        as:"role"
      });

      // self reference for creation 
      Administration.belongsTo(models.Administration,{
        foreignKey:"created_by",
        as:"creator"
      })

    }
  }
  Administration.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      passsword: {
        type: DataTypes.STRING,
        allowNull:false
      },
      permissions: {
        type: DataTypes.JSONB,
        allowNull:false
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Administration',
    underscored:true,
  });
  return Administration;
};