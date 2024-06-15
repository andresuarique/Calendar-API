import { Model, DataTypes, Sequelize } from "sequelize";
import  boom from "@hapi/boom";
import { EVENT_TABLE } from "./event.model.js";
import { USER_TABLE } from "./user.model.js";

const USER_EVENT_TABLE = 'user_events';
const USER_EVENT_MODEL = 'UserEvent';

const UserEventSchema ={
    eventId:{
        allowNull: false,
        field: 'event_id',
        type: DataTypes.INTEGER,
        references: {
            model: EVENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    }
};

class UserEvent extends Model {
    static associate(models){
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: USER_EVENT_TABLE,
            modelName: USER_EVENT_MODEL,
            timestamps: false
        }
    }
}

export { USER_EVENT_TABLE, UserEventSchema, UserEvent };