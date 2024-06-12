import {usersRouter} from './users.router.js';
import { authRouter } from './auth.router.js';
import { eventsRouter } from './events.router.js';

function routerApi(app){
    app.use('/users',usersRouter);
    app.use('/auth',authRouter);
    app.use('/events',eventsRouter);
}
export {routerApi};