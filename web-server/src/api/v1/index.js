import Router from '@koa/router';

import ping from './ping.js';
import stats from './live.js';

const router = new Router();

router.post('/ping', ping);
router.get('/live', stats);

export default router;
