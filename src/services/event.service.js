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
        const rta = await models.Event.findAll({
            where:{
                 'isPublic':true
            },
            include: ['user']
        });
        const newRta = rta.map(event =>{
            delete event.dataValues.user.dataValues.password;
        });
        return rta;
    }

    async findOne(id, userId){
        const rta = await models.Event.findOne({
            where:{
                'id':id,
                'userId':userId
            } ,        
            include: ['user']
        });
        if (!rta) {
            throw boom.notFound('event not found');
          }
        delete rta.dataValues.user.dataValues.password;
        return rta;
    }

    async findByUser(userId){
        const rta = await models.Event.findAll({
            where:{
                'userId': userId
            },
            include: ['user']
        });
        const newRta = rta.map(event =>{
            delete event.dataValues.user.dataValues.password;
        });
        return rta;
    }

    async update(id, body, userId){
        const event = await this.findOne(id,userId);
        const rta = await event.update(body);
        return rta;

    }

    async delete(id,userId){
        const event = await this.findOne(id,userId);
        const rta = await event.destroy();
        return {id};
    }
}
export {EventsService};