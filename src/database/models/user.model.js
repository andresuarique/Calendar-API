import { Model, DataTypes, Sequelize } from "sequelize";
import  boom from "@hapi/boom";

const USER_TABLE = 'users';
const USER_MODEL = 'User';

const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
};

class User extends Model {
    static associate(models){
        this.hasMany(models.Events,{
            as: 'events',
            foreignKey: 'userId'
        });
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: USER_MODEL,
            timestamps: false
        }
    }    
}
export { USER_TABLE, UserSchema, User };