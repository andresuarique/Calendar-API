import { Model, DataTypes, Sequelize } from "sequelize";
import  boom from "@hapi/boom";
import { EVENT_TABLE } from "./event.model.js";
import { TAG_TABLE } from "./tag.model.js";

const EVENT_TAG_TABLE = 'event_tags';
const EVENT_TAG_MODEL = 'EventTag';

const EventTagSchema ={
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
    tagId:{
        allowNull: false,
        field: 'tag_id',
        type: DataTypes.INTEGER,
        references: {
            model: TAG_TABLE,
            key: 'id'
        },        
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class EventTag extends Model {
    static associate(models){
    }

    static config (sequelize){
        return{
            sequelize,
            tableName: EVENT_TAG_TABLE,
            modelName: EVENT_TAG_MODEL,
            timestamps: false
        }
    }
}

export { EVENT_TAG_TABLE, EventTagSchema, EventTag };