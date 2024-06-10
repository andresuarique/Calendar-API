import {usersRouter} from './users.router.js';
import { authRouter } from './auth.router.js';

function routerApi(app){
    app.use('/users',usersRouter);
    app.use('/auth',authRouter);
}
export {routerApi};