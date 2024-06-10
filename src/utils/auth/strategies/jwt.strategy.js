import { Strategy, ExtractJwt } from "passport-jwt";
import { UsersService } from "../../../services/user.service.js";
import boom  from "@hapi/boom";
import bcrypt from "bcrypt";
import { config } from "../../../config/config.js";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options, (payload, done) =>{
    return done(null, payload);
});

export {jwtStrategy};