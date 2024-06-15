import express from 'express';
import { UsersService } from '../services/user.service.js';
import passport from 'passport';

const usersRouter = express.Router();
const usersService = new UsersService();

usersRouter.get('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const users = await usersService.find();
        res.status(200).json(users);
    }catch(error){
        next(error);
    }    
});

usersRouter.get('/:id',
    passport.authenticate('jwt', {session: false}),
     async (req, res, next) =>{
    try{
        const { id } = req.params;
        const user = await usersService.findOne(id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.post('/',
    async (req, res, next) =>{
    try{
        const body = req.body;
        const user = await usersService.create(body);
        res.status(201).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.patch('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const user = req.user;
        const body = req.body;
        const updatedUser = await usersService.update(user.sub,body);
        res.status(200).json(updatedUser);
    }catch(error){
        next(error);
    }
});

usersRouter.delete('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const user = req.user;
        const deletedUser = await usersService.delete(user.sub);
        res.status(200).json(deletedUser);
    }catch(error){
        next(error);
    }
});


export {usersRouter};