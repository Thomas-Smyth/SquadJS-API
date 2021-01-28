import { SquadJSInstance, SquadJSInstancePlugin } from 'lib/db/models';
import { Op } from 'lib/db/sequelize';

export default async function (ctx) {
  // Get mandatory variables.
  const host = ctx.request.body.server?.host;
  const queryPort = ctx.request.body.server?.queryPort;

  // Check the mandatory variables are present.
  if (!host || !queryPort) {
    ctx.body = { error: 'Invalid ping.' };
    return;
  }

  // Collect the other variables.
  const id = `${host}:${queryPort}`;
  const name = ctx.request.body.server?.name;
  const playerCount = ctx.request.body.server?.playerCount;

  const version = ctx.request.body.squadjs?.version;
  const logReaderMode = ctx.request.body.squadjs?.logReaderMode;

  const plugins = ctx.request.body.squadjs?.plugins;

  // Save instance information.
  await SquadJSInstance.upsert(
    {
      id,
      host,
      queryPort,
      name,
      playerCount,
      version,
      logReaderMode,
      lastPinged: Date.now()
    },
    {
      where: {
        id
      }
    }
  );

  // Save plugin information.
  await SquadJSInstancePlugin.bulkCreate(
    plugins.map(
      plugin => (
        {
          instanceID: id,
          plugin: plugin.plugin,
          config: JSON.stringify(plugin)
        }
      )
    ),
    {
      updateOnDuplicate: ['config']
    }
  );

  await SquadJSInstancePlugin.destroy(
    {
      where: {
        instanceID: id,
        plugin: {
          [Op.notIn]: plugins.map(plugin => plugin.plugin)
        }
      }
    }
  );

  // Respond
  ctx.body = { message: 'Pong.' };
}
