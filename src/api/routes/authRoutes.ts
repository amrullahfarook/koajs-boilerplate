import Router from 'koa-router';
import { handleRegister, handleLogin } from '../controllers/authController';

const router: Router = new Router();

router.post('/register', handleRegister);

router.post('/login', handleLogin);

export default router;
