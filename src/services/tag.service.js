import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";
import bcrypt from 'bcrypt';

class TagsService{
    constructor(){
    }
    async create(body){
        const tag = await models.Tag.create(body);        
        return tag;
    }

    async find(){
        const rta = await models.Tag.findAll({
            include: ['user']
        });
        const newRta = rta.map(tag =>{
            delete tag.dataValues.user.dataValues.password;
        });
        return rta;
    }

    async findOne(id, userId){
        const rta = await models.Tag.findOne({
            where:{
                'id':id,
                'userId':userId
            } ,        
            include: ['user']
        });
        if (!rta) {
            throw boom.notFound('tag not found');
          }
        delete rta.dataValues.user.dataValues.password;
        return rta;
    }

    async findByUser(userId){
        const rta = await models.Tag.findAll({
            where:{
                'userId': userId
            },
            include: ['user']
        });
        const newRta = rta.map(tag =>{
            delete tag.dataValues.user.dataValues.password;
        });
        return rta;
    }

    async update(id, body, userId){
        const tag = await this.findOne(id,userId);
        const rta = await tag.update(body);
        return rta;

    }

    async delete(id,userId){
        const tag = await this.findOne(id,userId);
        const rta = await tag.destroy();
        return {id};
    }
}
export {TagsService};