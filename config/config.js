require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE, DIALECT } = process.env;
module.exports = 
{
  "development":  {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT
  }
}

