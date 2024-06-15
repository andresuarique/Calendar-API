import { models } from '../libs/sequelize.js';
import  boom  from "@hapi/boom";
import bcrypt from 'bcrypt';

class UsersService{

constructor(){
}

    async create(body){
        const hash = await bcrypt.hash(body.password,10);
        const user = await models.User.create({
            ...body,
            password: hash
        });
        delete user.dataValues.password;
        return user;
    }

    async find(){
        const rta = await models.User.findAll({
            attributes: { exclude: ['password'] }
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.User.findByPk(id,{
            attributes: { exclude: ['password'] }
        });
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

    async findByEmail( email ){
        const rta = await models.User.findOne({
            where: { email }
        });
        return rta;
    }
}

export { UsersService };