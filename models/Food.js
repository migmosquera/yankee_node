module.exports = function(sequelize, DataTypes){
  return  sequelize.define('food', {
  name: {
    type: DataTypes.STRING
  },  
  cant_food: {
    type: DataTypes.INTEGER
  },
})
} 