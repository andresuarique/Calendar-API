import { Strategy } from "passport-local";
import { UsersService } from "../../../services/user.service.js";
import boom  from "@hapi/boom";
import bcrypt from "bcrypt"

const usersService = new UsersService();
const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, done) => {
    try{
        const user = await usersService.findByEmail(email);
        console.log(user.password);
        if(!user){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            done(boom.unauthorized(),false);
        }
        delete user.dataValues.password;
        done(null,user);
    }catch(error){
        done(error, false);
    }
});

export {localStrategy};