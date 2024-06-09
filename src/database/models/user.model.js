import { Model, DataTypes, Sequelize } from "sequelize";

const USER_TABLE = 'users';
const USER_MODEL = 'user';

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
    }
}

class User extends Model {
    static associate(){
        //associate
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