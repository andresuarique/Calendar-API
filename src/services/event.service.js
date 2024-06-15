import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";
import bcrypt from 'bcrypt';
import { TagsService } from './tag.service.js';
import { UsersService } from './user.service.js';

const tagsService = new TagsService();
const usersService = new UsersService();

class EventsService{
    constructor(){
    }
    async create(body){
        const event = await models.Event.create(body);        
        return event;
    }
    async addTags(userId, eventId, tagIds){
            const event = await this.findOne(eventId,userId);
            for (const tagId of tagIds) {
                await tagsService.findOne(tagId,userId);
            }
            await event.setTags(tagIds);
            const rta = await this.update(eventId,event,userId);  
            return rta;
    }

    async addParticipants(userId, eventId, participantIds){
        const event = await this.findOne(eventId,userId);
        for (const participantId of participantIds) {
            await usersService.findOne(participantId,userId);
        }
        await event.setParticipants(participantIds);
        const rta = await this.update(eventId,event,userId);  
        return rta;
}

    async find(){
        const rta = await models.Event.findAll({
            where:{
                 'isPublic':true
            },
            include: [{
                model: models.User,
                as: 'creator',
                attributes: { exclude: ['password'] }
            },
            {
                model: models.Tag,
                as: 'tags'
            },
            {
                model: models.User,
                as: 'participants',
                attributes: { exclude: ['password'] }
            }]
        });
        const newRta = rta.map(event =>{
            delete event.dataValues.creator.dataValues.password;
        });
        return rta;
    }

    async findOne(id, userId){
        const rta = await models.Event.findOne({
            where:{
                'id':id,
                'userId':userId
            } ,        
            include: [{
                model: models.User,
                as: 'creator',
                attributes: { exclude: ['password'] }
            },
            {
                model: models.Tag,
                as: 'tags'
            },
            {
                model: models.User,
                as: 'participants',
                attributes: { exclude: ['password'] }
            }]
        });
        if (!rta) {
            throw boom.notFound('event not found');
          }
        delete rta.dataValues.creator.dataValues.password;
        return rta;
    }

    async findByUser(userId){
        const rta = await models.Event.findAll({
            where:{
                'userId': userId
            },
            include: [{
                model: models.User,
                as: 'creator',
                attributes: { exclude: ['password'] }
            },
            {
                model: models.Tag,
                as: 'tags'
            },
            {
                model: models.User,
                as: 'participants',
                attributes: { exclude: ['password'] }
            }]
        });
        const newRta = rta.map(event =>{
            delete event.dataValues.creator.dataValues.password;
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