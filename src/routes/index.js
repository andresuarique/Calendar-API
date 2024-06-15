import {usersRouter} from './users.router.js';
import { authRouter } from './auth.router.js';
import { eventsRouter } from './events.router.js';
import { tagsRouter } from './tags.router.js';

function routerApi(app){
    app.use('/users',usersRouter);
    app.use('/auth',authRouter);
    app.use('/events',eventsRouter);
    app.use('/tags',tagsRouter);
}
export {routerApi};