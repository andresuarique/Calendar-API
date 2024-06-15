import express from 'express';
import { TagsService } from '../services/tag.service.js';
import passport from 'passport';

const tagsRouter = express.Router();
const tagsService = new TagsService();

/*tagsRouter.get('/',
    //passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{        
        const tags = await tagsService.find();
        res.status(200).json(tags);
    }catch(error){
        next(error);
    }    
});*/

tagsRouter.get('/my-tags',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const user = req.user;
        const tags = await tagsService.findByUser(user.sub);
        res.status(200).json(tags);
    }catch(error){
        next(error);
    }    
});

tagsRouter.get('/:id',
    passport.authenticate('jwt', {session: false}),
     async (req, res, next) =>{
    try{
        const { id } = req.params;
        const user = req.user;
        const tag = await tagsService.findOne(id,user.sub);
        res.status(200).json(tag);
    }catch(error){
        next(error);
    }
});

tagsRouter.post('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const user = req.user;
        let body = req.body;
        const tag = await tagsService.create({
            ...body,
            userId: user.sub
        });
        res.status(201).json(tag);
    }catch(error){
        next(error);
    }
});

tagsRouter.patch('/:id',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{
        const {id} = req.params;
        const user = req.user;
        const body = req.body;
        const tag = await tagsService.update(id,body,user.sub);
        res.status(200).json(tag);
    }catch(error){
        next(error);
    }
});

tagsRouter.delete('/:id',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) =>{
    try{        
        const { id } = req.params;
        const user = req.user;
        const tag = await tagsService.delete(id,user.sub);
        res.status(200).json(tag);
    }catch(error){
        next(error);
    }
});


export {tagsRouter};