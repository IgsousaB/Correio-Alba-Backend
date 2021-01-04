// Changed from (ormconfig.json)

import { ConnectionOptions } from 'typeorm';

// TEST CONNECTION
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'correiodefuturo',
  password: '0321', // MUDAR SENHA
  database: 'alba',
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
} as ConnectionOptions;

// ORIGINAL CONNECTION
// "type": "postgres",
// "host": "localhost",
// "port": 5435,
// "username": "postgres",
// "password": "docker",
// "database": "alba_correios",
