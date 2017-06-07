module.exports = function(sequelize, DataTypes){
  return  sequelize.define('client', {
  firstName: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.TEXT
  },
  limit_drink: {
    type: DataTypes.INTEGER
  },
  limit_food: {
    type: DataTypes.INTEGER
  },
  client_vip: {
    type: DataTypes.BOOLEAN
  },
})
} 