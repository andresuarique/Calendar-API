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
        this.hasMany(models.Event,{
            as: 'createdEvents',
            foreignKey: 'userId'
        });
        this.hasMany(models.Tag,{
            as: 'tags',
            foreignKey: 'userId'
        });
        this.belongsToMany(models.Event, {
            through: models.UserEvent,
            as: 'participatedEvents',
            foreignKey: 'userId',
            otherKey: 'eventId'
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