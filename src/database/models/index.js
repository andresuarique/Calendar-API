import { User, UserSchema } from "./user.model.js";
import { Event, EventSchema } from "./event.model.js";
import { Tag, TagSchema } from "./tag.model.js";
import { EventTag, EventTagSchema } from "./event-tags.model.js";

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Event.init(EventSchema, Event.config(sequelize));
    Tag.init(TagSchema, Tag.config(sequelize));
    EventTag.init(EventTagSchema, EventTag.config(sequelize));

    User.associate(sequelize.models);
    Event.associate(sequelize.models);
    Tag.associate(sequelize.models);
}
export {setupModels};