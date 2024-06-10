import express from 'express';
import {routerApi} from './src/routes/index.js';
import { config } from './src/config/config.js';
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }  from './src/middlewares/error.handler.js';
const app = express();

const port = config.port;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listen in ${port}`);
  });