import { Model, DataTypes, Sequelize } from "sequelize";
import  boom from "@hapi/boom";
import { USER_TABLE } from "./user.model.js";

const TAG_TABLE = 'tags';
const TAG_MODEL = 'Tag';

const TagSchema ={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId:{
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },        
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    description:{
        allowNull: true,
        type: DataTypes.STRING
    },
    color:{
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: '#FFFFFF'
    }
};

class Tag extends Model {
    static associate(models){
        this.belongsTo(models.User, {
            as: 'user',
        });
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: TAG_TABLE,
            modelName: TAG_MODEL,
            timestamps: false
        }
    }
}

export { TAG_TABLE, TagSchema, Tag };