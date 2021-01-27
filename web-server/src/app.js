import Koa from 'koa';
import Router from '@koa/router';
import Helmet from 'koa-helmet';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';

import next from 'next';

import v1 from './api/v1/index.js';

const inProduction = process.env.NODE_ENV === 'production';

// Setup Koa.
const server = new Koa();
const router = new Router();

server.use(Helmet());
server.use(Cors());
server.use(
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
if (!inProduction) server.use(Logger());

// Setup API.
router.use(
  '/api/(.*)',
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
router.use('/api/v1', v1.routes());
router.use('/api/v1', v1.allowedMethods());

// Setup Next server for client.
const client = next({ dir: './client', dev: !inProduction });
const clientHandler = client.getRequestHandler();

router.all('(.*)', async (ctx) => {
  await clientHandler(ctx.req, ctx.res);
});

// Add routes to server.
server.use(router.routes());
server.use(router.allowedMethods());

export { server, client };
