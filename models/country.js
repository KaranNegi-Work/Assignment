// const DataType = require('sequelize');
// const db = require('../../Assignment/util/database');

// const Country = db.define('tbl_countries', {

//     id: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },

//     country_name:{
//         type: DataType.STRING(100),
//         allowNull: false, 
//     },

//     is_active: {
//       type: DataType.BOOLEAN,
//       allowNull: false, 
//       defaultValue: true
//     }
// });

// module.exports = Country;





'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  country.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    country_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    utc_created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    utc_updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }

  }, {
    sequelize,
    tableName: 'tbl_countries',
    modelName: 'country',
    createdAt: 'utc_created_at',
    updatedAt: 'utc_updated_at'

  });

  return country;

};
//npx sequelize-cli model:generate --name demomodel --attributes id:INTEGER,country_name:STRING,is_active:BOOLEAN
