const Koa = require('koa');
const KoaRouter = require('koa-router');
const authRouter = require('./api/routes/authRoutes');

const app = new Koa();
const router = new KoaRouter();

//Router middleware
app.use(router.routes()).use(router.allowedMethods());
app.use(authRouter.routes()).use(authRouter.allowedMethods());

app.listen(3000, () => console.log('Server running on port 3000'));
