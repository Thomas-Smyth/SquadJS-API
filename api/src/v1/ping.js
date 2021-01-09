import { SquadJSInstance } from 'lib/db/models';

export default async function (ctx) {
  // Get mandatory variables.
  const host = ctx.request.body.server?.host;
  const queryPort = ctx.request.body.server?.queryPort;

  // Check the mandatoru variables are present.
  if (!host || !queryPort) {
    ctx.body = { error: 'Invalid ping.' };
    return;
  }

  // Collect the other variables.
  const name = ctx.request.body.server?.name;
  const playerCount = ctx.request.body.server?.playerCount;

  const version = ctx.request.body.squadjs?.version;
  const logReaderMode = ctx.request.body.squadjs?.logReaderMode;

  const plugins = JSON.stringify(ctx.request.body.squadjs?.plugins);

  // Save ping information.
  await SquadJSInstance.upsert(
    {
      host,
      queryPort,
      name,
      playerCount,
      version,
      logReaderMode,
      plugins,
      lastPinged: Date.now()
    },
    {
      where: {
        host,
        queryPort
      }
    }
  );

  // respond
  ctx.body = { message: 'Pong.' };
}
