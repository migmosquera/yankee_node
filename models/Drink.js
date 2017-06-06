module.exports = function(sequelize, DataTypes){
  return  sequelize.define('drink', {
  name: {
    type: DataTypes.STRING
  },  
  cant_drink: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.STRING
  },
})
} 