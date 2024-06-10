import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";

class UsersService{

constructor(){
    this.users= [];
}

    async create(body){
        const user = await models.User.create(body);
        return user;
    }

    async find(){
        const rta = await models.User.findAll();
        return rta;
    }

    async findOne(id){
        const rta = await models.User.findByPk(id);
        if (!rta) {
            throw boom.notFound('user not found');
          }
        return rta;
    }

    async update(id, body){
        const user = await this.findOne(id);
        const rta = await user.update(body);
        return rta;

    }

    async delete(id){
        const user = await this.findOne(id);
        const rta = await user.destroy();
        return {id};
    }
}

export { UsersService };