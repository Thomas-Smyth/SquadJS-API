import Sequelize from 'sequelize';

import { sequelize } from '../index.js';

const { DataTypes } = Sequelize;

export default sequelize.define('SquadJSInstancePlugin', {
  instanceID: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  plugin: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  config: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
