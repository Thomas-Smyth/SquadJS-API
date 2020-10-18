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
  firstPing: {
    type: DataTypes.DATE,
    defaultValue: Date.now
  },
  lastPinged: {
    type: DataTypes.DATE,
    defaultValue: Date.now
  }
});
