import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const authRouter = express.Router();

authRouter.post('/login',
    passport.authenticate('local',{session: false}),
    async (req, res, next) =>{
    try{
        const user = req.user;
        const payload = {
            sub: user.id
        };
        const token = jwt.sign(payload, config.jwtSecret);
        res.status(200).json({
            user,
            token
        });
    }catch(error){
        next(error);
    }
});


export {authRouter};