import express from 'express';
import { UsersService } from '../services/user.service.js';

const usersRouter = express.Router();
const usersService = new UsersService();

usersRouter.get('/', async (req, res) =>{
    const users = await usersService.find();
    res.status(200).json(users);
});

usersRouter.get('/:id', async (req, res) =>{
    const { id } = req.params;
    const user = await usersService.findOne(id);
    res.status(200).json(user);
});

usersRouter.post('/', async (req, res) =>{
    const body = req.body;
    const user = await usersService.create(body);
    res.status(200).json(user);
});

usersRouter.post('/login', async (req, res) =>{
    const body = req.body;

    res.status(200).json(user);
});

usersRouter.patch('/:id', async (req, res) =>{
    const {id} = req.params;
    const body = req.body;
    const user = await usersService.update(id,body);
    res.status(200).json(user);
});

usersRouter.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const user = await usersService.delete(id);
    res.status(200).json(user);
});


export {usersRouter};