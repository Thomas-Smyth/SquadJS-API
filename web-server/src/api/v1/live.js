import { SquadJSInstance } from 'lib/db/models';
import { Op } from 'lib/db/sequelize';

export default async function (ctx) {
  ctx.body = {
    servers: await SquadJSInstance.count(
      {
        where: {
          lastPinged: {
            [Op.gte]: Date.now() - 60 * 60 * 1000 // last hour
          }
        }
      }
    ),
    players: await SquadJSInstance.sum(
      'playerCount',
      {
        where: {
          lastPinged: {
            [Op.gte]: Date.now() - 60 * 60 * 1000 // last day
          }
        }
      }
    )
  };
}
