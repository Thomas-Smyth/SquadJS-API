import Sequelize from 'sequelize';

import { sequelize } from '../index.js';

const { DataTypes } = Sequelize;

export default sequelize.define('SquadJSInstance', {
  host: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  queryPort: {
    type: DataTypes.INTEGER,
    primaryKey: true
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
  plugins: {
    type: DataTypes.TEXT
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
