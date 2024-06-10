import {usersRouter} from './users.router.js';

function routerApi(app){
    app.use('/users',usersRouter);
}
export {routerApi};