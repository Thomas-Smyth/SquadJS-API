import Sequelize from 'sequelize';

import { sequelize } from '../index.js';

const { DataTypes } = Sequelize;

export default sequelize.define('SquadJSInstance', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  
  host: {
    type: DataTypes.STRING
  },
  queryPort: {
    type: DataTypes.INTEGER
  },

  name: {
    type: DataTypes.STRING
  },
  playerCount: {
    type: DataTypes.INTEGER
  },

  version: {
    type: DataTypes.STRING
  },
  logReaderMode: {
    type: DataTypes.STRING
  },

  firstPing: {
    type: DataTypes.DATE,
    defaultValue: Date.now
  },
  lastPinged: {
    type: DataTypes.DATE,
    defaultValue: Date.now
  }
});
