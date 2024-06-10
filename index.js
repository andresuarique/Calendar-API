import express from 'express';
import {routerApi} from './src/routes/index.js';
import { config } from './src/config/config.js';

const app = express();

const port = config.port;

app.use(express.json());

routerApi(app);


app.listen(port, () => {
    console.log(`Listen in ${port}`);
  });