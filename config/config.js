require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE, DIALECT, DB_TESTING } = process.env;
module.exports = 
{
  "development":  {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT,
    "logging": false
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_TESTING,
    "host": DB_HOST,
    "dialect": DIALECT,
    "logging": false
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT,
    "logging": false
  }
}

