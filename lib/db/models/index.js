import SquadJSInstance from './squadjs-instance.js';
import SquadJSInstancePlugin from './squadjs-instance-plugins.js';

SquadJSInstance.hasMany(SquadJSInstancePlugin, { foreignKey: 'instanceID', as: 'plugins' });
SquadJSInstancePlugin.belongsTo(SquadJSInstance, { foreignKey: 'instanceID', as: 'plugins' });

export { SquadJSInstance, SquadJSInstancePlugin };
