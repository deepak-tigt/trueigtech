const  {Pool}  = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5433, // default Postgres port
  database: 'Ecommerce_db'
});

// pool.on('connect', () => {
//   console.log('PostgreSQL connected');
// });

module.exports = pool;