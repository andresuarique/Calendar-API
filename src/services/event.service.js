import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";
import bcrypt from 'bcrypt';

class EventsService{
    constructor(){
    }
    async create(body){
        const event = await models.Event.create(body);
        return event;
    }

    async find(){
        const rta = await models.Event.findAll();
        return rta;
    }

    async findOne(id){
        const rta = await models.Event.findByPk(id);
        if (!rta) {
            throw boom.notFound('event not found');
          }
        return rta;
    }

    async update(id, body){
        const event = await this.findOne(id);
        const rta = await event.update(body);
        return rta;

    }

    async delete(id){
        const event = await this.findOne(id);
        const rta = await event.destroy();
        return {id};
    }
}
export {EventsService};