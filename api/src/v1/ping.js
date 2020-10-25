import {  SquadJSInstance } from 'lib/db/models';

export default async function(ctx){
  // get variables from request
  const config = ctx.request.body.config;

  const host = config.server.host;
  const queryPort = config.server.queryPort;

  // check request is valid
  if (!host || !queryPort) {
    ctx.body = { error: 'Invalid ping.' };
    return;
  }

  // save ping information
  await SquadJSInstance.upsert({ host, queryPort, config: JSON.stringify(config), lastPinged: Date.now() }, { where: { host, queryPort } });

  // respond
  ctx.body = { message: 'Pong.' };
}