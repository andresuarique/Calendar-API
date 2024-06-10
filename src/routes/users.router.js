import express from 'express';
import { UsersService } from '../services/user.service.js';

const usersRouter = express.Router();
const usersService = new UsersService();

usersRouter.get('/', (req, res) =>{
    const users = usersService.find();
    res.json(users);
});

usersRouter.get('/:id', (req, res) =>{
    const { id } = req.params;
    const user = usersService.findOne(id);
    res.json(user);
});

usersRouter.post('/', (req, res) =>{
    const body = req.body;
    const user = usersService.create(body);
    res.json(user);
});

usersRouter.post('/login', (req, res) =>{
    const body = req.body;

    res.json(user);
});

usersRouter.put('/:id', (req, res) =>{
    const body = req.body;
    const user = usersService.update(body);
    res.json(user);
});

usersRouter.delete('/:id', (req, res) =>{
    const { id } = req.params;
    const user = usersService.delete(id);
    res.json("ok");
});


export {usersRouter};