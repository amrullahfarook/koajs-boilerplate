import Koa from 'koa';
import { DefaultState, DefaultContext } from 'koa';
import json from 'koa-json';
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import authRouter from './api/routes/authRoutes';

const app: Koa<DefaultState, DefaultContext> = new Koa();

//Middleware
app.use(json());
app.use(logger())
app.use(bodyParser())
app.use(authRouter.routes()).use(authRouter.allowedMethods);

app.listen(3000, () => console.log('Server running on port 3000'));