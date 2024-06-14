import { User, UserSchema } from "./user.model.js";
import { Event, EventSchema } from "./event.model.js";

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Event.init(EventSchema, Event.config(sequelize));


    User.associate(sequelize.models);
    Event.associate(sequelize.models);
}
export {setupModels};