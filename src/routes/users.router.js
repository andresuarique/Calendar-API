import express from 'express';
import { UsersService } from '../services/user.service.js';

const usersRouter = express.Router();
const usersService = new UsersService();

usersRouter.get('/', async (req, res, next) =>{
    try{
        const users = await usersService.find();
        res.status(200).json(users);
    }catch(error){
        next(error);
    }    
});

usersRouter.get('/:id', async (req, res, next) =>{
    try{
        const { id } = req.params;
        const user = await usersService.findOne(id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.post('/', async (req, res, next) =>{
    try{
        const body = req.body;
        const user = await usersService.create(body);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.post('/login', async (req, res, next) =>{
    try{
        const body = req.body;
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.patch('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const body = req.body;
        const user = await usersService.update(id,body);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});

usersRouter.delete('/:id', async (req, res, next) =>{
    try{
        const { id } = req.params;
        const user = await usersService.delete(id);
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
});


export {usersRouter};