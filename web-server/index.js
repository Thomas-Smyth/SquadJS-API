import { connect } from 'lib/db';
import { Logger } from 'lib/utils';

import { server, client } from './src/app.js';

const PORT = process.env.PORT || 80;

async function main() {
  // Prepare the Nextjs client.
  Logger.verbose('Main', 1, 'Preparing client...');
  await client.prepare();

  // Connect to the database.
  Logger.verbose('Main', 1, 'Connecting to database...');
  await connect();

  // Make the server listen to incoming traffic.
  Logger.verbose('Main', 1, 'Starting server...');
  server.listen(PORT, () => Logger.verbose('Main', 1, `Server started on port ${PORT}.`));
}

main();
