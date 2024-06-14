import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";
import bcrypt from 'bcrypt';

class EventsService{
    constructor(){
    }
    async create(body){
        const event = await models.Event.create(body);
        delete event.dataValues.user.dataValues.password;
        return event;
    }

    async find(){
        const rta = await models.Event.findAll({
            include: ['user']
        });
        const newRta = rta.map(event =>{
            delete event.dataValues.user.dataValues.password;
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.Event.findByPk(id,{
            include: ['user']
        });
        if (!rta) {
            throw boom.notFound('event not found');
          }
        delete rta.dataValues.user.dataValues.password;
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