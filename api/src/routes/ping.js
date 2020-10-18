import {  SquadJSInstance } from 'lib/db/models';

export default async function(ctx){
  const host = ctx.request.body.host;
  const queryPort = ctx.request.body.queryPort;

  if (!host || !queryPort) {
    ctx.body = { error: 'Invalid ping.' };
    return;
  }

  await SquadJSInstance.upsert({ host, queryPort, lastPinged: Date.now() }, { where: { host, queryPort } });

  ctx.body = { message: 'Pong.' };
}