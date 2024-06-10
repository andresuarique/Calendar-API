import { models } from '../libs/sequelize.js';

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
        console.log({rta});
        return rta;
    }

    async findOne(id){
        const rta = await models.User.findByPk(id);
        return rta;
    }

    async update(id, body){
        const user = await models.User.findByPk(id);
        const rta = await user.update(body);
        return rta;

    }

    async delete(id){
        const user = await models.User.findByPk(id);
        const rta = await user.destroy();
        return {id};
    }
}

export { UsersService };