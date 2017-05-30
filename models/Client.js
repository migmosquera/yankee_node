module.exports = function(sequelize, DataTypes){
  return  sequelize.define('client', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  dni: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  limit: {
    type: DataTypes.INTEGER
  },
  cant_drink: {
    type: DataTypes.INTEGER
  },
  cant_Food: {
    type: DataTypes.INTEGER
  },
})
} 