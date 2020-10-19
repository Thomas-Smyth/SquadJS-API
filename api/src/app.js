import Koa from 'koa';
import Router from 'koa-router';
import Helmet from 'koa-helmet';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';

import ping from './routes/ping.js';

const inProduction = process.env.NODE_ENV;

const app = new Koa();

app.use(Helmet());
app.use(Cors());
app.use(
  BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
      if (err) console.log(err);
      ctx.throw('body parse error', 422);
    }
  })
);

if (!inProduction) app.use(Logger());

const router = new Router();

router.get('/', (ctx) => ctx.redirect('https://github.com/Thomas-Smyth/SquadJS'));
router.post('/ping', ping);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
