import { Model, DataTypes, Sequelize } from "sequelize";
import  boom from "@hapi/boom";
import { USER_TABLE } from "./user.model.js";

const EVENT_TABLE = 'events';
const EVENT_MODEL = 'event';

const EventSchema ={
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
    title:{
        allowNull: false,
        type: DataTypes.STRING
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING
    },
    startDate:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'start_date',
        defaultValue: Sequelize.NOW
    },
    endDate:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'end_date',
        defaultValue: Sequelize.NOW
    },
    isPublic:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'end_date',
        defaultValue: true
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Event extends Model {
    static associate(models){
        this.belongsTo(models.User, {
            as: 'user',
        });
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: EVENT_TABLE,
            modelName: EVENT_MODEL,
            timestamps: false
        }
    }
}

export { EVENT_TABLE, EventSchema, Event };