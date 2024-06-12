import express from 'express';
import { EventsService } from '../services/event.service.js';
import passport from 'passport';

const eventsRouter = express.Router();
const eventsService = new EventsService();

eventsRouter.get('/',
    //passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const events = await eventsService.find();
        res.status(200).json(events);
    }catch(error){
        next(error);
    }    
});

eventsRouter.get('/:id',
    //passport.authenticate('jwt', {session: false}),
     async (req, res, next) =>{
    try{
        const { id } = req.params;
        const event = await eventsService.findOne(id);
        res.status(200).json(event);
    }catch(error){
        next(error);
    }
});

eventsRouter.post('/',
    //passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const body = req.body;
        const event = await eventsService.create(body);
        res.status(201).json(event);
    }catch(error){
        next(error);
    }
});

eventsRouter.patch('/:id',
    //passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const {id} = req.params;
        const body = req.body;
        const event = await eventsService.update(id,body);
        res.status(200).json(event);
    }catch(error){
        next(error);
    }
});

eventsRouter.delete('/:id',
    //passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const { id } = req.params;
        const event = await eventsService.delete(id);
        res.status(200).json(event);
    }catch(error){
        next(error);
    }
});


export {eventsRouter};