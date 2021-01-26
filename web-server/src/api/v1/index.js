import Router from 'koa-router';

import ping from './ping.js';

const router = new Router();

router.post('/ping', ping);

export default router;
