import { Logger } from '../utils/index.js';

import sequelize from './sequelize.js';

import { SquadJSInstance, SquadJSInstancePlugin } from './models/index.js';

export default async function () {
  try {
    Logger.verbose(1, 'DB', 'Connecting to the SquadJS database...');
    await sequelize.authenticate();
    Logger.verbose(1, 'DB', 'Connected to the SquadJS database.');
    Logger.verbose(1, 'DB', 'Synchronizing the models...');
    await SquadJSInstance.sync();
    await SquadJSInstancePlugin.sync();
    Logger.verbose(1, 'DB', 'Synchronized the models.');
  } catch (err) {
    Logger.verbose(1, 'DB', `Error thrown when connecting to the database: ${err.message}`);
  }
}
