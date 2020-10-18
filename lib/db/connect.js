import sequelize from './sequelize.js';

import { SquadJSInstance } from './models/index.js';

export default async function () {
  try {
    console.log('Connecting to the SquadJS database...');
    await sequelize.authenticate();
    console.log('Connected to the SquadJS database.');
    console.log('Synchronizing the models...');
    await SquadJSInstance.sync();
    console.log('Synchronized the models.');
  } catch (err) {
    console.log(`Error thrown when connecting to the database: ${err.message}`);
  }
}
